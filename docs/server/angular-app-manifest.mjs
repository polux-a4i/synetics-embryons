
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://polux-a4i.github.io/synetics-embryons/',
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
    'index.csr.html': {size: 2368, hash: '8a048fbb5fc2c55af75e8af63f4ac8f3a2eeea010f3ac967f23289da0f1ea157', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 987, hash: '686fd8e5b00a2b961a1c4f9b800c2f31a6364e9e61f360374ee6ecb1f4cb4636', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 68032, hash: 'af5398fa13740e566993542eac33a2426e63f16059db9511d715cfe94539e9d5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 144045, hash: '315abb94691da5e10b79d71a95b18ce2269d13864850bcd770cd5816a08b7e7c', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-NX34CPG5.css': {size: 30046, hash: '7Nmemzfq5Jk', text: () => import('./assets-chunks/styles-NX34CPG5_css.mjs').then(m => m.default)}
  },
};
