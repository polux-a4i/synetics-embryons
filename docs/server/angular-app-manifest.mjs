
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
    'index.csr.html': {size: 2317, hash: 'e901792ced3aefee9fa05b275fd0b8bb01fbc1d951216df36995527a5fe424ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '8b9eaf4cea25838215268d7911f47def9a90c6fb0b08f3146b96eaa6a1914641', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69386, hash: 'e39d0655504e07c8b5993d11a812384420ac444959d3b51d04a7573142d73583', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 147532, hash: '52636e85268772ebdf3cdc2772f3a8cb8bddbbda55e72a0ca2cef050588098ae', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-MHSQW4DF.css': {size: 30038, hash: '2KRDl9H/jxA', text: () => import('./assets-chunks/styles-MHSQW4DF_css.mjs').then(m => m.default)}
  },
};
