import React from "react";
import SbEditable from "storyblok-react";
import Link from "next/link";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export default function HeroImageOnRight({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="relative bg-gray-50">
        <main className="lg:relative">
          <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">{blok.headline}</span>
              </h1>
              <div className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                {render(blok.description)}
              </div>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href={blok.link_secondary_href.cached_url}>
                    <a
                      href={blok.link_secondary_href.cached_url}
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10"
                    >
                      {blok.link_secondary_text}
                    </a>
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link href={blok.link_primary_href.cached_url}>
                    <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-brand-600 hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      {blok.link_primary_text}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <Image
              className="absolute inset-0 object-cover w-full h-full"
              src={blok.image.filename}
              alt={blok.image.alt}
              layout="fill"
            />
          </div>
        </main>
      </div>
    </SbEditable>
  );
}
