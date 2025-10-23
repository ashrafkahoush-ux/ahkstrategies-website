#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun } = require('docx');

const projectRoot = path.resolve(__dirname, '..');
const snapshotDir = path.join(projectRoot, 'dir_snapshots');
const docsDir = path.join(projectRoot, 'Project_Documents');

async function generateDiffReport() {
  const snapshots = fs.readdirSync(snapshotDir)
    .filter(f => f.startsWith('snapshot_') && f.endsWith('.json'))
    .sort()
    .reverse();

  if (snapshots.length < 2) {
    console.log('⚠️  Need at least 2 snapshots to generate diff report');
    return;
  }

  const [latest, previous] = snapshots.slice(0, 2);
  const latestData = JSON.parse(fs.readFileSync(path.join(snapshotDir, latest)));
  const previousData = JSON.parse(fs.readFileSync(path.join(snapshotDir, previous)));

  // Extract all file paths
  function extractPaths(node, prefix = '') {
    const paths = [];
    const currentPath = prefix ? `${prefix}/${node.name}` : node.name;
    
    if (!node.isDir) {
      paths.push(currentPath);
    }
    
    if (node.children) {
      node.children.forEach(child => {
        paths.push(...extractPaths(child, currentPath));
      });
    }
    
    return paths;
  }

  const latestPaths = new Set(extractPaths(latestData));
  const previousPaths = new Set(extractPaths(previousData));

  const added = [...latestPaths].filter(p => !previousPaths.has(p));
  const removed = [...previousPaths].filter(p => !latestPaths.has(p));

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const docParagraphs = [];

  // Title
  docParagraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `Change Report - ${new Date().toLocaleString()}`,
          bold: true,
          size: 32
        })
      ],
      spacing: { after: 200 }
    })
  );

  // Added files
  docParagraphs.push(
    new Paragraph({
      children: [
        new TextRun({ text: `Added Files (${added.length}):`, bold: true, size: 24, color: '00AA00' })
      ],
      spacing: { before: 200, after: 100 }
    })
  );
  added.forEach(file => {
    docParagraphs.push(
      new Paragraph({
        children: [new TextRun({ text: `+ ${file}`, font: 'Consolas', color: '00AA00' })]
      })
    );
  });

  // Removed files
  docParagraphs.push(
    new Paragraph({
      children: [
        new TextRun({ text: `Removed Files (${removed.length}):`, bold: true, size: 24, color: 'AA0000' })
      ],
      spacing: { before: 200, after: 100 }
    })
  );
  removed.forEach(file => {
    docParagraphs.push(
      new Paragraph({
        children: [new TextRun({ text: `- ${file}`, font: 'Consolas', color: 'AA0000' })]
      })
    );
  });

  const doc = new Document({
    sections: [{
      properties: {},
      children: docParagraphs
    }]
  });

  const docPath = path.join(docsDir, `Change_Report_${timestamp}.docx`);
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(docPath, buffer);
  console.log(`📊 Change report saved: ${docPath}`);
}

generateDiffReport().catch(console.error);
