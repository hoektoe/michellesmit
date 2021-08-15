import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="w-full bg-white">
        <div className="container py-12 mx-auto">{render(blok.text)}</div>
      </div>
    </SbEditable>
  );
};

export default Text;
