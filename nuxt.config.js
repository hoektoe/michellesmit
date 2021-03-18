
const axios = require('axios')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  components: true,
  loading: {
    color: '#96C5C5',
    height: '2px'
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Michelle Smit - Counselling Psychologist',
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
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: '4ajqyNCQdACZ3f1v9fbOGwtt',
        cacheProvider: 'memory'
      }
    ],
    ['@nuxtjs/markdownit', { html: true, injected: true }],
    ['@nuxtjs/axios'],
    ['nuxt-font-loader-strategy', {
      ignoreLighthouse: true,
      ignoredEffectiveTypes: ['2g', 'slow-2g'],
      fonts: [
        // Font
        {
          fileExtensions: ['woff2'],
          fontFamily: 'Roboto',
          fontFaces: [
            // Font-Face
            {
              preload: true,
              localSrc: ['Roboto', 'Roboto-Regular'],
              src: '@/assets/fonts/roboto-v20-latin-400',
              fontWeight: 400,
              fontStyle: 'normal',
              fontDisplay: 'optional'
            },
            // Font-Face
            {
              localSrc: ['Roboto Medium', 'Roboto-Medium'],
              src: '@/assets/fonts/roboto-v20-latin-500',
              fontWeight: 500,
              fontStyle: 'normal',
              fontDisplay: 'optional'
            },
            // Font-Face
            {
              localSrc: ['Roboto Bold', 'Roboto-Bold'],
              src: '@/assets/fonts/roboto-v20-latin-700',
              fontWeight: 700,
              fontStyle: 'normal',
              fontDisplay: 'optional'
            }
          ]
        }
      ]
    }],
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  tailwindcss: {
    jit: true
  },
  gtm: {
    id: 'GTM-PFK9LKH'
  },
  sitemap: {
    hostname: 'https://michellesmit.com'
  },
  generate: {
    routes: function (callback) {
      const token = `4ajqyNCQdACZ3f1v9fbOGwtt`
      const version = 'published'
      let cache_version = 0

      let toIgnore = ['home', 'en/settings']

      // other routes that are not in Storyblok with their slug.
      let routes = ['/'] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

        // timestamp of latest publish
        cache_version = space_res.data.space.version

        // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (!toIgnore.includes(res.data.links[key].slug)) {
              routes.push('/' + res.data.links[key].slug)
            }
          })

          callback(null, routes)
        })
      })
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: 'chunk',
        maxSize: 256000
      }
    }
  }
}
