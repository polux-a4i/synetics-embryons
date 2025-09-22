
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
    'index.csr.html': {size: 2317, hash: '83284278e4bcc8db1e185cf05de394c89b94c8979c1172e2575060d9f384e0f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '6502809fb01f452a73d82ce5dcc6a6ac94d7a44090174395aa74d89d23dfb2bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69467, hash: 'bfe5e493f33362cbb90478416c17e28f31aa5737b7144fbd7071e33cd66efd5a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 147532, hash: '2be90f02754c18b34905b8b7c051460f64fc0467a8d70f9ed642cec12376acea', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-MHSQW4DF.css': {size: 30038, hash: '2KRDl9H/jxA', text: () => import('./assets-chunks/styles-MHSQW4DF_css.mjs').then(m => m.default)}
  },
};
