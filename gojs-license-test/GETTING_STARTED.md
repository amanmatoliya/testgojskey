# 🚀 Getting Started - GoJS 2.3 License Test

Welcome! This is a complete, production-ready Angular 10 application for testing GoJS 2.3 license keys on Vercel.

## 📖 Start Here

### What You Have
✅ Fully configured Angular 10 project
✅ GoJS 2.3.0 installed and integrated
✅ Working GoJS diagram with 2 nodes and 1 link
✅ Production build verified (npm run build -- --prod)
✅ Vercel deployment configuration ready
✅ Comprehensive documentation

### What You Need to Do
1. Add your GoJS license key
2. Test locally (optional)
3. Deploy to Vercel

---

## ⚡ 5-Minute Quick Start

### Step 1: Add Your License Key (Required)
Edit: `src/app/app.component.ts`

Find line 13:
```typescript
private licenseKey = 'YOUR_GOJS_LICENSE_KEY';
```

Replace with your actual key:
```typescript
private licenseKey = 'ABC123XYZ...';
```

### Step 2: Build
```bash
npm run build -- --prod
```

### Step 3: Deploy to Vercel
Push to GitHub:
```bash
git add .
git commit -m "Add GoJS license key"
git push origin main
```

Then connect to Vercel:
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Visit your deployment URL!

---

## 📚 Documentation Map

**For different needs, read:**

| Need | Read |
|------|------|
| Quick commands | [QUICK_REFERENCE.md](QUICK_REFERENCE.md) |
| Step-by-step setup | [README_SETUP.md](README_SETUP.md) |
| Deployment detailed | [DEPLOYMENT_CONFIG.md](DEPLOYMENT_CONFIG.md) |
| Complete overview | [SUMMARY_DELIVERABLES.md](SUMMARY_DELIVERABLES.md) |
| Verification | [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) |
| What's installed | [package.json](package.json) |

---

## 💻 Before You Start

Verify everything is installed:
```bash
node --version    # Should be v14.21.x
npm --version     # Should be v6.14.x or higher
```

---

## 🔍 Project Structure Overview

```
📁 src/
 ├── 📄 app.component.ts      ← 🎯 Edit here to add license key
 ├── 📄 app.component.html    ← Page layout
 ├── 📄 app.component.css     ← Styling
 └── ... (other Angular files)

📁 dist/
 └── 📁 gojs-license-test/    ← Production build output

📄 vercel.json               ← Vercel deployment config
📄 package.json              ← Dependencies (GoJS included)
📄 angular.json              ← Angular CLI config
📄 tsconfig.json             ← TypeScript config

📄 README_SETUP.md           ← Complete guide
📄 QUICK_REFERENCE.md        ← Command reference
📄 DEPLOYMENT_CONFIG.md      ← Deployment guide
... (more docs)
```

---

## 🧪 Testing Locally (Optional)

After adding your license key, verify locally:

### Option A: Development Server
```bash
npm start
# Opens http://localhost:4200 in your browser
# Shows live reload as you edit
```

### Option B: Production Build Local Test
```bash
npm run build -- --prod
npx http-server dist/gojs-license-test -p 8080
# Opens http://localhost:8080
```

You should see:
- "GoJS 2.3 License Test" heading
- Diagram with Node A (blue) and Node B (green)
- A link connecting A to B
- No license warnings in browser console

---

## 🌐 Vercel Deployment

### Automatic Setup (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Add GoJS license key"
git push
```

2. In Vercel Dashboard:
   - Click "New Project"
   - Connect your GitHub repository
   - Vercel auto-detects Angular
   - Reads `vercel.json` configuration
   - Builds: `npm run build -- --prod`
   - Deploys from: `dist/gojs-license-test/`

3. Your app is live! 🎉
   - URL: `https://<project-name>.vercel.app`

### Manual Setup (Advanced)

Use Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## 🔐 License Key Options

