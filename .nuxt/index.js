import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_ad03cb68 from 'nuxt_plugin_plugin_ad03cb68' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_index_3bdab6c8 from 'nuxt_plugin_index_3bdab6c8' // Source: ./nuxt-font-loader-strategy/index.js (mode: 'all')
import nuxt_plugin_axios_88c7513c from 'nuxt_plugin_axios_88c7513c' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_markdownit_efc09f48 from 'nuxt_plugin_markdownit_efc09f48' // Source: ./markdownit.js (mode: 'all')
import nuxt_plugin_templatesplugind74e99a8_0bba2b12 from 'nuxt_plugin_templatesplugind74e99a8_0bba2b12' // Source: ./templates.plugin.d74e99a8.js (mode: 'all')
import nuxt_plugin_vitalsclient_2f52d8b4 from 'nuxt_plugin_vitalsclient_2f52d8b4' // Source: ./vitals.client.js (mode: 'client')
import nuxt_plugin_image_b2b95746 from 'nuxt_plugin_image_b2b95746' // Source: ./image.js (mode: 'all')
import nuxt_plugin_vuegtag_9dc199a0 from 'nuxt_plugin_vuegtag_9dc199a0' // Source: ../plugins/vue-gtag (mode: 'all')
import nuxt_plugin_components_6fb0430c from 'nuxt_plugin_components_6fb0430c' // Source: ../plugins/components (mode: 'all')
import nuxt_plugin_compositionapi_a8f56dd4 from 'nuxt_plugin_compositionapi_a8f56dd4' // Source: ../plugins/composition-api.js (mode: 'all')
import nuxt_plugin_storyblokrichtextrenderer_34a41e1d from 'nuxt_plugin_storyblokrichtextrenderer_34a41e1d' // Source: ../plugins/storyblok-rich-text-renderer.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Michelle Smit - Counselling Psychologist","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"keywords","hid":"keywords","content":"Online Counselling, Psychologist, South Africa, Noordhoek, Kommetjie, Therapy Services, Depression, Anxiety, Relationship, Michelle Smit, Counselling Psychologist, Online Therapy"},{"name":"theme-color","content":"#96C5C5"},{"name":"msapplication-starturl","content":"\u002F"},{"hid":"description","name":"description","content":"Hi, I'm Michelle Smit - Counselling Psychologist. I am fully bilingual in English and Afrikaans. My therapy services include help with addiction, anxiety, relationships and depress. Schedule your free 15min consultation today."},{"property":"og:type","hid":"og:type","content":"product"},{"property":"og:title","hid":"og:title","content":"Michelle Smit - Counselling Psychologist"},{"property":"og:url","hid":"og:url","content":"http:\u002F\u002Fmichellesmit.com\u002F"},{"property":"og:image","hid":"og:image","content":"https:\u002F\u002Fa.storyblok.com\u002Ff\u002F101001\u002F697x886\u002Fef66c7389e\u002Fmichellesmit.jpg"},{"property":"og:description","hid":"og:description","content":"Hi, I'm Michelle Smit - Counselling Psychologist. I am fully bilingual in English and Afrikaans. My therapy services include help with addiction, anxiety, relationships and depress. Schedule your free 15min consultation today."},{"property":"og:site_name","hid":"og:site_name","content":"Michelle Smit"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.google.co.za"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.google.com"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.google-analytics.com"},{"rel":"preconnect","href":"https:\u002F\u002Fgoogleads.g.doubleclick.net"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.googleadservices.com"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.googletagmanager.com"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_ad03cb68 === 'function') {
    await nuxt_plugin_plugin_ad03cb68(app.context, inject)
  }

  if (typeof nuxt_plugin_index_3bdab6c8 === 'function') {
    await nuxt_plugin_index_3bdab6c8(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_88c7513c === 'function') {
    await nuxt_plugin_axios_88c7513c(app.context, inject)
  }

  if (typeof nuxt_plugin_markdownit_efc09f48 === 'function') {
    await nuxt_plugin_markdownit_efc09f48(app.context, inject)
  }

  if (typeof nuxt_plugin_templatesplugind74e99a8_0bba2b12 === 'function') {
    await nuxt_plugin_templatesplugind74e99a8_0bba2b12(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vitalsclient_2f52d8b4 === 'function') {
    await nuxt_plugin_vitalsclient_2f52d8b4(app.context, inject)
  }

  if (typeof nuxt_plugin_image_b2b95746 === 'function') {
    await nuxt_plugin_image_b2b95746(app.context, inject)
  }

  if (typeof nuxt_plugin_vuegtag_9dc199a0 === 'function') {
    await nuxt_plugin_vuegtag_9dc199a0(app.context, inject)
  }

  if (typeof nuxt_plugin_components_6fb0430c === 'function') {
    await nuxt_plugin_components_6fb0430c(app.context, inject)
  }

  if (typeof nuxt_plugin_compositionapi_a8f56dd4 === 'function') {
    await nuxt_plugin_compositionapi_a8f56dd4(app.context, inject)
  }

  if (typeof nuxt_plugin_storyblokrichtextrenderer_34a41e1d === 'function') {
    await nuxt_plugin_storyblokrichtextrenderer_34a41e1d(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
