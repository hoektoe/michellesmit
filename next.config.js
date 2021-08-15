const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseUrl = "";

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: false,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },

  i18n: {
    localeDetection: false,
    locales: ["en", "af"],
    defaultLocale: "en",
  },
});
