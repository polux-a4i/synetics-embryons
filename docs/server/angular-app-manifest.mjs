
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
    'index.csr.html': {size: 2775, hash: 'ee43bcca9f06520fe6c054338b0e3f4f5e791b3525b566185a63fce927addce0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'b715d661a527c10c112a3d5f00ee41df93a3d7c416fee03e84d31f05af749a5e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69830, hash: '9bb8c644d50841a6b207e8b3fa94b67617966167dcb3edc92da6f39bf8f78ca2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 171259, hash: 'fa70860f150a2c1b0b3912c9cb6ef6b7fcaceec22942c199a396bb021e05eeca', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-NRQ6RTXQ.css': {size: 30397, hash: 'PDo7cRFr7KY', text: () => import('./assets-chunks/styles-NRQ6RTXQ_css.mjs').then(m => m.default)}
  },
};
