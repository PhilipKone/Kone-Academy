$projects = @(
  @{ name = "Kone-Consult"; branch = "main" },
  @{ name = "Kone-Kids"; branch = "main" }
)

$rootDir = "c:\Users\DELL\KCA\Kone-Code-Academy"

foreach ($proj in $projects) {
    $path = Join-Path $rootDir $proj.name
    Write-Host "==========================================" -ForegroundColor Magenta
    Write-Host "Processing Project: $($proj.name)" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Magenta

    if (-not (Test-Path $path)) {
        Write-Host "Directory not found: $path" -ForegroundColor Red
        continue
    }

    # 1. Commit and push changes
    Write-Host "Staging and committing files in $($proj.name)..." -ForegroundColor Yellow
    git -C $path add .
    git -C $path commit -m "Performance: Optimize assets and convert PNGs to WebPs"
    
    Write-Host "Pushing to remote origin/$($proj.branch)..." -ForegroundColor Yellow
    git -C $path push origin $proj.branch

    # 2. Build and Deploy
    Set-Location $path
    Write-Host "Deploying $($proj.name) to GitHub Pages..." -ForegroundColor Yellow
    npm run deploy
    
    Write-Host "Finished processing $($proj.name)`n" -ForegroundColor Green
}

# 3. Commit and push the root repository
Write-Host "==========================================" -ForegroundColor Magenta
Write-Host "Syncing Root Repository" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Magenta

Set-Location $rootDir
git -C $rootDir add .
git -C $rootDir commit -m "Performance: Sync submodules with compressed image assets"
git -C $rootDir push origin main

Write-Host "Subdomains successfully redeployed!" -ForegroundColor Green
