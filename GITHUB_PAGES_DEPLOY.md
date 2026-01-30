# GitHub Pages Deployment Guide

Step-by-step guide to deploy your college website to `https://yogesh1526.github.io/College-Portal/`

## ✅ Step 1: Install Dependencies

First, install the `gh-pages` package:

```bash
npm install --save-dev gh-pages
```

This package will help deploy your built files to GitHub Pages.

---

## ✅ Step 2: Verify Configuration

Make sure these files are configured correctly:

### `vite.config.js`
Should have:
```javascript
base: '/College-Portal/',
```

### `src/App.jsx`
Should have:
```javascript
const basename = '/College-Portal'
<Router basename={basename}>
```

### `package.json`
Should have deploy scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

---

## ✅ Step 3: Build Your Project

Build your project to create the production files:

```bash
npm run build
```

This will:
- Create optimized production files
- Put them in the `dist` folder
- Take 1-2 minutes

**Verify the build:**
```bash
npm run preview
```
Visit `http://localhost:4173/College-Portal/` to test locally.

---

## ✅ Step 4: Deploy to GitHub Pages

Deploy your built files:

```bash
npm run deploy
```

This will:
1. Run `npm run build` automatically (predeploy script)
2. Create/update a `gh-pages` branch
3. Push the `dist` folder contents to GitHub
4. Take 2-3 minutes

---

## ✅ Step 5: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/yogesh1526/College-Portal`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Click **Save**

---

## ✅ Step 6: Wait and Access

- Wait 2-5 minutes for GitHub to process
- Your site will be live at: **https://yogesh1526.github.io/College-Portal/**

---

## 🔄 Updating Your Site

Every time you make changes:

1. **Make your changes** to the code
2. **Commit and push** to main branch:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. **Deploy again:**
   ```bash
   npm run deploy
   ```
4. Wait 2-5 minutes for updates to appear

---

## 🐛 Troubleshooting

### Images not loading?
- Make sure images are in `public/images/` folder
- Use paths like `/College-Portal/images/filename.jpg` (if needed)
- Check browser console for 404 errors

### 404 errors on routes?
- Make sure `basename` is set correctly in `App.jsx`
- Make sure `base` is set correctly in `vite.config.js`
- Clear browser cache

### Build fails?
- Make sure all dependencies are installed: `npm install`
- Check for errors in terminal
- Try deleting `node_modules` and `package-lock.json`, then `npm install`

### Site shows blank page?
- Check browser console for errors
- Verify `base` path matches repository name exactly
- Make sure `gh-pages` branch exists and has files

### Changes not appearing?
- Wait 5-10 minutes (GitHub Pages can be slow)
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check if `gh-pages` branch was updated

---

## 📝 Quick Command Reference

```bash
# Install dependencies
npm install

# Install gh-pages (one time)
npm install --save-dev gh-pages

# Build project
npm run build

# Test build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Full workflow (after making changes)
git add .
git commit -m "Your message"
git push
npm run deploy
```

---

## ✅ Checklist

Before deploying, make sure:
- [ ] `gh-pages` package is installed
- [ ] `vite.config.js` has `base: '/College-Portal/'`
- [ ] `App.jsx` has `basename = '/College-Portal'`
- [ ] `package.json` has deploy scripts
- [ ] All images are in `public/images/` folder
- [ ] Build works locally: `npm run build`
- [ ] GitHub repository exists and is connected

---

## 🎉 Success!

Once deployed, your site will be live at:
**https://yogesh1526.github.io/College-Portal/**

Share this URL with others! 🚀

