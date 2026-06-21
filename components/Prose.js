import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

const Prose = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="w-full py-12 bg-white">
        <div className="container mx-auto prose prose-lg">
          {render(blok.description)}
        </div>
      </div>
    </SbEditable>
  );
};

export default Prose;
