
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
    'index.csr.html': {size: 2776, hash: 'd01882c17e39bf17b1f4b883b13caec364fb40e8b096d1601fb0d0720e50a0a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: '2ffd65b949c2e25a168e3d429b0ef1a5a1a5b14e9f277c1c141be873f971d97d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69831, hash: 'b0330cfa961cdf0d2621bc03e3aba22b606577d80c51f52bac706dc895c379d6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 173406, hash: 'fb7c599e3156899538386d1d671ae3d1e69b5032af391691fe76554fa46672cf', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-EUTZTMWV.css': {size: 30749, hash: 'FnEq8r8jV9s', text: () => import('./assets-chunks/styles-EUTZTMWV_css.mjs').then(m => m.default)}
  },
};
