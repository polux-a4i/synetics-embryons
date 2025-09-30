
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
    'index.csr.html': {size: 2776, hash: 'd2841d625fe836a16e66bde7677c6157cbeaea0269aa5c8ebf88ed4692346145', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'c2ba25efadf98145d412db0b2b4c0393f1ed65a27adfffe530f3eb0c4971c053', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73499, hash: '55ccb80b5ca2b76dc02d182ec48e4234a3989092d97e3998e9578c5128d43f56', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 181375, hash: '43a637901489fd5c02ec54f0b9dbef4b191fd62fc2aed7a0d102c47e897cd121', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-EU777IVA.css': {size: 30889, hash: 'GM4pI3oB7DI', text: () => import('./assets-chunks/styles-EU777IVA_css.mjs').then(m => m.default)}
  },
};
