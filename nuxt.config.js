const pkg = require('./package')

module.exports = {
  mode: 'universal',
  router: {
    middleware: 'auth'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '以梦想为名',
    titleTemplate: '%s - anRui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'description', name: 'description', content: '读书,代码,生活,一起学习吧,以梦想为名' },
      { hid: 'keywords', name: 'keywords', content: '前端开发,JavaScript,TypeScript,Node,React,Vue,Nuxt' },
      { hid: 'author', name: 'author', content: 'anRui, scrscript@163.com' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/rui.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'highlight.js/styles/monokai-sublime.css',
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/scss/index.scss', lang: 'sass' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/element-ui' },
    { src: '~/plugins/directive' },
    { src: '~/plugins/marked.js' },
    { src: '~/plugins/highlight.js' },
    { src: '~/plugins/filter.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   styleResources: {
     scss: ['./assets/scss/variable.scss']
   },
   // 在页面单文件中使用 scss 
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
    ],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }
    }
  }
}
