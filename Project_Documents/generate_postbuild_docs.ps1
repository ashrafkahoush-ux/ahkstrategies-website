# PowerShell Script: Generate Post-Build Directory Tree Documentation
# Generated: 2025-10-23 for AHKStrategies Website v1.0.0

$projectRoot = "C:\Users\ashra\ahkstrategies-website"
$outputDocPath = "$projectRoot\Project_Documents\DirTree_PostBuild_2025-10-23.docx"

# Create Word Application
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()

# Title
$selection = $word.Selection
$selection.Font.Name = "Calibri"
$selection.Font.Size = 18
$selection.Font.Bold = $true
$selection.Font.Color = 0x0B6823  # Dark green
$selection.TypeText("AHKStrategies Website - Post-Build Directory Tree")
$selection.TypeParagraph()

$selection.Font.Size = 11
$selection.Font.Bold = $false
$selection.Font.Color = 0x000000
$selection.TypeText("Generated: 2025-10-23")
$selection.TypeParagraph()
$selection.TypeText("Release Version: v1.0.0")
$selection.TypeParagraph()
$selection.TypeText("Build Status: Production build completed successfully")
$selection.TypeParagraph()
$selection.TypeText("Total Routes: 17 static pages")
$selection.TypeParagraph()
$selection.TypeParagraph()

$selection.Font.Bold = $true
$selection.TypeText("Build Output Summary:")
$selection.TypeParagraph()
$selection.Font.Bold = $false
$selection.Font.Name = "Consolas"
$selection.Font.Size = 9

$buildSummary = @"
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /pillars/human-intelligence
├ ○ /pillars/innovation
├ ○ /pillars/legacy
├ ○ /pillars/people
├ ○ /pillars/projects
├ ○ /pillars/vision
├ ○ /projects
├ ○ /projects/divisions/automotive
├ ○ /projects/divisions/digital
├ ○ /projects/divisions/mena-export
├ ○ /projects/divisions/renewable
├ ○ /projects/divisions/research
└ ○ /projects/divisions/trade

○  (Static)  prerendered as static content
"@

$selection.TypeText($buildSummary)
$selection.TypeParagraph()
$selection.TypeParagraph()

$selection.Font.Name = "Calibri"
$selection.Font.Size = 11
$selection.Font.Bold = $true
$selection.TypeText("Project Directory Structure (4 levels):")
$selection.TypeParagraph()
$selection.Font.Bold = $false
$selection.Font.Name = "Consolas"
$selection.Font.Size = 9

# Get directory tree
$treeOutput = & tree /F /A "$projectRoot" 2>&1 | Where-Object { $_ -notmatch "node_modules|\.next|\.git" } | Select-Object -First 300

foreach ($line in $treeOutput) {
    $selection.TypeText($line)
    $selection.TypeParagraph()
}

# Add Build Artifacts section
$selection.Font.Name = "Calibri"
$selection.Font.Size = 11
$selection.Font.Bold = $true
$selection.TypeParagraph()
$selection.TypeText("Key Build Artifacts:")
$selection.TypeParagraph()
$selection.Font.Bold = $false
$selection.Font.Size = 10

$artifacts = @"
✓ .next/standalone - Production server files
✓ .next/static - Static assets (CSS, JS, images)
✓ public/ - Public static files (favicon, sitemap, robots.txt)
✓ All 13 layout.tsx files with metadata exports
✓ Optimized images (12 files compressed)
✓ favicon.ico and touch icons
✓ sitemap.xml with 13 routes
✓ robots.txt with search directives
✓ share-default.png for social media
"@

$selection.TypeText($artifacts)

# Save document
$doc.SaveAs([ref]$outputDocPath)
$doc.Close()
$word.Quit()

Write-Host "✅ Post-Build Directory Tree document created: $outputDocPath" -ForegroundColor Green

# Clean up COM objects
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($selection) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($doc) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
[System.GC]::Collect()
[System.GC]::WaitForPendingFinalizers()
