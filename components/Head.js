import React from "react";
import NextHead from "next/head";
import { HOME_META_IMAGE_URL } from "lib/constant";

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{`The Counsellors Couch - Adam Labuschagne` || ""}</title>
    <meta
      name="description"
      content={
        `The Counsellor's Couch offers compassionate and professional mental health counseling services, providing a safe space for individuals to explore personal challenges, improve well-being, and achieve personal growth.` ||
        ""
      }
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="keywords"
      content="Online Session with Adam Labuschagne, Addiction Practitioner"
    />
    <meta name="twitter:card" content="summary" />
    <link rel="icon" type="image/png" href="/meta/favicon.ico" />
    <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
    <meta name="og:image" content={HOME_META_IMAGE_URL} />
    <meta name="twitter:image" content={HOME_META_IMAGE_URL} />
    <meta name="theme-color" content="#96C5C5" />
    <meta name="og:url" content="https://www.thecounsellorscouch.com/" />
  </NextHead>
);

export default Head;
