
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
    'index.csr.html': {size: 2775, hash: 'ecaf67582252dfeb7a91fb5e8224a199a09169d08793b76b8247625cc4d427f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: '27e10c98d07c00418456def1ed59855ce94a7c263c5c28c54e4008b1c1bc4517', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69845, hash: '6f49962f58e286b79b7402e4179cbbb704ec8874fe6cec0b187cd7b342256fdd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 159344, hash: 'bd97d8470c90c86ef95fb57e75bc06662cb3a9dda38d87b8179ba2c4194ebcfd', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-FVHR3E4A.css': {size: 30308, hash: '4JU2ZNWv/C4', text: () => import('./assets-chunks/styles-FVHR3E4A_css.mjs').then(m => m.default)}
  },
};
