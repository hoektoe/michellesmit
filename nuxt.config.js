const axios = require("axios");

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  components: true,
  loading: {
    color: "#96C5C5",
    height: "2px"
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Michelle Smit - Counselling Psychologist",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        hid: "keywords",
        content:
          "Online Counselling, Psychologist, South Africa, Noordhoek, Kommetjie, Therapy Services, Depression, Anxiety, Relationship, Michelle Smit, Counselling Psychologist, Online Therapy"
      },
      { name: "theme-color", content: "#96C5C5" },
      { name: "msapplication-starturl", content: "/" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { property: "og:type", hid: "og:type", content: "product" },
      {
        property: "og:title",
        hid: "og:title",
        content: "Michelle Smit - Counselling Psychologist"
      },
      {
        property: "og:url",
        hid: "og:url",
        content: "http://michellesmit.com/"
      },
      // TODO: change logo here
      {
        property: "og:image",
        hid: "og:image",
        content:
          "https://a.storyblok.com/f/101001/697x886/ef66c7389e/michellesmit.jpg"
      },
      {
        property: "og:description",
        hid: "og:description",
        content: process.env.npm_package_description || ""
      },
      {
        property: "og:site_name",
        hid: "og:site_name",
        content: "Michelle Smit"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://www.google.co.za" },
      { rel: "preconnect", href: "https://www.google.com" },
      { rel: "preconnect", href: "https://www.google-analytics.com" },
      { rel: "preconnect", href: "https://googleads.g.doubleclick.net" },
      { rel: "preconnect", href: "https://www.googleadservices.com" },
      { rel: "preconnect", href: "https://www.googletagmanager.com" }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/vue-gtag",
    "~/plugins/components",
    "~/plugins/composition-api.js",
    "~/plugins/storyblok-rich-text-renderer.js"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536
    },
    provider: "storyblok",
    storyblok: {
      baseURL: "https://img2.storyblok.com"
    }
  },
  googleAnalytics: {
    id: "G-Q72VRYTGE2"
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/postcss8",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/web-vitals"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: "4ajqyNCQdACZ3f1v9fbOGwtt",
        cacheProvider: "memory"
      }
    ],
    ["@nuxtjs/markdownit", { html: true, injected: true }],
    ["@nuxtjs/axios"],
    [
      "nuxt-font-loader-strategy",
      {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ["2g", "slow-2g"],
        fonts: [
          // Font
          {
            fileExtensions: ["woff2"],
            fontFamily: "Roboto",
            fontFaces: [
              // Font-Face
              {
                preload: true,
                localSrc: ["Roboto", "Roboto-Regular"],
                src: "@/assets/fonts/roboto-v20-latin-400",
                fontWeight: 400,
                fontStyle: "normal",
                fontDisplay: "optional"
              },
              // Font-Face
              {
                localSrc: ["Roboto Medium", "Roboto-Medium"],
                src: "@/assets/fonts/roboto-v20-latin-500",
                fontWeight: 500,
                fontStyle: "normal",
                fontDisplay: "optional"
              },
              // Font-Face
              {
                localSrc: ["Roboto Bold", "Roboto-Bold"],
                src: "@/assets/fonts/roboto-v20-latin-700",
                fontWeight: 700,
                fontStyle: "normal",
                fontDisplay: "optional"
              }
            ]
          }
        ]
      }
    ],
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
  ],
  sitemap: {
    hostname: "https://michellesmit.com"
  },
  generate: {
    routes: function(callback) {
      const token = `4ajqyNCQdACZ3f1v9fbOGwtt`;
      const version = "published";
      let cache_version = 0;

      let toIgnore = ["home", "en/settings"];

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"]; // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push("/" + res.data.links[key].slug);
                }
              });

              callback(null, routes);
            });
        });
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
        chunks: "all",
        automaticNameDelimiter: ".",
        name: "chunk",
        maxSize: 256000
      }
    }
  }
};
