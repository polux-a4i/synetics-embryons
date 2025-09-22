
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
    'index.csr.html': {size: 2687, hash: 'c501fe5bca5f7fd498c24ae8dfe85aa45e4335430a65e7408cc9be8af70e6332', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: '82f06905ba30380d87179610bbb1fff1940d51fde237e9c2cc08eadd1ae2034d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69755, hash: '43d412d4b282bc8cf586091c84b5445e35e1aeb98c9b2ea8e33c5a1a534679fe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 147901, hash: '52bcdf550a050c0b4bbc7af3f727c22c6ffcad7df0f8931e1e237c354acefc18', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-MHSQW4DF.css': {size: 30038, hash: '2KRDl9H/jxA', text: () => import('./assets-chunks/styles-MHSQW4DF_css.mjs').then(m => m.default)}
  },
};
