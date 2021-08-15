/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

export default function CallToAction({ blok }) {
  return (
    <SbEditable content={blok}>
      <div className="bg-accent-600">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="pb-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              <span className="block">{blok.title}</span>
            </h2>
            <p className="text-accent-100">{render(blok.description)}</p>
          </div>
          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href={blok.button_link}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-brand-600 hover:bg-brand-700"
              >
                {blok.button_text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  );
}
