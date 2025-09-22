
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
    'index.csr.html': {size: 2687, hash: '48fc43c40390573b71d78a0548b994b00bbe386ddd81df8d8c2eb10d743caf89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'cd8b70907ae1f94faa0667bce511317fcedd1290f3d5d473c684feb87bc1bde2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69755, hash: 'b2dfffa20355801a6a7b8c90b980692fc6979b316def77d6e2033932b42e4728', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 150003, hash: '588964f8d05f8e2382bbbe52822b97f045ae31efb24909af7c01d97724eb90a1', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-MHSQW4DF.css': {size: 30038, hash: '2KRDl9H/jxA', text: () => import('./assets-chunks/styles-MHSQW4DF_css.mjs').then(m => m.default)}
  },
};
