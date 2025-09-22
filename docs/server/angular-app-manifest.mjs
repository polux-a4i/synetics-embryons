
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
    'index.csr.html': {size: 2317, hash: '816d4cd62a780c0ec16913af4f8b24e9e1a780cea48d60438ab768727613a83f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: 'b03224a25139d270b340c26145fac1ff71d15aa0bedab9a69c7d4935fbbdda9c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 67981, hash: '8048f0472c60fd484b7c8883fa7590c1c37085a7daffaa52d8e597ba2db93b05', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 143848, hash: 'e8d97fa8ab25c05c7f8b4e1c93f7064c3bd2613789f5d6ae390cae7339658b1f', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-MHSQW4DF.css': {size: 30038, hash: '2KRDl9H/jxA', text: () => import('./assets-chunks/styles-MHSQW4DF_css.mjs').then(m => m.default)}
  },
};
