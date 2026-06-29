GAMINGORE WEBSITE — R2 DIRECT DOWNLOAD EDITION

This website downloads GamingOre directly from your own Cloudflare Pages website.
Visitors do not go to GitHub and do not see your private source code.

What you already did:
- Created Cloudflare R2 bucket: gamingore-downloads
- Uploaded file: GamingOre-Setup.exe

What this package adds:
- functions/download.js
  This Cloudflare Pages Function privately reads GamingOre-Setup.exe from R2
  and sends it to visitors as a browser download from /download.

Important:
- Keep the R2 bucket PRIVATE. Do not enable the r2.dev public URL.
- Later, bind the R2 bucket to the Pages project with the variable name:
  GAMINGORE_DOWNLOADS

Next:
1. Create a public GitHub repository called GamingOreWebsite.
2. Upload everything inside this folder.
3. Deploy it using Cloudflare Pages.
4. Add the R2 binding in Cloudflare Pages.
5. Test: https://YOUR-SITE.pages.dev/download
