# AHKStrategies Post-Deployment Verification Script
# Run this script AFTER website is deployed and DNS has propagated

$domain = "ahkstrategies.com"
$baseUrl = "https://$domain"
$reportPath = "C:\Users\ashra\ahkstrategies-website\Project_Documents\PostLaunch_Verification_Results_$(Get-Date -Format 'yyyy-MM-dd_HH-mm').txt"

# Start logging
$output = @()
$output += "=== AHKStrategies Post-Deployment Verification ==="
$output += "Date: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
$output += "Domain: $domain"
$output += ""

Write-Host "=== AHKStrategies Post-Deployment Verification ===" -ForegroundColor Cyan
Write-Host "Date: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" -ForegroundColor Gray
Write-Host ""

# ===== 1. DNS RESOLUTION CHECK =====
Write-Host "1. DNS Resolution Check..." -ForegroundColor Yellow
$output += "1. DNS RESOLUTION CHECK"
$output += "======================="

try {
    $dnsResult = nslookup $domain 2>&1 | Out-String
    $output += $dnsResult
    
    if ($dnsResult -match "Address:\s+(\d+\.\d+\.\d+\.\d+)") {
        $ipAddress = $matches[1]
        Write-Host "   DNS resolves to: $ipAddress" -ForegroundColor Green
        $output += "Result: SUCCESS - DNS resolves to $ipAddress"
    } else {
        Write-Host "   DNS resolution unclear - check output" -ForegroundColor Yellow
        $output += "Result: UNCLEAR - manual review needed"
    }
} catch {
    Write-Host "   DNS lookup failed: $_" -ForegroundColor Red
    $output += "Result: FAILED - $_"
}

$output += ""
Write-Host ""

# ===== 2. HTTPS CONNECTIVITY CHECK =====
Write-Host "2. HTTPS Connectivity Check..." -ForegroundColor Yellow
$output += "2. HTTPS CONNECTIVITY CHECK"
$output += "==========================="

try {
    $response = Invoke-WebRequest -Uri $baseUrl -UseBasicParsing -TimeoutSec 10
    Write-Host "   Status Code: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "   Content Length: $($response.Content.Length) bytes" -ForegroundColor Green
    $output += "Status Code: $($response.StatusCode)"
    $output += "Content Length: $($response.Content.Length) bytes"
    $output += "Result: SUCCESS - Site is accessible via HTTPS"
} catch {
    Write-Host "   HTTPS connection failed: $_" -ForegroundColor Red
    $output += "Result: FAILED - $_"
}

$output += ""
Write-Host ""

# ===== 3. SSL CERTIFICATE CHECK =====
Write-Host "3. SSL Certificate Check..." -ForegroundColor Yellow
$output += "3. SSL CERTIFICATE CHECK"
$output += "========================"

try {
    $req = [System.Net.HttpWebRequest]::Create($baseUrl)
    $req.GetResponse() | Out-Null
    $cert = $req.ServicePoint.Certificate
    
    if ($cert) {
        $certExpiry = [datetime]::Parse($cert.GetExpirationDateString())
        Write-Host "   SSL Certificate Valid" -ForegroundColor Green
        Write-Host "   Issuer: $($cert.Issuer)" -ForegroundColor Green
        Write-Host "   Expires: $certExpiry" -ForegroundColor Green
        $output += "SSL Certificate: VALID"
        $output += "Issuer: $($cert.Issuer)"
        $output += "Expires: $certExpiry"
    }
} catch {
    Write-Host "   SSL check failed: $_" -ForegroundColor Red
    $output += "Result: FAILED - $_"
}

$output += ""
Write-Host ""

# ===== 4. SITEMAP.XML CHECK =====
Write-Host "4. Sitemap.xml Verification..." -ForegroundColor Yellow
$output += "4. SITEMAP.XML VERIFICATION"
$output += "==========================="

try {
    $sitemap = Invoke-WebRequest -Uri "$baseUrl/sitemap.xml" -UseBasicParsing -TimeoutSec 10
    Write-Host "   Sitemap accessible (Status: $($sitemap.StatusCode))" -ForegroundColor Green
    Write-Host "   Size: $($sitemap.Content.Length) bytes" -ForegroundColor Green
    
    # Count URLs in sitemap
    $urlCount = ([regex]::Matches($sitemap.Content, "<loc>")).Count
    Write-Host "   URLs found: $urlCount" -ForegroundColor Green
    
    $output += "Status: $($sitemap.StatusCode)"
    $output += "Size: $($sitemap.Content.Length) bytes"
    $output += "URLs found: $urlCount"
    $output += "Result: SUCCESS"
} catch {
    Write-Host "   Sitemap check failed: $_" -ForegroundColor Red
    $output += "Result: FAILED - $_"
}

$output += ""
Write-Host ""

# ===== 5. ROBOTS.TXT CHECK =====
Write-Host "5. Robots.txt Verification..." -ForegroundColor Yellow
$output += "5. ROBOTS.TXT VERIFICATION"
$output += "=========================="

try {
    $robots = Invoke-WebRequest -Uri "$baseUrl/robots.txt" -UseBasicParsing -TimeoutSec 10
    Write-Host "   Robots.txt accessible (Status: $($robots.StatusCode))" -ForegroundColor Green
    $output += "Status: $($robots.StatusCode)"
    $output += "Content:"
    $output += $robots.Content
    $output += "Result: SUCCESS"
} catch {
    Write-Host "   Robots.txt check failed: $_" -ForegroundColor Red
    $output += "Result: FAILED - $_"
}

