import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

const BlogPost = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="container px-4 mx-auto mt-12 prose sm:px-6 lg:px-8 md:prose-lg lg:prose-xl">
        <h1 className="text-5xl font-bold tracking-wide text-primary">
          {blok.title}
        </h1>

        <div className="relative aspect-w-16 aspect-h-9">
          <Image
            className="object-cover w-full h-full rounded-md"
            src={blok.image.filename}
            alt={blok.image.alt}
            layout="fill"
          />
        </div>
        <div className="pb-20">{render(blok.long_text)}</div>
      </div>
    </SbEditable>
  );
};

export default BlogPost;
