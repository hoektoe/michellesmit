import React from "react";
import SbEditable from "storyblok-react";
import DynamicIcon from "./icons/DynamicIcon";

const Feature = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="flex flex-col items-center max-w-sm p-2 py-16 text-center sm:p-10">
        <DynamicIcon type={blok.icon} />
        <div className="px-6 py-4">
          <div className="my-4 text-xl font-bold">{blok.name}</div>
          <div className="text-base text-gray-600">{blok.description}</div>
        </div>
      </div>
    </SbEditable>
  );
};

export default Feature;
