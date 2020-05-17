const baseURL = "/"
const homepageURL = `https://www.michellesmit.com${baseURL}`

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Michelle Smit | Psychologist - Addiction Therapy',
    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
      { hid: 'description', name: 'description', content: 'Michelle Smit | Psychologist - Addiction Therapy' },
      { name: "keywords", hid: "keywords", content: "Michelle Smit, Addiction Therapy, Psychologist, Cape Town" },
      { name: "theme-color", content: "#ccffd9" },
      { name: "msapplication-navbutton-color", content: "#ccffd9" },
      { name: "msapplication-starturl", content: "/" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { property: "og:type", hid: "og:type", content: "product" },
      { property: "og:title",  hid: "og:title", content: "Michelle Smit | Psychologist - Addiction Therapy" },
      { property: "og:url", hid: "og:url", content: homepageURL },
      { property: "og:image", hid: "og:image", content: "https://www.michellesmit.com/img/logo_block.png" },
      { property: "og:description", hid: "og:description", content: "Michelle Smit | Psychologist - Addiction Therapy" },
      { property: "og:site_name", hid: "og:site_name", content: "Michelle Smit" },
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    'nuxt-purgecss'
  ],
  purgeCSS: {
    // your settings here
  },
  webfontloader: {
    google: {
      families: ['Open+Sans:300,400,700&display=swap'] //Loads Open Sans font with weights 100, 400 and 700
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
