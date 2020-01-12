const webpack = require('webpack')

export default {
  mode: 'spa',
  server: {
    host: '0.0.0.0',
    port: 8082
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dashboard BPR DP Taspen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
      }
    ],
    script: [
      {
        src: '/main.js',
        type: 'text/javascript'
      }
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
    { src: '~assets/css/main.css', lang: 'css' }
    // { src: '~assets/layout/_layout.scss', lang: 'scss' },
    // { src: '~assets/themes/_layout-variables.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/bootstrap.js', ssr: false }
    // { src: '~plugins/ckeditor.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/router'
  ],
  /*
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new webpack.DefinePlugin({
        'process.env.LOGGER_LEVEL': JSON.stringify('info')
      })
    ],
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.node = {
          // console: 'empty',
          fs: 'empty',
          child_process: 'empty',
          net: 'empty',
          tls: 'empty'
        }
      }
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
