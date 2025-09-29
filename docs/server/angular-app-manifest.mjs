
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
    'index.csr.html': {size: 2776, hash: '78c72bc27907a85b43c4c06ecf32e3ee69e3aa1d0518b2122aee68b8afc68327', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'f98e34de3a10999c088e6fc0eaca2105ff7bd49229fb9e6ac6af1642f9fc7eca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69991, hash: 'd3a252613066d7fb4f32e12fce88079de5cc0249fd62970287715215e5d4a9bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 175089, hash: '47f67aece826fd26517b13e61525e0e56711ff3cd88e894913c52a7dab45ecbd', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-PBMBAHPW.css': {size: 30795, hash: 'Vmx61p+1Ahw', text: () => import('./assets-chunks/styles-PBMBAHPW_css.mjs').then(m => m.default)}
  },
};
