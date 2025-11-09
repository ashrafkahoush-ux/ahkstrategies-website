import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

/**
 * Emma KnowledgeBase Content API
 * Provides dynamic access to reports, analyses, and strategic documents
 * Syncs with Emma_KnowledgeBase/sources directory
 */

interface ContentItem {
  id: string;
  title: string;
  category: string;
  path: string;
  modified: string;
  size: number;
  pillar?: string;
}

const KNOWLEDGE_BASE_PATH = path.join(process.cwd(), '..', 'Emma_KnowledgeBase', 'sources');

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const pillar = searchParams.get('pillar');
    const category = searchParams.get('category');

    // Check if Knowledge Base exists
    try {
      await fs.access(KNOWLEDGE_BASE_PATH);
    } catch {
      return NextResponse.json({
        error: 'Emma Knowledge Base not accessible',
        message: 'The Knowledge Base directory is not available in this environment',
      }, { status: 503 });
    }

    // Scan for content files
    const items = await scanKnowledgeBase(KNOWLEDGE_BASE_PATH);

    // Filter by pillar if specified
    let filteredItems = items;
    if (pillar) {
      filteredItems = items.filter((item) => item.pillar === pillar);
    }
    if (category) {
      filteredItems = filteredItems.filter((item) => item.category === category);
    }

    return NextResponse.json({
      success: true,
      count: filteredItems.length,
      items: filteredItems,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Knowledge Base API Error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve knowledge base content' },
      { status: 500 }
    );
  }
}

async function scanKnowledgeBase(basePath: string): Promise<ContentItem[]> {
  const items: ContentItem[] = [];

  try {
    const entries = await fs.readdir(basePath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(basePath, entry.name);

      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        const subItems = await scanKnowledgeBase(fullPath);
        items.push(...subItems);
      } else if (entry.isFile()) {
        // Process files (MD, HTML, JSON, TXT)
        const ext = path.extname(entry.name).toLowerCase();
        if (['.md', '.html', '.json', '.txt'].includes(ext)) {
          const stats = await fs.stat(fullPath);
          const item: ContentItem = {
            id: Buffer.from(fullPath).toString('base64'),
            title: path.basename(entry.name, ext),
            category: getCategoryFromPath(fullPath),
            path: path.relative(basePath, fullPath),
            modified: stats.mtime.toISOString(),
            size: stats.size,
            pillar: extractPillar(fullPath),
          };
          items.push(item);
        }
      }
    }
  } catch (error) {
    console.error('Error scanning directory:', error);
  }

  return items;
}

function getCategoryFromPath(filePath: string): string {
  const pathParts = filePath.split(path.sep);
  
  if (pathParts.includes('Reports')) return 'report';
  if (pathParts.includes('Analyses')) return 'analysis';
  if (pathParts.includes('Strategies')) return 'strategy';
  if (pathParts.includes('Documentation')) return 'documentation';
  
  return 'general';
}

function extractPillar(filePath: string): string | undefined {
  const pillars = ['academy', 'boutique', 'hub', 'launchpad', 'projects', 'studios', 'consulting'];
  const lowerPath = filePath.toLowerCase();
  
  for (const pillar of pillars) {
    if (lowerPath.includes(pillar)) {
      return pillar;
    }
  }
  
  return undefined;
}
