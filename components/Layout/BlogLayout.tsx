/**
 * Blog post layout (MDX)
 */

import Image from "next/future/image";
import { MDXRemote } from "next-mdx-remote";
import { BlogType } from "../../lib/types";
import type { serialize } from "next-mdx-remote/serialize";
import { ReactNode } from "react";
import dayjs from "dayjs";
import { HeaderMeta, Hero } from "@components/index";
import { useInView } from "react-intersection-observer";

interface Props {
  data: BlogType;
  content: Awaited<ReturnType<typeof serialize>>;
}

const BlogLayout = ({ data, content }: Props) => {
  // Intersection observer
  const { ref: contentRef, inView: contentVisible } = useInView({
    triggerOnce: true
  });

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
          alt={alt as string}
        />
        <figcaption className="pt-4 text-sm text-center">{alt}</figcaption>
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
        <div className="max-w-screen-xl px-8 mx-auto mt-12 mb-32">
          <Image src={data.hero} alt={data.title} width={1280} height={1280} />
        </div>
        <div
          ref={contentRef}
          className={`mx-auto flex max-w-screen-xl flex-col justify-center space-y-4 px-8 ${
            contentVisible && "animate-[content_1s_ease-in-out]"
          }`}
        >
          <h3 className="text-2xl font-medium leading-snug md:text-3xl md:leading-snug">
            {data.description}
          </h3>
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            <p className="text-lg font-medium">
              Published on {dayjs(data.date).format("D MMMM, YYYY")}
            </p>
            <p className="text-lg font-medium">• {data.readingTime.text}</p>
          </div>
        </div>
        <div
          className={`mx-auto max-w-screen-xl transition-opacity duration-1000 ease-in-out ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative flex items-center px-8 my-10">
            <div className="flex-grow border-t"></div>
          </div>
        </div>
        <div
          className={`mx-auto max-w-screen-xl ${
            contentVisible && "animate-[content_1.5s_ease-in-out]"
          }`}
        >
          <div className="px-8 mt-12 mb-32">
            <MDXRemote {...content} components={MDXComponents} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout;
