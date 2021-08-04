
import { loadFonts, fontsToLinks } from './utils/fontLoader'

import './font-face.css';

const fonts = [{"preload":true,"source":{"path":require('@/assets/fonts/roboto-v20-latin-400.woff2'),"format":"woff2"},"classes":["font_roboto","font_roboto_400_normal"]},{"preload":false,"source":{"path":require('@/assets/fonts/roboto-v20-latin-500.woff2'),"format":"woff2"},"classes":["font_roboto","font_roboto_500_normal"]},{"preload":false,"source":{"path":require('@/assets/fonts/roboto-v20-latin-700.woff2'),"format":"woff2"},"classes":["font_roboto","font_roboto_700_normal"]}];

if (!process.server){
  loadFonts({"ignoredEffectiveTypes":["2g","slow-2g"],"ignoreLighthouse":true,"unlockDelay":0,"prefetchCount":2});
}

export default function ({ app }) {
  app.head.link.push(...fontsToLinks(fonts));
}
