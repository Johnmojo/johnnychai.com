import Image from "next/future/image";
import { MDXRemote } from "next-mdx-remote";
import { HeroBlog } from "../Content/Hero";
import { BlogType } from "../../lib/types";
import type { serialize } from "next-mdx-remote/serialize";
import { ReactNode } from "react";

interface Props {
  data: BlogType;
  content: Awaited<ReturnType<typeof serialize>>;
}

const BlogLayout = ({ data, content }: Props) => {
  const MDXComponents = {
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="mt-12 mb-4 text-2xl font-medium text-black">{children}</h1>
    ),
    p: ({ children }: { children?: ReactNode }) => (
      <p className="my-6 text-lg text-black">{children}</p>
    ),
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <div className="pb-4">
        <Image
          src={src as string}
          width="1000"
          height="1000"
          className="w-full pt-8 pb-4"
          alt={alt}
        />
        <figcaption className="pt-8 text-center text-sm">{alt}</figcaption>
      </div>
    )
  };

  return (
    <>
      <HeroBlog date={data.date} title={data.title} intro={data.description} />
      <section className="mb-48 px-8">
        <div className="mx-auto max-w-screen-xl">
          <Image
            src={data.hero}
            alt={data.title}
            width={1280}
            height={1280}
            className="py-8"
          />
        </div>
        <div className="mx-auto max-w-screen-md">
          <div className="my-32 space-y-10">
            <MDXRemote {...content} components={MDXComponents} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout;
