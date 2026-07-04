$projects = @(
  "Kone-Consult",
  "Kone-Digital",
  "Kone-Kids",
  "Kone-Lab",
  "Kone-Shop",
  "Kone-Warp"
)

$rootDir = "c:\Users\DELL\KCA\Kone-Code-Academy"

# 1. First, commit and push root repository changes (including kca-landing-page and Kone-AI favicons)
Write-Host "==========================================" -ForegroundColor Magenta
Write-Host "Committing and Pushing Root Repository" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Magenta

git -C $rootDir add .
git -C $rootDir commit -m "SEO: Add fallback PNG favicons for Kone-AI, Kone-Farms, and landing page"
git -C $rootDir push origin main

# 2. Deploy each subdomain project
foreach ($name in $projects) {
    $path = Join-Path $rootDir $name
    Write-Host "==========================================" -ForegroundColor Magenta
    Write-Host "Deploying: $name" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Magenta

    if (-not (Test-Path $path)) {
        Write-Host "Directory not found: $path" -ForegroundColor Red
        continue
    }

    # Change location and run npm install & deploy
    Set-Location $path
    Write-Host "Running npm install in $name..." -ForegroundColor Yellow
    npm install
    
    Write-Host "Running npm run deploy in $name..." -ForegroundColor Yellow
    npm run deploy
    
    Write-Host "Finished deploying $name`n" -ForegroundColor Green
}

# 3. Deploy landing page
$landingPath = Join-Path $rootDir "kca-landing-page"
Write-Host "==========================================" -ForegroundColor Magenta
Write-Host "Deploying Landing Page" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Magenta

Set-Location $landingPath
Write-Host "Running npm install in kca-landing-page..." -ForegroundColor Yellow
npm install

Write-Host "Running npm run deploy in kca-landing-page..." -ForegroundColor Yellow
npm run deploy

# Go back to root
Set-Location $rootDir
Write-Host "All deployments completed successfully!" -ForegroundColor Green
