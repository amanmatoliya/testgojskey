import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as go from 'gojs';

// Set GoJS license BEFORE anything else
const GOJS_LICENSE =
  '2b8647e1b56649c702d90776423d68f919a175639d811fa30e0414f3b90d3d06329fbb2855d38d9387a81bfe497d90d1dcc03b209148023cb731d7d94be08eaae53327e5470b4489a20b24969cff7ff2ff7872f3c1b024f2d36a9cf4bef8c59c0eb8f2c6589d08bb2b28';

(go.Diagram as any).licenseKey = GOJS_LICENSE;

console.log('🔑 GoJS License set in main.ts');
console.log('GoJS Version:');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
