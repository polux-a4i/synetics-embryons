
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
    'index.csr.html': {size: 2792, hash: 'fd1b7ee8a4f74726f098426c7315bf3a940eb15201606d1c75426ace6e1e24b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1336, hash: 'f3f947cc839ac637602a7e8eaf45647e355b0983726f16aaaae3cad6beefd3e5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73554, hash: '76afd097b3f75e1165bc5789ba9f396e8256f0fd141462d14647d0b405b16ea1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 181916, hash: '27a2f2ccc5353a6bbe8f0d066d011d106c9e2991dd724c226fab454b9754d9e2', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-YAM2XBXA.css': {size: 31539, hash: 'fvsxxPiPWRM', text: () => import('./assets-chunks/styles-YAM2XBXA_css.mjs').then(m => m.default)}
  },
};
