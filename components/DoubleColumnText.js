import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

export default function DoubleColumnText({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-top">
            <div className="mb-12">
              {blok.title && (
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  {blok.title}
                </h2>
              )}
              <div className="max-w-3xl mt-3 text-lg prose-sm prose text-white">
                {render(blok.description)}
              </div>
            </div>
            <div className="mb-12">
              {blok.title_2 && (
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  {blok.title_2}
                </h2>
              )}
              <div className="max-w-3xl mt-3 text-lg prose-sm prose text-white">
                {render(blok.description_2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  );
}
