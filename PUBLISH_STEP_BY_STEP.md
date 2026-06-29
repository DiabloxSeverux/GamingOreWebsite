# Publish GamingOre Website — Direct Website Downloads

## What this setup does
Visitors use your GamingOre website. When they click Download, the browser downloads
`GamingOre-Setup.exe` from `/download` on your Pages site. The installer lives privately
in Cloudflare R2. No visitor is sent to GitHub.

## 1. GitHub website repository
Create a public repository named `GamingOreWebsite`.
Upload every file and folder inside this website folder, including:
- assets
- functions
- index.html
- styles.css
- app.js
- site-config.js

Do NOT upload GamingOre app source code or the installer EXE to GitHub.

## 2. Deploy with Cloudflare Pages
In Cloudflare: Workers & Pages -> Create application -> Pages -> Connect to Git.
Choose the public `GamingOreWebsite` repository.
- Production branch: main
- Framework preset: None
- Build command: leave empty
- Build output directory: leave empty
Deploy.

## 3. Add the R2 binding
In the new Pages project:
Settings -> Bindings -> Add -> R2 bucket.
- Variable name: GAMINGORE_DOWNLOADS
- R2 bucket: gamingore-downloads
Save, then redeploy.

## 4. Test
Open:
https://YOUR-PROJECT.pages.dev/download

The browser should download `GamingOre-Setup.exe` immediately.
Then test the Download button on the home page.

## Important security note
Keep your R2 bucket private. The Pages Function is the only route that exposes the installer.
It does not expose your GitHub source code.
