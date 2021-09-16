import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";

const Iframe = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <iframe src={blok.url} width="1000" height="2000"></iframe>
    </SbEditable>
  );
};

export default Iframe;
