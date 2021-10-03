import React from "react";
import NextHead from "next/head";
import { HOME_META_IMAGE_URL } from "lib/constant";

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta
      name="description"
      content={
        description ||
        "BATTERY PRO MAITLAND supplies and fits quality MAXIM batteries. All of our batteries carry a 2-year no-fuss warranty."
      }
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="keywords"
      content="Battery Pro Maitland, Battery Pro, Maxim Batteries, Monbat Batteries, Maitland,Maitland ,Pinelands,Milnerton,Paarden Eiland,South rivier,Observatory,Century city"
    />
    <meta name="twitter:card" content="summary" />
    <link rel="icon" type="image/png" href="/meta/favicon.ico" />
    <meta name="og:image" content={HOME_META_IMAGE_URL} />
    <meta name="twitter:image" content={HOME_META_IMAGE_URL} />
    <meta name="theme-color" content="#EB6A28" />
    <meta name="og:url" content="https://www.batterypromaitland.co.za" />
  </NextHead>
);

export default Head;
