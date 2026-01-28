module.exports = {
  siteUrl: "https://www.batterypromaitland.co.za",
  generateRobotsTxt: true,
  exclude: ["/404", "/500", "/en/404", "/en/500", "/*/404", "/*/500"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
