import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

const BlogPost = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="w-full bg-white-half">
        <div className="flex flex-col items-center max-w-3xl pt-20 mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold tracking-wide text-primary">
            {blok.title}
          </h1>
          <p className="max-w-lg text-lg text-gray-500">{blok.intro}</p>
          <div className="w-full my-16 bg-gray-300">
            <Image layout="fill" src={blok.image} alt={blok.title} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-3xl pt-20 mx-auto text-center">
        <div className="text-xl leading-relaxed text-left text-gray-800 drop-cap">
          {render(blok.long_text)}
        </div>
      </div>
    </SbEditable>
  );
};

export default BlogPost;
