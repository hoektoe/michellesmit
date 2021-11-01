import React from "react";
import NextHead from "next/head";
import { HOME_META_IMAGE_URL } from "lib/constant";

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta name="description" content={description || ""} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="keywords"
      content="Falsch Informationen über Adam Krbalek, False information about Adam Krbalek      "
    />
    <meta name="twitter:card" content="summary" />
    <link rel="icon" type="image/png" href="/meta/favicon.ico" />
    {/* <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" /> */}
    {/* <meta name="og:image" content={HOME_META_IMAGE_URL} /> */}
    {/* <meta name="twitter:image" content={HOME_META_IMAGE_URL} /> */}
    <meta name="theme-color" content="#ffffff" />
    <meta name="og:url" content="https://www.adam-krbalek.com/" />
  </NextHead>
);

export default Head;
