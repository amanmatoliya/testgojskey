# GoJS License Key Configuration Guide

## Quick Start

1. **Development Testing**:
   ```bash
   npm start
   ```
   Application runs on http://localhost:4200

2. **Production Build**:
   ```bash
   npm run build -- --prod
   ```

3. **Production Testing Locally**:
   ```bash
   npx http-server dist/gojs-license-test -p 8080
   ```
   Application runs on http://localhost:8080

## License Key Setup

### Current Setup
The license key is currently set to a placeholder value in `src/app/app.component.ts`:

```typescript
private licenseKey = 'YOUR_GOJS_LICENSE_KEY';
```

### To Add Your License Key

1. **Option A: Direct Modification**
   - Edit `src/app/app.component.ts`
   - Replace `'YOUR_GOJS_LICENSE_KEY'` with your actual license key
   - Save the file
   - Rebuild with `npm run build -- --prod`

2. **Option B: Environment Variable (Vercel Deployment)**
   - Edit `src/app/app.component.ts` to use environment variable:
     ```typescript
     private licenseKey = process.env['GOJS_LICENSE_KEY'] || 'YOUR_GOJS_LICENSE_KEY';
     ```
   - In Vercel dashboard:
     - Go to Project Settings → Environment Variables
     - Add variable `GOJS_LICENSE_KEY` with your license key value
     - Redeploy the project

## Vercel Deployment Checklist

- [x] Node.js version configured to 14.x
- [x] `package.json` has all required dependencies
- [x] `vercel.json` configured for Angular deployment
- [x] `dist/gojs-license-test` is the build output directory
- [x] SPA fallback configured to serve `index.html` for all routes
- [ ] License key added (requires your GoJS license)
- [ ] Environment variable configured (if using Option B)

## File Modifications Required

Before deploying to production, update these files:

1. **src/app/app.component.ts**: Add your GoJS license key
2. **package.json**: Optional - update `name` and `version` if desired
3. **angular.json**: Optional - customize build output directory name

## Troubleshooting Vercel Deployment

### Build Failed
```
Error: npm ERR! code EWORKSPACE
```
- Ensure `node_modules/.bin/ng` exists
- Verify `@angular/cli@10.2.1` is in dependencies

### Wrong Build Output
- Check `vercel.json` `distDir` matches Angular output
- Run `npm run build` locally and verify `dist/gojs-license-test` exists

### Site Shows 404
- Verify SPA routing rule in `vercel.json` is present
- All non-file routes should redirect to `index.html`

## Local vs. Production Build

| Aspect | Development | Production |
|--------|-------------|-----------|
| Command | `npm start` | `npm run build -- --prod` |
| Optimization | None | Full AOT + Minification |
| Source Maps | Included | Included (in .map files) |
| File Size | Larger | Optimized and compressed |
| Rebuilds | Live reload | Static files only |

## Environment Configuration

The application uses Angular's default environment setup:

- **Development**: `src/environments/environment.ts` (used by `ng serve`)
- **Production**: `src/environments/environment.prod.ts` (used by production build)

Both files are minimally configured for this project. You can add license key management here if needed.

## NPM Scripts Reference

```bash
npm start              # Start dev server on http://localhost:4200
npm run build          # Build for development
npm run build -- --prod  # Build for production (optimized)
npm run lint           # Run TSLint
npm test               # Run unit tests
ng serve               # Same as npm start
ng build               # Same as npm run build
```

## Vercel Default Build Configuration for Angular

Vercel automatically detects Angular projects and uses:
- Build command: `npm run build -- --prod`
- Output directory: check `angular.json` for `outputPath`
- Node version: The one specified in `.nvmrc` or `package.json` engines field

You can customize this in `vercel.json` if needed.
