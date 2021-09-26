import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

const Prose = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="w-full bg-white">
        <div className="container py-12 mx-auto prose prose-lg">
          {render(blok.description)}
        </div>
      </div>
    </SbEditable>
  );
};

export default Prose;
