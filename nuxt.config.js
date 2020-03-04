
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [ '@nuxtjs/axios' ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  proxy: {
    "/search": {
      target: 'https://api.tvmaze.com', // 代理地址
      changeOrigin: true,
    },
  },
  // axios: {
  //   proxy: true,
  //   prefix: '/search', // baseURL
  //   credentials: true,
  // },
  // router: { //注意本地运行的时候要注释掉，打包的时候需要的话可以加上
  //   base: './'
  // }
  server: {
    port: 8001, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
