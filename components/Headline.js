/* This example requires Tailwind CSS v2.0+ */
import SbEditable from "storyblok-react";

export default function Headline({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div class="max-w-4xl px-4 py-12 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="text-base font-bold tracking-wide uppercase text-brand-700">
            {blok.subtitle}
          </div>

          {blok.make_title_h1 && (
            <h1 class="text-4xl font-extrabold leading-tight text-accent-500 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {blok.title}
            </h1>
          )}

          {!blok.make_title_h1 && (
            <h2 class="text-4xl font-extrabold leading-tight text-accent-500 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {blok.title}
            </h2>
          )}

          {blok.description && (
            <div class="pt-6 text-lg">{blok.description}</div>
          )}
        </div>
      </div>
    </SbEditable>
  );
}
