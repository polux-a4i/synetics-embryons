
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
    'index.csr.html': {size: 2775, hash: '942584275543599219b5898ae11ee613033a17d55b8fa2cd2139be5d0e917b36', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: '9641553f5ebb61f57c9a0ee2aefcdae961a514f77b99eda28a15cfcb68911e32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69830, hash: 'ce4cdfd0a256b5298cf52a7c87b91592f7a0b66fff6bad86eac760ba0cab29ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 173143, hash: 'c3659cf85169b3c5d08777036e48cc4f5d931aed6c12afa6b5396b0c1bc089c1', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-5HTCTY3M.css': {size: 30444, hash: 'tH2YitLUrqk', text: () => import('./assets-chunks/styles-5HTCTY3M_css.mjs').then(m => m.default)}
  },
};
