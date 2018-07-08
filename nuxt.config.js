module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  loading: { color: '#3B8070' },
  css: [
    'tachyons/css/tachyons.min.css',
    'highlight.js/styles/mono-blue.css',
    { src: '~assets/scss/index.scss', lang: 'scss' },
    { src: '~assets/scss/element-variables.scss', lang: 'scss' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      'axios',
      'marked',
      'highlight.js'
    ],
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
    ],
    babel: {
      presets: [
        'es2015', 
        'stage-0'
      ],
      plugins: [
        'transform-runtime',
        'transform-decorators-legacy',
        'transform-class-properties',
      ]
    },
    vendor: ['axios', 'nuxt-class-component', 'vuex-class']
  },
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/marked.js' },
    { src: '~/plugins/highlight.js' },
    { src: '~plugins/filter.js' },
  ],
  modules: ['~modules/typescript.ts']
}
