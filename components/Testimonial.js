import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

const Testimonial = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="px-4 py-12 rounded-lg bg-accent-700 sm:px-6 md:flex md:flex-col ">
        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
          <div className="relative text-lg text-white md:flex-grow">
            <svg
              className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-brand-600"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="relative">{render(blok.description)}</div>
          </div>
          <footer className="mt-8">
            <div className="text-base font-medium text-white">
              {blok.author}
            </div>
            <div className="text-base font-medium text-brand-500">
              {blok.position}
            </div>
          </footer>
        </blockquote>
      </div>
    </SbEditable>
  );
};

export default Testimonial;
