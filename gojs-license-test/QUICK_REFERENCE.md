# Quick Reference - GoJS License Test

## Project Location
```
d:\angular 10 test gojs\testgojskey\gojs-license-test
```

## Essential Commands

### Development
```bash
# Start dev server
npm start
# → http://localhost:4200

# Build for development
npm run build

# Run tests
npm test
```

### Production
```bash
# Build production optimized
npm run build -- --prod

# Test production build locally
npx http-server dist/gojs-license-test -p 8080
# → http://localhost:8080
```

### Utilities
```bash
# Check versions
node --version
npm --version
ng version

# Install dependencies
npm install

# Update npm packages
npm update

# Run linter
npm run lint

# Clean reinstall
rm -rf node_modules dist && npm install
```

---

## Key Files to Edit

### 1. Add License Key
**File**: `src/app/app.component.ts` (line 13)
```typescript
private licenseKey = 'YOUR_GOJS_LICENSE_KEY';
```

### 2. Customize Diagram
**File**: `src/app/app.component.ts` (lines 30-60)
- Modify node styling
- Change colors
- Adjust layout

### 3. Change Styling
**File**: `src/app/app.component.css`
- Container layout
- Diagram dimensions
- Colors and fonts

### 4. Update HTML
**File**: `src/app/app.component.html`
- Change heading
- Modify layout

---

## File Locations

```
📁 gojs-license-test/
├── 📄 app.component.ts        ← GoJS setup (edit to add license key)
├── 📄 app.component.html      ← Page template
├── 📄 app.component.css       ← Styling
├── 📄 package.json            ← Dependencies
├── 📄 vercel.json             ← Deployment config
├── 📄 tsconfig.json           ← TypeScript config
├── 📄 angular.json            ← Angular CLI config
└── 📁 dist/                   ← Production build (after npm run build)
```

---

## Build Output

After `npm run build -- --prod`:
```
dist/gojs-license-test/
├── index.html            ← Entry point
├── main.*.js             ← App code
├── vendor.*.js           ← Dependencies (GoJS)
├── polyfills.*.js        ← Browser compatibility
├── runtime.*.js          ← Angular runtime
├── styles.*.css          ← Styles
└── *.map                 ← Source maps
```

---

## Vercel Deployment URL

After deploying to Vercel:
```
https://<your-project-name>.vercel.app
```

---

## Versions

- **Node.js**: v14.21.3
- **npm**: 6.14.18
- **Angular**: 10.2.4
- **Angular CLI**: 10.2.1
- **TypeScript**: 4.0.2
- **GoJS**: 2.3.0

---

## Troubleshooting Quick Links

| Problem | Solution |
|---------|----------|
| `ng: command not found` | `npm install -g @angular/cli@10.2.1` |
| Build fails | `rm -rf node_modules && npm install` |
| Port 4200 in use | `ng serve --port 4300` |
| GoJS not found | `npm install gojs@2.3.0` |
| Vercel build fails | Check `vercel.json` dist directory |

---

## Environment

**Development**:
- `npm start` → Uses `environment.ts`

**Production**:
- `npm run build -- --prod` → Uses `environment.prod.ts`

---

## Documentation

- `README_SETUP.md` - Full setup guide
- `DEPLOYMENT_CONFIG.md` - Vercel deployment guide
- `VERIFICATION_CHECKLIST.md` - Complete checklist
- `SUMMARY_DELIVERABLES.md` - Project overview

---

## One-Minute Setup

```bash
# 1. Install deps (if needed)
npm install

# 2. Customize license key
# Edit: src/app/app.component.ts, line 13

# 3. Build
npm run build -- --prod

# 4. Test
npm start
# Visit: http://localhost:4200

# 5. Deploy to Vercel
# Push to GitHub → Connect in Vercel dashboard
```

---

## Key Diagram Features

✅ 2 Nodes (Node A, Node B)
✅ 1 Link (A→B)
✅ Rectangle shapes
✅ Auto-layout
✅ Color coded
✅ Text labels
✅ responsive to viewport

---

## Testing Checklist

- [ ] `npm install` runs without errors
- [ ] `npm run build` completes successfully
- [ ] `npm run build -- --prod` completes successfully
- [ ] `npm start` starts dev server
- [ ] Browser shows diagram at localhost:4200
- [ ] Console shows no errors
- [ ] Diagram renders correctly

---

**Ready to Deploy**: ✅ Yes (after adding license key)
