export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tequila-view',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/vuelidate' },
    { src: '~/plugins/helpers' },
    { src: '~/plugins/global-components' },
    { src: '~/plugins/vue-datepicker' },
    { src: '~/plugins/vue-select' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  ssr: true,
  // serverMiddleware: [
  //   {
  //     path: '/api',
  //     handler: '~/api'
  //   }
  // ],
  generate: {
    fallback: true
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'exact-active',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  loading: {
    color: '#189ca9',
    height: '3px'
  },

  toast: {
    position: 'top-right',
    keepOnHover: true,
    duration: 3000,
  },

  axios: {
    // Do away with the baseUrl when using proxy
    proxy: true,
    // baseURL: 'https://api.affiliate.pickvisa.com',
    proxyHeaders: false,
    credentials: false
  },

  proxy: {
    // Simple proxy
    '/api/': {
      target: 'https://api.affiliate.pickvisa.com',
      // pathRewrite: { '^api/': '' },
      changeOrigin: true
    },
    '/api2/': {
      target: 'https://combinations.pickvisa.com',
      pathRewrite: { '/api2/': '/api/' },
      changeOrigin: true,
      headers: {
        Authorization: 'Token 08582a913f9d27ba7124645843ec2d3ad121597a'
      }
    },
  },

  auth: {
    localStorage: true,
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'result.access',
          global: true,
          required: true,
          maxAge: 1800,
        },
        refreshToken: {
          property: 'result.refresh',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: 'result.user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/v1/users/signin/', method: 'post' },
          logout: false,
          user: false,
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/solutions',
    },
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'script' || type === 'style') {
          return true
        }
        if (type === 'font') {
          // only preload woff2 fonts
          return /\.woff2$/.test(file)
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      extend(config, ctx) {
        config.module.rules.push({
          test: /_redirects$/,
          loader: 'file-loader',
          options: {
            name: '_redirects',
          },
        })
      }
  }
}
