import React from "react";
import SbEditable from "storyblok-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPosts = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="relative py-12 mx-auto max-w-7xl lg:py-16">
        <div
          className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
          key={blok._uid}
        >
          {blok.posts.map((post) => {
            const lang = post.lang === "default" ? "/en" : `/${post.lang}`;

            return (
              <div
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative flex-shrink-0 h-48">
                  <Image
                    src={post.content.image.filename}
                    layout="fill"
                    objectFit="cover"
                    alt={post.content.title}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    {/* <p className="text-sm font-medium text-indigo-600">
                    <Link href={`${lang}/blog/${post.slug}`}>
                      <a className="hover:underline">{post.category.name}</a>
                    </Link>
                  </p> */}
                    <Link href={`${lang}/blog/${post.slug}`}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.content.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.content.intro}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Karli
                        {/* {post.author.name} */}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        {/* <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SbEditable>
  );
};

export default FeaturedPosts;
