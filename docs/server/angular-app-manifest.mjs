
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
    'index.csr.html': {size: 2775, hash: '024aea6a7d7877a934a65cf93db23b087bda15738ae688431b8ffd46d9d2133c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'a980732747bad090ba59f21cc69d810b382d0eb6f6ddc9c3ce450878be54f070', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69830, hash: '3610116f1384147875e625afbc1cbffefbaba1a6bcdbfd0c80a194e1f584e1c7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 172483, hash: '354d5375d10080bfda13ab6bcf5f12c963c4f45cc8e3f20f934cc5bccc2cb573', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-NRQ6RTXQ.css': {size: 30397, hash: 'PDo7cRFr7KY', text: () => import('./assets-chunks/styles-NRQ6RTXQ_css.mjs').then(m => m.default)}
  },
};
