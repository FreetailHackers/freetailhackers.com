# Record Hacks Deployment Fix

## Issue
The Record Hacks website (React/Vite app) was not displaying images when deployed as a static site. Only the background was visible.

## Root Cause
The React components were referencing images using relative paths like `./assets/image.png`, which work during development but fail in production builds when the app is deployed as a static site.

## Solution
1. **Fixed Image Paths**: Changed all image references in React components from `./assets/` to `/assets/` to properly reference public assets.

2. **Fixed Font Path**: Updated the custom font path in `globals.css` from `../src/assets/` to `/assets/`.

3. **Updated Components**:
   - `landing.jsx`: Fixed Landing_Page_Mascot.png path
   - `about.jsx`: Fixed About_Left_Vectors.svg and About_Right_Vectors.svg paths  
   - `faq.jsx`: Fixed FAQ-icon.svg path
   - `footer.jsx`: Fixed all social media icon paths (FTLinkedin.svg, FTInstagram.svg, etc.)
   - `navbar.jsx`: Fixed Recordhacks_logo.png path
   - `globals.css`: Fixed Lugoj_Demo_400.otf font path

4. **Rebuilt and Deployed**: 
   - Ran `npm run build` to generate production files
   - Copied built files to root directory
   - Copied public assets to ensure proper static file serving

## File Structure
```
record-hacks/
├── index.html (production build)
├── assets/ (contains all images, fonts, and built JS/CSS)
├── src/ (source code)
├── public/ (original public assets)
└── dist/ (build output)
```

## Testing
The site now properly loads all images and assets when served as a static site. The main website link to `record-hacks` should work correctly.

## Future Development
When making changes to the React app:
1. Make changes in the `src/` directory
2. Run `npm run build` 
3. Copy `dist/*` to the root directory
4. Copy `public/*` to the root directory
