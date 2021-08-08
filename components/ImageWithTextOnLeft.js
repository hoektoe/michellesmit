import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

export default function ImageWithTextOnLeft({ blok }) {
  return (
    <SbEditable content={blok}>
      <div className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              {blok.title && (
                <h2 className="text-3xl font-extrabold text-accent-500 sm:text-4xl">
                  {blok.title}
                </h2>
              )}
              <p className="max-w-3xl mt-3 text-lg text-gray-500">
                {render(blok.description)}
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  {blok.button_text && blok.button_text && (
                    <a
                      href={blok.button_text}
                      className="flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-brand-600 hover:bg-brand-700"
                    >
                      {blok.button_text}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 ">
              <div
                className={`flex justify-center col-span-1 px-8 py-8 ${
                  blok.image_grayscale && "filter grayscale"
                }`}
              >
                <img
                  className="max-w-md rounded-lg"
                  src={blok.image.filename}
                  alt={blok.image.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  );
}
