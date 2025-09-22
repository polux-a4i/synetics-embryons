
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
    'index.csr.html': {size: 2341, hash: 'e993149bac9739dc91880aa995768be7addc6bcd6a702bce411e71a385921c89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'd2d121d92e70f2c0be4f2fb36c18b46f469691ecb7b1810c4ec09fbfba5e9817', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 68005, hash: '1a1f3dc8bfc13f5c7aa81ab43da3a2cd87b9f576c4e3036448d2a62932de6443', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 143856, hash: '1e2d2b768e663931e7fcd47b3e229f15571dc68ad3e42ad24c412079ac58df97', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-NX34CPG5.css': {size: 30046, hash: '7Nmemzfq5Jk', text: () => import('./assets-chunks/styles-NX34CPG5_css.mjs').then(m => m.default)}
  },
};