$output += ""
Write-Host ""

# ===== 6. ROUTE CRAWLING =====
Write-Host "6. Crawling All Routes..." -ForegroundColor Yellow
$output += "6. ROUTE CRAWLING (17 PAGES)"
$output += "============================="

$routes = @(
    "/",
    "/pillars/legacy",
    "/pillars/people",
    "/pillars/innovation",
    "/pillars/vision",
    "/pillars/human-intelligence",
    "/projects",
    "/projects/divisions/automotive",
    "/projects/divisions/digital",
    "/projects/divisions/mena-export",
    "/projects/divisions/renewable",
    "/projects/divisions/research",
    "/projects/divisions/trade",
    "/sitemap.xml",
    "/robots.txt"
)

$passed = 0
$failed = 0
$failedRoutes = @()

foreach ($route in $routes) {
    $url = "$baseUrl$route"
    try {
        $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10
        Write-Host "   OK $route (Status: $($r.StatusCode))" -ForegroundColor Green
        $output += "[OK] $route - Status: $($r.StatusCode)"
        $passed++
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        Write-Host "   FAIL $route (Status: $statusCode)" -ForegroundColor Red
        $output += "[FAIL] $route - Status: $statusCode"
        $failed++
        $failedRoutes += $route
    }
}

$output += ""
$output += "SUMMARY"
$output += "======="
$output += "Total Routes: $($routes.Count)"
$output += "Passed: $passed"
$output += "Failed: $failed"

Write-Host ""
Write-Host "   Routes Passed: $passed" -ForegroundColor Green
Write-Host "   Routes Failed: $failed" -ForegroundColor $(if($failed -eq 0) {"Green"} else {"Red"})

if ($failed -gt 0) {
    Write-Host "   Failed Routes:" -ForegroundColor Red
    $output += ""
    $output += "Failed Routes:"
    foreach ($failedRoute in $failedRoutes) {
        Write-Host "     - $failedRoute" -ForegroundColor Red
        $output += "  - $failedRoute"
    }
}

$output += ""
Write-Host ""

# ===== 7. PERFORMANCE CHECK (Simple) =====
Write-Host "7. Basic Performance Check..." -ForegroundColor Yellow
$output += "7. PERFORMANCE CHECK"
$output += "===================="

try {
    $stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
    $perf = Invoke-WebRequest -Uri $baseUrl -UseBasicParsing -TimeoutSec 30
    $stopwatch.Stop()
    
    $loadTime = $stopwatch.ElapsedMilliseconds
    Write-Host "   Homepage Load Time: $loadTime ms" -ForegroundColor $(if($loadTime -lt 3000) {"Green"} elseif($loadTime -lt 5000) {"Yellow"} else {"Red"})
    Write-Host "   Content Size: $([math]::Round($perf.Content.Length / 1KB, 2)) KB" -ForegroundColor Green
    
    $output += "Homepage Load Time: $loadTime ms"
    $output += "Content Size: $([math]::Round($perf.Content.Length / 1KB, 2)) KB"
    
    if ($loadTime -lt 3000) {
        $output += "Performance: EXCELLENT (< 3 seconds)"
    } elseif ($loadTime -lt 5000) {
        $output += "Performance: GOOD (< 5 seconds)"
    } else {
        $output += "Performance: NEEDS IMPROVEMENT (> 5 seconds)"
    }
} catch {
    Write-Host "   Performance check failed: $_" -ForegroundColor Red
    $output += "Result: FAILED - $_"
}

$output += ""
Write-Host ""

# ===== FINAL SUMMARY =====
Write-Host "=== VERIFICATION COMPLETE ===" -ForegroundColor Cyan
$output += "=== VERIFICATION COMPLETE ==="
$output += ""
$output += "Next Steps:"
$output += "1. Run Lighthouse audit in Chrome DevTools for detailed performance metrics"
$output += "2. Test on multiple browsers (Chrome, Firefox, Safari, Edge)"
$output += "3. Test on mobile devices"
$output += "4. Monitor server logs for errors"
$output += "5. Set up uptime monitoring"
$output += ""
$output += "Report saved to: $reportPath"

Write-Host "Report saved to: $reportPath" -ForegroundColor Green
Write-Host ""
Write-Host "For detailed performance metrics, run Lighthouse audit in Chrome DevTools:" -ForegroundColor Yellow
Write-Host "  1. Open https://ahkstrategies.com in Chrome Incognito" -ForegroundColor Gray
Write-Host "  2. Press F12 > Lighthouse tab" -ForegroundColor Gray
Write-Host "  3. Select all categories > Analyze page load" -ForegroundColor Gray

# Save report
$output | Out-File -FilePath $reportPath -Encoding UTF8

# Display summary
Write-Host ""
Write-Host "=== QUICK SUMMARY ===" -ForegroundColor Cyan
Write-Host "DNS Status: " -NoNewline
if ($output -match "DNS resolves to") {
    Write-Host "OK" -ForegroundColor Green
} else {
    Write-Host "FAILED" -ForegroundColor Red
}

Write-Host "HTTPS Status: " -NoNewline
if ($output -match "HTTPS.*SUCCESS") {
    Write-Host "OK" -ForegroundColor Green
} else {
    Write-Host "FAILED" -ForegroundColor Red
}

Write-Host "Routes Status: $passed/$($routes.Count) passed" -ForegroundColor $(if($failed -eq 0) {"Green"} else {"Yellow"})
