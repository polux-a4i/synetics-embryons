
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
    'index.csr.html': {size: 2775, hash: '822aa9cb34434ce1476ae844eeca698b609d908b3085d9fc61a9abb67e387f96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'db4b627e1f1ca1fdd6c4cf14c9bad0270aefb17045bcfe9d00d8a9fefd4bdafe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69845, hash: 'aa1619ed71f597dcf4925d43138fb070d50e6cbb8ba787b2a5e65c3d71be98f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 159883, hash: 'c33abffb405d6b4f1b6e3d95d5f63af0f337b80f8d331e37a2d5e91b3625446d', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-RPBBYGTB.css': {size: 30343, hash: '02bI2cns6MM', text: () => import('./assets-chunks/styles-RPBBYGTB_css.mjs').then(m => m.default)}
  },
};
