import fs from 'fs'
const packageJson = fs.readFileSync('./package.json')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    baseUrl: process.env.BASE_URL
      ? process.env.BASE_URL.trim()
      : 'http://localhost:8000',
    appUrl: process.env.APP_URL ? process.env.APP_URL.trim() : '',
    version: JSON.parse(packageJson).version || '0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'werukids',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          '/css/alertify.min.css?version=' + JSON.parse(packageJson).version,
      },
      {
        rel: 'stylesheet',
        href: '/css/alertify.css?version=' + JSON.parse(packageJson).version,
      },

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: '/js/alertify.min.js?version=' + JSON.parse(packageJson).version },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    // tailwind
    '@/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vee-validate' },
    {
      src: '~/plugins/alertify.js',
      mode: 'client',
    },
    {
      src: '~/plugins/directives.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL
      ? process.env.BASE_URL.trim()
      : 'http://localhost:8000',
  },
  auth: {
    redirect: {
      login: false,
      logout: '/login',
      callback: false,
      home: false,
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 0,
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/user', method: 'get' },
        },
      },
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Werukids - Learning made fun',
      short_name: 'Werukids',
      lang: 'en',
      orientation: 'portrait',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
      nativeUI: true,
      themeColor: '#FC8741',
      display: 'standalone',
    },
    meta: {},
    icon: {
      fileName: 'icon.png',
      size: 192,
    },
    workbox: {
      cleanupOutdatedCaches: true,
      offline: false,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    publicPath: '/nuxt/',
  },
}
