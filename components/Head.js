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
      content="Online Counselling, Psychologist, South Africa, Noordhoek, Kommetjie, Therapy Services, Depression, Anxiety, Relationship, Michelle Smit, Counselling Psychologist, Online Therapy"
    />
    <meta name="twitter:card" content="summary" />
    <link rel="icon" type="image/png" href="/static/meta/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
    {/* <link rel="canonical" href={window.location.href} /> */}
    <meta property="og:image" content={HOME_META_IMAGE_URL} />
    <meta name="twitter:image" content={HOME_META_IMAGE_URL} />
    <meta name="theme-color" content="#96C5C5" />
  </NextHead>
);

export default Head;