### Simple (Testing) ✓ Current
Edit file directly:
```typescript
private licenseKey = 'YOUR_KEY';
```

### Secure (Production) → Recommended
Use environment variable:
```typescript
private licenseKey = process.env['GOJS_LICENSE_KEY'] || 'test-key';
```

Then in Vercel > Project Settings > Environment Variables:
```
GOJS_LICENSE_KEY = your-actual-key
```

---

## ✨ What's Included

### Component
- GoJS diagram with 2 nodes and 1 link
- Auto-layout with LayeredDigraphLayout
- Node template with rectangle shapes
- Link template with connecting lines
- Color-coded nodes (blue and green)
- Text labels on nodes

### Styling
- Container centered on page
- 800x500px diagram area
- Light grey diagram background
- Simple, clean design

### Configuration
- Angular 10.2.4
- GoJS 2.3.0
- Node.js 14.21.3
- CSS (not SCSS)
- No routing
- No state management

### Deployment
- Vercel ready
- SPA configuration for routing
- Production build optimized
- Source maps included
- Cache busting enabled

---

## 🆘 Common Issues

### Q: Where do I add the license key?
**A:** Edit `src/app/app.component.ts`, line 13

### Q: How do I test before deploying?
**A:** Run `npm start` and visit http://localhost:4200

### Q: Build fails with "GoJS not found"
**A:** Run `npm install` again

### Q: Diagram doesn't show
**A:** Check browser console (press F12) for errors

### Q: Vercel deployment fails
**A:** Check Vercel logs and verify vercel.json configuration

See [README_SETUP.md](README_SETUP.md) for more troubleshooting.

---

## 🎯 Verification Checklist

Before deploying, verify:

- [ ] License key added to `app.component.ts`
- [ ] `npm install` completes without errors
- [ ] `npm run build -- --prod` succeeds
- [ ] Local test works (optional): `npm start`
- [ ] Changes committed to Git
- [ ] Repository pushed to GitHub
- [ ] Vercel project created and connected
- [ ] Deployment completed successfully
- [ ] Diagram displays correctly in browser
- [ ] No license errors in console

---

## 📋 File Summary

| File | Purpose | Edit? |
|------|---------|-------|
| app.component.ts | GoJS setup | ✏️ Yes (add key) |
| app.component.html | Page template | No |
| app.component.css | Styling | Optional |
| vercel.json | Deploy config | No |
| package.json | Dependencies | No |
| angular.json | Angular config | No |

---

## 🚀 Next Steps

### Immediate
1. ✏️ Add license key to `src/app/app.component.ts`
2. 🛠️ Run `npm run build -- --prod`
3. 📤 Push to GitHub
4. 🌐 Deploy to Vercel

### Optional
- Customize diagram styling
- Change node colors
- Modify diagram layout
- Add more nodes and links
- Create additional pages
- Add authentication

---

## 📞 Quick Commands Reference

```bash
# Install dependencies
npm install

# Development server
npm start                    # http://localhost:4200

# Build
npm run build                # Development build
npm run build -- --prod      # Production build (for Vercel)

# Testing
npm test                     # Unit tests
npm run e2e                  # End-to-end tests

# Cleanup
npm install                  # Fresh install
rm -rf node_modules dist && npm install  # Full reset
```

---

## 🎓 Learning Resources

- **Angular**: https://angular.io
- **GoJS**: https://gojs.net/latest/
- **Vercel**: https://vercel.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs/

---

## ✅ You're All Set!

Your Angular 10 + GoJS 2.3 application is ready. 

**Next action**: Edit `src/app/app.component.ts` and add your license key.

Then deploy to Vercel in just a few clicks!

---

**Runtime Info:**
- Node.js: v14.21.3 ✓
- Angular CLI: 10.2.1 ✓
- GoJS: 2.3.0 ✓
- Build Status: ✓ Production build verified

**Status**: 🟢 Ready to Deploy

---

*Questions? See the documentation files in this directory.*
*Last checked: 2026-02-16*
