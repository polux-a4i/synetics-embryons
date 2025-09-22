
export default {
  basePath: 'https://polux-a4i.github.io/synetics-embryons',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
