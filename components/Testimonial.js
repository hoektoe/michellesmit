import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Testimonial = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <section className="px-6 py-24 mx-auto rounded-md bg-gray-50 max-w-7xl sm:py-32 lg:px-8">
        <figure className="max-w-2xl mx-auto">
          <p className="sr-only">5 out of 5 stars</p>
          <div className="flex text-brand-600 gap-x-1">
            <StarIcon aria-hidden="true" className="flex-none w-5 h-5" />
            <StarIcon aria-hidden="true" className="flex-none w-5 h-5" />
            <StarIcon aria-hidden="true" className="flex-none w-5 h-5" />
            <StarIcon aria-hidden="true" className="flex-none w-5 h-5" />
            <StarIcon aria-hidden="true" className="flex-none w-5 h-5" />
          </div>
          <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
            <p>“{render(blok.description)}”</p>
          </blockquote>
          <figcaption className="flex items-center mt-10 gap-x-6">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <div className="font-semibold text-gray-900"> {blok.author}</div>
              <div className="mt-0.5 text-gray-600"> {blok.position}</div>
            </div>
          </figcaption>
        </figure>
      </section>
    </SbEditable>
  );
};

export default Testimonial;
