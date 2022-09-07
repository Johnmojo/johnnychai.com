/**
 * Blog post layout (MDX)
 */

import Image from "next/future/image";
import { MDXRemote } from "next-mdx-remote";
import { Hero } from "../../Template/Blog";
import { BlogType } from "../../../../lib/types";
import type { serialize } from "next-mdx-remote/serialize";
import { ReactNode } from "react";
import dayjs from "dayjs";
import { HeaderMeta } from "../../System/Header";

interface Props {
  data: BlogType;
  content: Awaited<ReturnType<typeof serialize>>;
}

const BlogLayout = ({ data, content }: Props) => {
  const MDXComponents = {
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="mt-12 mb-4 text-xl font-medium leading-loose text-black md:text-2xl md:leading-loose">
        {children}
      </h1>
    ),
    p: ({ children }: { children?: ReactNode }) => (
      <p className="my-6 text-lg leading-loose text-black">{children}</p>
    ),
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <div className="pb-4">
        <Image
          src={src as string}
          width="1000"
          height="1000"
          className="w-full pt-8 pb-4"
          quality={100}
          priority
          alt={alt}
        />
        <figcaption className="pt-4 text-center text-sm">{alt}</figcaption>
      </div>
    )
  };

  return (
    <>
      <HeaderMeta
        title={`${data.title} - Johnny Chai`}
        description={data.description}
      />
      <Hero title={data.title} />
      <section className="mb-48">
        <div className="mx-auto mb-32 mt-12 max-w-screen-xl px-8">
          <Image src={data.hero} alt={data.title} width={1280} height={1280} />
        </div>
        <div className="mx-auto flex max-w-screen-xl flex-col justify-center space-y-4 px-8">
          <h3 className="text-2xl font-semibold leading-snug md:text-3xl md:leading-snug">
            {data.description}
          </h3>
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            <p className="text-lg font-medium">
              Published on {dayjs(data.date).format("D MMMM, YYYY")}
            </p>
            <p className="text-lg font-medium">• {data.readingTime.text}</p>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className="relative my-10 flex items-center px-8">
            <div className="flex-grow border-t"></div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-32 mt-12 px-8">
            <MDXRemote {...content} components={MDXComponents} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout;
