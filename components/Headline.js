/* This example requires Tailwind CSS v2.0+ */
import SbEditable from "storyblok-react";

export default function Headline({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="max-w-4xl px-4 py-12 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-base font-bold tracking-wide uppercase text-brand-500">
            {blok.subtitle}
          </div>

          {blok.make_title_h1 && (
            <h1
              id={blok.scroll_to_hash && blok.scroll_to_hash}
              className="text-4xl font-extrabold leading-tight text-accent-800 sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              {blok.title}
            </h1>
          )}

          {!blok.make_title_h1 && (
            <h2
              id={blok.scroll_to_hash && blok.scroll_to_hash}
              className="text-4xl font-extrabold leading-tight text-accent-800 sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              {blok.title}
            </h2>
          )}

          {blok.description && (
            <div className="pt-6 text-lg">{blok.description}</div>
          )}
        </div>
      </div>
    </SbEditable>
  );
}
