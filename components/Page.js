import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";
import Head from "next/head";
import { HOME_META_IMAGE_URL } from "lib/constant";

const Page = ({ blok }) => (
  <SbEditable content={blok} key={blok._uid}>
    <main className="min-h-screen">
      <Head>
        <title>{blok.seo.title}</title>
        <meta name="description" content={blok.seo.description} />
        <meta name="robots" content={blok.seo.description} />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content={blok.seo.og_title ? blok.seo.og_title : blok.seo.title}
        />
        <meta
          name="og:description"
          property="og:description"
          content={
            blok.seo.og_description
              ? blok.seo.og_description
              : blok.seo.description
          }
        />
        {/* <meta property="og:url" content={router.asPath} /> */}
        <meta
          name="twitter:title"
          content={
            blok.seo.twitter_title ? blok.seo.twitter_title : blok.seo.title
          }
        />
        <meta
          name="twitter:description"
          content={
            blok.seo.twitter_description
              ? blok.seo.twitter_description
              : blok.seo.description
          }
        />
        <meta
          property="og:image"
          content={blok.seo.og_image ? blok.seo.og_image : HOME_META_IMAGE_URL}
        />
        <meta
          name="twitter:image"
          content={blok.seo.og_image ? blok.seo.og_image : HOME_META_IMAGE_URL}
        />
      </Head>

      {/* {JSON.stringify(blok.seo, null, "\t")} */}
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  </SbEditable>
);

export default Page;
