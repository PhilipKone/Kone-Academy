$projects = @(
  @{ name = "Kone-Consult"; deploy = $true; branch = "main" },
  @{ name = "Kone-Digital"; deploy = $true; branch = "master" },
  @{ name = "Kone-Kids"; deploy = $true; branch = "main" },
  @{ name = "Kone-Shop"; deploy = $true; branch = "master" },
  @{ name = "Kone-Warp"; deploy = $true; branch = "main" },
  @{ name = "Kone-Farms"; deploy = $false; branch = "main" } # Deploys via GH Actions on push
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
    Write-Host "Staging and committing files..." -ForegroundColor Yellow
    git -C $path add .
    git -C $path commit -m "SEO: Update OG/Twitter images with cache-busting version parameter and PNG fallbacks"
    
    Write-Host "Pushing to remote origin/$($proj.branch)..." -ForegroundColor Yellow
    git -C $path push origin $proj.branch

    # 2. Build and Deploy
    if ($proj.deploy) {
        Set-Location $path
        
        # Clean cache for Kone-Shop to prevent remote url mismatches
        if ($proj.name -eq "Kone-Shop") {
            Write-Host "Cleaning gh-pages cache for Kone-Shop..." -ForegroundColor Yellow
            npx gh-pages-clean
        }

        Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow
        npm run deploy
    }
    
    Write-Host "Finished processing $($proj.name)`n" -ForegroundColor Green
}

# 3. Commit and push the root repository
Write-Host "==========================================" -ForegroundColor Magenta
Write-Host "Syncing Root Repository" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Magenta

Set-Location $rootDir
git -C $rootDir add .
git -C $rootDir commit -m "SEO: Sync submodules and update OG image configs"
git -C $rootDir push origin main

Write-Host "All subdomains successfully redeployed!" -ForegroundColor Green
