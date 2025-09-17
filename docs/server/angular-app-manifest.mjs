
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/synetics-embryons/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/synetics-embryons"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2341, hash: '5b13fc1bb9e626dd508b87b012ace028ecae8b1115e670abc5f8e8237630392e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'd07d4ca907a76c97512229e2aaf24a4033c4c42b0e7be5a03cec50ed432a5863', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 66893, hash: '81d1d35a4de375fab6a64b1e94bfce246e83b26c2f55a603c64379209c5e6f3c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FDESBVFQ.css': {size: 27403, hash: '28dlA/i4BCs', text: () => import('./assets-chunks/styles-FDESBVFQ_css.mjs').then(m => m.default)}
  },
};
