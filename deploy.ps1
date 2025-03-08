# Define a parameter for the commit message
param(
    [string]$CommitMessage
)

# Check if the commit message is provided
if (-not $CommitMessage) {
    Write-Host "Error: Please provide a commit message."
    exit 1
}

# Commit and push changes to the main branch
git add . # Add all changes
git commit -m $CommitMessage # Use the parameter for the commit message
git push origin master # Push changes to the main branch

# Build the Vue project
Remove-Item -Recurse -Force .\dist # Remove the existing build
npm run build # Create the production build

# Deploy the dist folder to the gh-pages branch
git add dist -f # Force add the dist folder
git add .
git commit -m "Adding dist" # Commit the dist folder changes
git subtree push --prefix dist origin gh-pages # Push dist folder to gh-pages branch
