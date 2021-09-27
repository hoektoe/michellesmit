import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";

export default function ImageWithTextOnLeft({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div
              className={`order-2 ${
                blok.place_image_on_right ? "sm:order-1" : "sm:order-2"
              }`}
            >
              {blok.subtitle && (
                <p className="text-xl font-extrabold text-brand-500 sm:text-2xl">
                  {blok.subtitle}
                </p>
              )}
              {blok.title && (
                <h2 className="text-3xl font-extrabold text-accent-700 sm:text-4xl">
                  {blok.title}
                </h2>
              )}
              <div className="max-w-3xl mt-3 text-lg prose-sm prose text-gray-500">
                {render(blok.description)}
              </div>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  {blok.button_text && blok.button_link.cached_url && (
                    <Link href={blok.button_link.cached_url}>
                      <a className="flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-brand-600 hover:bg-brand-500">
                        {blok.button_text}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`order-1 ${
                blok.place_image_on_right ? "sm:order-2" : "sm:order-1"
              }`}
            >
              <div
                className={`flex justify-center col-span-1 px-8 py-8 ${
                  blok.image_grayscale && "filter grayscale"
                }`}
              >
                <Image
                  className="max-w-md rounded-lg "
                  src={blok.image.filename}
                  alt={blok.image.alt}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  );
}
