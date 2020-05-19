const baseURL = "/"
const homepageURL = `https://www.michellesmit.com${baseURL}`

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Michelle Smit | Psychologist - Addiction Therapy',
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: 'utf-8' },
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { hid: 'description', name: 'description', content: 'My passion is within the field of addiction care. I have worked within multidisciplinary teams at in-patient facilities caring for patients that have both substance and process addiction. These addictions range from; alcohol, prescription tablets, cocaine, heroin, methamphetamines to shopping, gaming, and gambling to name a few. In addition, many of the patients I have treated over the years have a dual diagnosis. Often, addiction is comorbid with a psychiatric diagnosis such as depression, anxiety, PTSD, personality disorders or mood disorders.' },
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
      { property: "og:image", hid: "og:image", content: "https://www.michellesmit.com/michellesmit.jpg" },
      { property: "og:description", hid: "og:description", content: "My passion is within the field of addiction care. I have worked within multidisciplinary teams at in-patient facilities caring for  patients that have both substance and process addiction. These addictions range from; alcohol, prescription tablets, cocaine, heroin, methamphetamines to shopping, gaming, and gambling to name a few. In addition, many of the patients I have treated over the years have a dual diagnosis. Often, addiction is comorbid with a psychiatric diagnosis such as depression, anxiety, PTSD, personality disorders or mood disorders." },
      { property: "og:site_name", hid: "og:site_name", content: "Michelle Smit" },
      { name: "google-site-verification", content: "AzlQXUEUdzWUExirM6sDAXRkOT2Rnqnxz42cbjdXHc8"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href:"https://www.google.co.za" },
      { rel: "preconnect", href:"https://www.google.com" },
      { rel: "preconnect", href:"https://www.google-analytics.com" },
      { rel: "preconnect", href:"https://googleads.g.doubleclick.net" },
      { rel: "preconnect", href:"https://www.googleadservices.com" },
      { rel: "preconnect", href:"https://www.googletagmanager.com" },
      { rel: "canonical", href:"https://www.michellesmit.com" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ccffd9' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~plugins/vue-piio.js", mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-167115052-1'
  },
  performance: {
    gzip: true
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    'nuxt-purgecss'
  ],
  purgeCSS: {
    // your settings here
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
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
