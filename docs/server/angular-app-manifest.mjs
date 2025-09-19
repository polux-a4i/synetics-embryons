
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
    'index.csr.html': {size: 2341, hash: '8078d2cdd4ac4846110cbaeec125a8651e2a6abb6df8a73d117b598c833a21e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'eb1fbe96b44bbfcec7b92d8de5d61cb0bf9230fdc727d0c7ac8239c09389aeef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 68015, hash: '19067c560cff93bd3441c14db4ac7cc9b335353d637507461d4d551afe62f9f4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 113181, hash: 'a23457381936ccf72500acc118531715b73acc529cb4bb043f2dcfd0432dfc53', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-JCIW5VQW.css': {size: 29864, hash: 'R0m+ABodxIs', text: () => import('./assets-chunks/styles-JCIW5VQW_css.mjs').then(m => m.default)}
  },
};
