param(
  [string]$RemoteUrl = "https://github.com/Aryan5811/SkillBridge.git"
)

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git is not installed or not available on PATH. Install Git for Windows, then rerun this script."
  exit 1
}

if (-not (Test-Path ".git")) {
  git init
  git branch -M main
}

git add .
git commit -m "Initial SkillBridge full-stack app"
git remote remove origin 2>$null
git remote add origin $RemoteUrl
git push -u origin main
