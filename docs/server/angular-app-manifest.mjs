
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
    'index.csr.html': {size: 2792, hash: '5c5f716c861243e14f455dd5578a971e6858910df1b0dc27fe878e8c62bbd865', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'de1077d8385a34e8f0ca0490b3001cb8309ce6fa6c15faab1722dbb0e33d3099', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73554, hash: 'cf516c5d4ac07be310006ee7d8d115feaebaef7a9cfc932a992aa216250b80da', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 181688, hash: '72f7d71242df20c82470cb0108bc0a0d305ebe1573d0eeca7dfe9c1d07f327d3', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-S5XXHVJE.css': {size: 31217, hash: 'bHzgzL9CF2I', text: () => import('./assets-chunks/styles-S5XXHVJE_css.mjs').then(m => m.default)}
  },
};
