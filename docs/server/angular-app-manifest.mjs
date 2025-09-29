
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/synetics-embryons/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/synetics-embryons"
  },
  {
    "renderMode": 2,
    "route": "/synetics-embryons/collections"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2776, hash: 'ec4eb206a82b4957f1f8a2961deb2001b90c0d9f62c3a6d378d020c226cb0fed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: '82474a97c4cff0ea50c6c7c06b696e9fa87dfd2704cf02988e6dd345cfec607c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69967, hash: '1d24adb4be1e7226a5583ff74278baf6e56d7cff9d880b57af23734f17ad60f2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 177051, hash: 'c6d8fb4edd6b46dc86081c0d7ac8b2666a0b078b62f52b2a68ec7679f1b86ba3', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-PBMBAHPW.css': {size: 30795, hash: 'Vmx61p+1Ahw', text: () => import('./assets-chunks/styles-PBMBAHPW_css.mjs').then(m => m.default)}
  },
};
