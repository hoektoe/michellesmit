import { wrapFunctional } from './utils'

export { default as CallToAction } from '../../components/CallToAction.vue'
export { default as ContactDetails } from '../../components/ContactDetails.vue'
export { default as Feature } from '../../components/Feature.vue'
export { default as FeaturedArticles } from '../../components/FeaturedArticles.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Headline } from '../../components/Headline.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Highlight } from '../../components/Highlight.vue'
export { default as LayoutGrid } from '../../components/LayoutGrid.vue'
export { default as Page } from '../../components/Page.vue'

export const LazyCallToAction = import('../../components/CallToAction.vue' /* webpackChunkName: "components/call-to-action" */).then(c => wrapFunctional(c.default || c))
export const LazyContactDetails = import('../../components/ContactDetails.vue' /* webpackChunkName: "components/contact-details" */).then(c => wrapFunctional(c.default || c))
export const LazyFeature = import('../../components/Feature.vue' /* webpackChunkName: "components/feature" */).then(c => wrapFunctional(c.default || c))
export const LazyFeaturedArticles = import('../../components/FeaturedArticles.vue' /* webpackChunkName: "components/featured-articles" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHeadline = import('../../components/Headline.vue' /* webpackChunkName: "components/headline" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyHighlight = import('../../components/Highlight.vue' /* webpackChunkName: "components/highlight" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutGrid = import('../../components/LayoutGrid.vue' /* webpackChunkName: "components/layout-grid" */).then(c => wrapFunctional(c.default || c))
export const LazyPage = import('../../components/Page.vue' /* webpackChunkName: "components/page" */).then(c => wrapFunctional(c.default || c))
