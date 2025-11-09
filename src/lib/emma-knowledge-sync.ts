/**
 * Emma Knowledge Base Sync Manager
 * Dual-source architecture: Google Drive (primary) + Local Git (mirror)
 * 
 * Priority: 
 * 1. Read from local if available and recent (< 6 hours old)
 * 2. Fallback to Google Drive API for live data
 * 3. Cache Google Drive results locally for performance
 */

import { google } from 'googleapis';
import { drive_v3 } from 'googleapis';
import fs from 'fs/promises';
import path from 'path';

interface SyncConfig {
  googleDriveFolderId: string;
  localMirrorPath: string;
  syncIntervalHours: number;
}

const config: SyncConfig = {
  googleDriveFolderId: process.env.GDRIVE_KNOWLEDGE_BASE_FOLDER_ID || '',
  localMirrorPath: path.join(process.cwd(), 'Emma_KnowledgeBase', 'sources'),
  syncIntervalHours: 6,
};

class EmmaKnowledgeBaseSync {
  private drive: drive_v3.Drive | null = null;
  private lastSyncTime: Date | null = null;

  constructor() {
    // Initialize Google Drive API only if credentials are available
    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
          scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });
        this.drive = google.drive({ version: 'v3', auth });
      } catch (error) {
        console.error('[Emma Sync] Failed to initialize Google Drive:', error);
      }
    }
  }

  /**
   * Check if local cache is fresh
   */
  async isLocalCacheFresh(): Promise<boolean> {
    if (!this.lastSyncTime) {
      try {
        const syncMetaPath = path.join(config.localMirrorPath, '.sync-metadata.json');
        const metadata = JSON.parse(await fs.readFile(syncMetaPath, 'utf-8'));
        this.lastSyncTime = new Date(metadata.lastSync);
      } catch {
        return false;
      }
    }

    const hoursSinceSync = (Date.now() - this.lastSyncTime.getTime()) / (1000 * 60 * 60);
    return hoursSinceSync < config.syncIntervalHours;
  }

  /**
   * Read from local mirror (fast path)
   */
  async readLocal(relativePath: string): Promise<string | null> {
    try {
      const fullPath = path.join(config.localMirrorPath, relativePath);
      return await fs.readFile(fullPath, 'utf-8');
    } catch {
      return null;
    }
  }

  /**
   * Read from Google Drive (live data)
   */
  async readGoogleDrive(fileId: string): Promise<string> {
    if (!this.drive) {
      throw new Error('Google Drive not initialized. Check GOOGLE_SERVICE_ACCOUNT_KEY.');
    }
    const response = await this.drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'text' }
    );
    return response.data as string;
  }

  /**
   * Sync Google Drive → Local Mirror
   */
  async syncFromGoogleDrive(): Promise<void> {
    if (!this.drive) {
      console.warn('[Emma Sync] Google Drive not configured. Skipping sync.');
      return;
    }

    console.log('[Emma Sync] Starting Google Drive → Local sync...');
    
    // List all files in Knowledge Base folder
    const response = await this.drive.files.list({
      q: `'${config.googleDriveFolderId}' in parents and trashed=false`,
      fields: 'files(id, name, mimeType, modifiedTime, parents)',
      pageSize: 1000,
    });

    const files = response.data.files || [];
    let syncedCount = 0;

    for (const file of files) {
      if (!file.id || !file.name) continue; // Skip invalid entries
      
      if (file.mimeType === 'application/vnd.google-apps.folder') {
        // Recursively sync folders
        await this.syncFolder(file.id, file.name);
      } else {
        // Sync individual file
        const content = await this.readGoogleDrive(file.id);
        const localPath = path.join(config.localMirrorPath, file.name);
        
        await fs.mkdir(path.dirname(localPath), { recursive: true });
        await fs.writeFile(localPath, content, 'utf-8');
        syncedCount++;
      }
    }

    // Update sync metadata
    this.lastSyncTime = new Date();
    const metadataPath = path.join(config.localMirrorPath, '.sync-metadata.json');
    await fs.writeFile(
      metadataPath,
      JSON.stringify({
        lastSync: this.lastSyncTime.toISOString(),
        fileCount: syncedCount,
        source: 'Google Drive',
      }),
      'utf-8'
    );

    console.log(`[Emma Sync] Complete. Synced ${syncedCount} files.`);
  }

  /**
   * Smart read: local first, fallback to Google Drive
   */
  async read(relativePath: string, fileId?: string): Promise<string> {
    // Try local cache first
    if (await this.isLocalCacheFresh()) {
      const localContent = await this.readLocal(relativePath);
      if (localContent) {
        console.log(`[Emma KB] Read from local cache: ${relativePath}`);
        return localContent;
      }
    }

    // Fallback to Google Drive
    if (fileId) {
      console.log(`[Emma KB] Reading from Google Drive: ${relativePath}`);
      const content = await this.readGoogleDrive(fileId);
      
      // Cache locally for next time
      const localPath = path.join(config.localMirrorPath, relativePath);
      await fs.mkdir(path.dirname(localPath), { recursive: true });
      await fs.writeFile(localPath, content, 'utf-8');
      
      return content;
    }

    throw new Error(`Cannot read ${relativePath}: not in cache and no Google Drive ID provided`);
  }

  private async syncFolder(folderId: string, folderName: string): Promise<void> {
    if (!this.drive) return;
    
    // Recursive folder sync implementation
    const response = await this.drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: 'files(id, name, mimeType)',
    });

    for (const file of response.data.files || []) {
      if (!file.id || !file.name) continue;
      
      if (file.mimeType === 'application/vnd.google-apps.folder') {
        await this.syncFolder(file.id, path.join(folderName, file.name));
      } else {
        const content = await this.readGoogleDrive(file.id);
        const localPath = path.join(config.localMirrorPath, folderName, file.name);
        await fs.mkdir(path.dirname(localPath), { recursive: true });
        await fs.writeFile(localPath, content, 'utf-8');
      }
    }
  }
}

// Singleton instance
export const emmaKnowledgeBase = new EmmaKnowledgeBaseSync();

// Auto-sync on server startup (production only)
if (process.env.NODE_ENV === 'production') {
  emmaKnowledgeBase.syncFromGoogleDrive().catch(console.error);
}
