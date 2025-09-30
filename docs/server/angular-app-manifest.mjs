
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
    'index.csr.html': {size: 2776, hash: '5b1ee6fa66f0f8dace17bb42d3e1fa7bfe13a8a14580813ac2f7f3a34dbf0cf3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'ac53d19cd04dbbefb5bd35555a4235e151a9bdaab0115455b7093bf8e1e11b8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73499, hash: '283d4ebc357f0a9476d11875e5b61985dedc59c90319d7664658ed009a8dcabd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 180569, hash: 'd8dbe8b7c37984c732d88ad614d0b2ad531081feb577779f2a1d9beee833891b', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-MZL7IN7F.css': {size: 30863, hash: 'dJumFVv/AlE', text: () => import('./assets-chunks/styles-MZL7IN7F_css.mjs').then(m => m.default)}
  },
};
