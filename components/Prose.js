import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

const Prose = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="container px-4 mx-auto my-12 prose sm:px-6 lg:px-8 md:prose-lg lg:prose-xl">
        <div className="prose ">{render(blok.description)}</div>
      </div>
    </SbEditable>
  );
};

export default Prose;
