#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { globby } = require('globby');
const { Document, Packer, Paragraph, TextRun } = require('docx');

const projectRoot = path.resolve(__dirname, '..');
const snapshotDir = path.join(projectRoot, 'dir_snapshots');
const docsDir = path.join(projectRoot, 'Project_Documents');

// Ensure snapshot and docs folders exist
[snapshotDir, docsDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function generateSnapshot() {
  console.log('🔍 Scanning project directory...');
  
  // Patterns to include and exclude
  const patterns = [
    '**/*',
    '!node_modules/**',
    '!.next/**',
    '!.git/**',
    '!dir_snapshots/**',
    '!Project_Documents/**',
    '!*.log',
    '!.DS_Store'
  ];

  const files = await globby(patterns, {
    cwd: projectRoot,
    dot: true,
    onlyFiles: false,
    markDirectories: true
  });

  // Build tree structure
  const tree = { name: path.basename(projectRoot), children: [] };
  
  files.forEach(file => {
    const parts = file.split('/');
    let current = tree;
    
    parts.forEach((part, index) => {
      const isDir = part.endsWith('/');
      const cleanName = isDir ? part.slice(0, -1) : part;
      
      let child = current.children.find(c => c.name === cleanName);
      if (!child) {
        child = { name: cleanName, isDir, children: [] };
        current.children.push(child);
      }
      current = child;
    });
  });

  // Sort directories first, then files
  function sortTree(node) {
    if (node.children) {
      node.children.sort((a, b) => {
        if (a.isDir && !b.isDir) return -1;
        if (!a.isDir && b.isDir) return 1;
        return a.name.localeCompare(b.name);
      });
      node.children.forEach(sortTree);
    }
  }
  sortTree(tree);

  // Generate timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  
  // Save JSON snapshot
  const jsonPath = path.join(snapshotDir, `snapshot_${timestamp}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(tree, null, 2));
  console.log(`✅ JSON snapshot saved: ${jsonPath}`);

  // Generate Word document
  const docParagraphs = [];
  
  // Title
  docParagraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `Directory Tree - ${new Date().toLocaleString()}`,
          bold: true,
          size: 32
        })
      ],
      spacing: { after: 200 }
    })
  );

  // Tree rendering
  function renderTree(node, depth = 0) {
    const indent = '  '.repeat(depth);
    const icon = node.isDir ? '📁' : '📄';
    
    docParagraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${indent}${icon} ${node.name}`,
            font: 'Consolas'
          })
        ]
      })
    );

    if (node.children) {
      node.children.forEach(child => renderTree(child, depth + 1));
    }
  }

  renderTree(tree);

  const doc = new Document({
    sections: [{
      properties: {},
      children: docParagraphs
    }]
  });

  const docPath = path.join(docsDir, `DirTree_${timestamp}.docx`);
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(docPath, buffer);
  console.log(`📄 Word document saved: ${docPath}`);
}

generateSnapshot().catch(console.error);
