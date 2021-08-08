import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CallToAction: () => import('../../components/CallToAction.vue' /* webpackChunkName: "components/call-to-action" */).then(c => wrapFunctional(c.default || c)),
  ContactDetails: () => import('../../components/ContactDetails.vue' /* webpackChunkName: "components/contact-details" */).then(c => wrapFunctional(c.default || c)),
  Feature: () => import('../../components/Feature.vue' /* webpackChunkName: "components/feature" */).then(c => wrapFunctional(c.default || c)),
  FeaturedArticles: () => import('../../components/FeaturedArticles.vue' /* webpackChunkName: "components/featured-articles" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Headline: () => import('../../components/Headline.vue' /* webpackChunkName: "components/headline" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  Highlight: () => import('../../components/Highlight.vue' /* webpackChunkName: "components/highlight" */).then(c => wrapFunctional(c.default || c)),
  LayoutGrid: () => import('../../components/LayoutGrid.vue' /* webpackChunkName: "components/layout-grid" */).then(c => wrapFunctional(c.default || c)),
  Page: () => import('../../components/Page.vue' /* webpackChunkName: "components/page" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
