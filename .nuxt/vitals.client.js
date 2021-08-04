import { webVitals } from '~vitals'
import { sendToAnalytics } from '~vitals-provider'

const options = {
  "debug": false,
  "eventCategory": "Web Vitals",
  "id": "G-Q72VRYTGE2"
}

export default function ({ app: { router } }) {
  router.onReady((to) => {
    webVitals({
      options,
      sendToAnalytics,
      route: to
    })
    router.afterEach(to => webVitals({
      options,
      sendToAnalytics,
      route: to
    }))
  })
}
