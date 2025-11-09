# Google Drive Service Account Setup Guide
## For Emma AI Knowledge Base Sync

### Step 1: Enable Google Drive API
1. You're already in Google Cloud Console (gen-lang-client-0895734226)
2. Click "Library" in left sidebar (or visit: https://console.cloud.google.com/apis/library)
3. Search for "Google Drive API"
4. Click on it → Click "ENABLE" button
5. Wait 30 seconds for activation

### Step 2: Create Service Account
1. Go to: https://console.cloud.google.com/iam-admin/serviceaccounts?project=gen-lang-client-0895734226
2. Click "+ CREATE SERVICE ACCOUNT" at top
3. Fill in:
   - Service account name: `emma-knowledge-sync`
   - Service account ID: (auto-fills to `emma-knowledge-sync`)
   - Description: `Emma AI Knowledge Base synchronization`
4. Click "CREATE AND CONTINUE"
5. Skip "Grant this service account access" (click CONTINUE)
6. Skip "Grant users access" (click DONE)

### Step 3: Generate JSON Key
1. Find your new service account in the list
2. Click on the email (emma-knowledge-sync@gen-lang-client-0895734226.iam.gserviceaccount.com)
3. Go to "KEYS" tab at top
4. Click "ADD KEY" → "Create new key"
5. Select "JSON" format
6. Click "CREATE"
7. **SAVE THE DOWNLOADED FILE** - you'll need it in 2 minutes

### Step 4: Share Your Knowledge Base Folder
1. Open Google Drive: https://drive.google.com
2. Find your Knowledge Base folder (or create one named "Emma_Knowledge_Base")
3. Right-click the folder → "Share"
4. Paste the service account email:
   `emma-knowledge-sync@gen-lang-client-0895734226.iam.gserviceaccount.com`
5. Set permission to "Viewer" (read-only)
6. Click "Share" (you'll get a warning that it's a service account - click "Share anyway")

### Step 5: Get Folder ID
1. Open the shared folder in Google Drive
2. Look at the URL in your browser:
   ```
   https://drive.google.com/drive/folders/1AbC2DeF3GhI4JkL5MnO6PqR7StU8VwX9
                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                           THIS IS YOUR FOLDER ID
   ```
3. Copy everything after `/folders/`

### Step 6: Add Credentials to .env.local
Send me two things:
1. **The entire JSON file contents** from Step 3 (paste the whole thing)
2. **The folder ID** from Step 5

I will format them correctly for .env.local

---

## Next.js Version Question: IMPORTANT CLARIFICATION

You're absolutely right to question this! Let me check the actual version:

**Current Reality:**
- Your project is running **Next.js 16.0.0** (you can see this in every build output)
- Latest stable Next.js as of Nov 2025 is **Next.js 15.x**
- Next.js 16.0.0 is likely a **Canary/Beta** release you're testing

**Does it matter?**
- ✅ **For Emma AI**: No - API routes work identically
- ✅ **For Analytics**: No - Google Analytics integration is the same
- ⚠️ **For Production Stability**: Potentially - Canary versions may have bugs

**My Recommendation:**
Since your build succeeds with **0 errors** and **33 pages + 3 APIs** all working, you have two options:

1. **Keep Next.js 16** (current state) - risky but you're already using it successfully
2. **Downgrade to Next.js 15** (stable) - safer for production

Want me to check your package.json to see if we should downgrade before Phase VIII launch?
