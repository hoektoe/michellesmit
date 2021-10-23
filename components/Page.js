import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";
import Head from "next/head";
import { HOME_META_IMAGE_URL } from "lib/constant";
import { useRouter } from "next/router";

export default function Page({ blok }) {
  const router = useRouter();

  return (
    <SbEditable content={blok} key={blok._uid}>
      <main className="min-h-screen">
        <Head>
          <title>
            {blok.seo && blok.seo.title ? blok.seo.title : "Enter a seo title"}
          </title>
          <meta
            name="description"
            content={
              blok.seo && blok.seo.description
                ? blok.seo.description
                : "Enter a seo decription"
            }
          />
          {router.asPath.includes("thank") && (
            <meta name="robots" content="noindex" />
          )}
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
          <meta
            property="og:url"
            content={`https://elnadurr.co.za${router.asPath}`}
          />
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
            content={
              blok.seo.og_image ? blok.seo.og_image : HOME_META_IMAGE_URL
            }
          />
          <meta
            name="twitter:image"
            content={
              blok.seo.og_image ? blok.seo.og_image : HOME_META_IMAGE_URL
            }
          />
        </Head>

        {/* {JSON.stringify(blok, null, "\t")} */}
        {blok.body
          ? blok.body.map((blok) => (
              <DynamicComponent blok={blok} key={blok._uid} />
            ))
          : null}
      </main>
    </SbEditable>
  );
}
