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
          <title>{blok.seo.title}</title>
          <meta name="description" content={blok.seo.description} />
          {router.asPath.includes("thank") && (
            <meta name="robots" content="noindex" />
          )}
          <meta property="og:type" content="website" />
          <meta
            name="og:title"
            property="og:title"
            content={`The Counsellors Couch - Adam Labuschagne`}
          />
          <metaser
            name="og:description"
            property="og:description"
            content={`The Counsellor's Couch offers compassionate and professional mental health counseling services, providing a safe space for individuals to explore personal challenges, improve well-being, and achieve personal growth.`}
          />
          {/* <meta property="og:url" content={router.asPath} /> */}
          <meta
            name="twitter:title"
            content={`The Counsellors Couch - Adam Labuschagne`}
          />
          <meta
            name="twitter:description"
            content={`The Counsellor's Couch offers compassionate and professional mental health counseling services, providing a safe space for individuals to explore personal challenges, improve well-being, and achieve personal growth.`}
          />
          <meta property="og:image" content={HOME_META_IMAGE_URL} />
          <meta name="twitter:image" content={HOME_META_IMAGE_URL} />
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
