
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
    'index.csr.html': {size: 2775, hash: '8128c92021efcb263f2886bd5481dd6f44fcc227371349d4500b6aad6a6a1785', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: '1be52a87eb8ab0f5b9a2dc1a6b9a8ed110ffc7313de830e20e09622c664c035c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69830, hash: 'e4419dc2067f85fb2079632e121ec0c24db19f501df2e4f87690e96af0abfc7f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 171862, hash: '97302210cb353155f995b5bf4b9726ef5c6e075354bee2e272c2e93f8d235282', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-NRQ6RTXQ.css': {size: 30397, hash: 'PDo7cRFr7KY', text: () => import('./assets-chunks/styles-NRQ6RTXQ_css.mjs').then(m => m.default)}
  },
};
