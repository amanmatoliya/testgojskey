# GoJS 2.3 License Test - Angular 10 Application

A minimal single-page Angular 10 application to test GoJS 2.3 license key, deployable on Vercel.

## Project Setup

- **Node.js Version**: 14.21 (required)
- **Angular CLI**: 10.2.1
- **Angular**: 10.x
- **GoJS**: 2.3.0
- **Build Tool**: Angular CLI (no custom webpack configuration)

## Project Structure

```
gojs-license-test/
├── src/
│   ├── app/
│   │   ├── app.component.ts        # Main component with GoJS diagram initialization
│   │   ├── app.component.html      # Simple page with heading and diagram container
│   │   ├── app.component.css       # Styling for the diagram container
│   │   └── app.module.ts           # Angular module (minimal setup)
│   ├── index.html                  # Entry HTML file
│   ├── main.ts                     # Angular bootstrap file
│   ├── styles.css                  # Global styles
│   └── environments/               # Environment configuration
├── dist/                           # Build output directory (for production builds)
├── package.json                    # Dependencies and build scripts
├── tsconfig.json                   # TypeScript configuration
├── angular.json                    # Angular CLI configuration
└── vercel.json                     # Vercel deployment configuration
```

## Installation & Setup

### Prerequisites
- Node.js 14.21 or higher
- npm 6.14 or higher

### Steps

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your GoJS license key in `src/app/app.component.ts`:
   ```typescript
   private licenseKey = 'YOUR_GOJS_LICENSE_KEY';
   ```

## Development

To run the application in development mode:

```bash
npm start
```

The application will be available at `http://localhost:4200`

## Production Build

To build the application for production:

```bash
npm run build
```

or with optimization flags:

```bash
npm run build -- --prod
```

The build output will be in `dist/gojs-license-test/`

## Application Features

- **Simple UI**: Single page with heading "GoJS 2.3 License Test"
- **GoJS Diagram**: 
  - 2 nodes: "Node A" and "Node B"
  - 1 link connecting Node A to Node B
  - Basic rectangle shapes with text labels
  - Light blue and green node colors
  - Auto-layout using LayeredDigraphLayout
- **Styling**: Fixed diagram container (800x500px) with minimal CSS
- **No Routing**: Single page application
- **No State Management**: No Redux, MobX, or similar libraries
- **No Extra Dependencies**: Only Angular and GoJS

## Vercel Deployment

### Configuration

The `vercel.json` file is pre-configured for Angular static deployment:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/gojs-license-test"
      }
    }
  ],
  "routes": [
    {
      "src": "^/(?!.*\\.).*$",
      "dest": "/index.html"
    }
  ]
}
```

### Deployment Steps

1. Build the project:
   ```bash
   npm run build -- --prod
   ```

2. Push to GitHub (or your preferred Git provider):
   ```bash
   git add .
   git commit -m "Initial Angular 10 + GoJS 2.3 setup"
   git push origin main
   ```

3. Connect to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Angular and use the build configuration

4. Configure Environment (Optional):
   - If you want to keep the license key secret, add it as an environment variable
   - Create a `.env.local` file locally (not committed)
   - Or use Vercel's Environment Variables in project settings

### License Key Management

For production deployment, consider these approaches:

**Option 1: Hardcoded in code (Simple, for testing)**
```typescript
private licenseKey = 'YOUR_GOJS_LICENSE_KEY';
```

**Option 2: Environment variable (Recommended for production)**
```typescript
private licenseKey = process.env.GOJS_LICENSE_KEY || 'YOUR_GOJS_LICENSE_KEY';
```

Then add the environment variable in your Vercel project settings.

**Option 3: Backend API (Most secure)**
Fetch the license key from a backend API instead of storing it in the frontend.

## Troubleshooting

### Build Fails with TypeScript Errors
- Ensure Node.js 14.21 is installed: `node --version`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Diagram Not Rendering
- Check browser console for JavaScript errors
- Verify GoJS is installed: `npm ls gojs`
- Ensure `@ViewChild('diagramDiv')` is properly bound

### License Key Warning
- Check that the license key is correctly set before the diagram initialization
- Verify the license key format matches GoJS requirements

## Testing the License Key

1. Open the browser's Developer Tools (F12)
2. Go to the Console tab
3. The diagram should render without license validation warnings
4. If you see warnings, verify the license key is correctly set

## Build Artifacts

After running `npm run build -- --prod`, the following are generated in `dist/gojs-license-test/`:

- `index.html` - Main HTML file with root `<app-root>` element
- `main.*.js` - Your application code (bundled and minified)
- `polyfills.*.js` - Browser compatibility polyfills
- `runtime.*.js` - Angular runtime
- `styles.*.css` - Global and component styles
- `vendor.*.js` - Third-party dependencies (including GoJS)
- `.map` files - Source maps for debugging

## Performance Notes

- The vendor bundle includes GoJS (approximately 200-300KB compressed)
- Total bundle size is typically 1-1.5MB (uncompressed)
- Production builds use Angular's AOT compilation for better performance

## Next Steps

1. Replace the placeholder license key with your actual GoJS license
2. Customize the diagram with your desired shapes, configurations, and styling
3. Add more pages/components as needed
4. Deploy to Vercel for testing in production environment

## Support

For GoJS documentation, visit: https://gojs.net/latest/index.html
For Angular documentation, visit: https://angular.io/docs
For Vercel deployment docs, visit: https://vercel.com/docs
