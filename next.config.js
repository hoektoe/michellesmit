const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  siteUrl: "https://batterypromaitland.co.za",
  generateRobotsTxt: true,
  i18n: {
    localeDetection: false,
    locales: ["en", "af"],
    defaultLocale: "en",
  },
  images: {
    domains: ["a.storyblok.com", "localhost:3000"],
  },
});
