/**
 * Work post layout (MDX)
 */

import Image from "next/future/image";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote";
import type { serialize } from "next-mdx-remote/serialize";
import { ReactNode } from "react";
import { Hero } from "../../Template/Work";
import { WorkType } from "../../../../lib/types";
import Instagram from "../../../Widget/Instagram/Instagram";
import { HeaderMeta } from "../../Header";
import { useInView } from "react-intersection-observer";

interface Props {
  data: WorkType;
  content: Awaited<ReturnType<typeof serialize>>;
}

const WorkLayout = ({ data, content }: Props) => {
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
          alt={alt}
        />
        <figcaption className="pt-4 text-center text-sm">{alt}</figcaption>
      </div>
    ),
    Instagram: ({ postID }: { postID: string }) => <Instagram postID={postID} />
  };

  return (
    <>
      <HeaderMeta
        title={`${data.title} - Johnny Chai`}
        description={data.summary}
      />
      <Hero title={data.title} />
      <section className="mb-48 space-y-32">
        {data.hero && (
          <div className="mx-auto max-w-screen-xl px-8">
            <Image
              src={data.hero}
              alt={data.title}
              width={1280}
              height={1280}
              quality={100}
              priority
              className="w-full pt-8 pb-4"
            />
          </div>
        )}
        <div ref={contentRef} className="mx-auto max-w-screen-xl">
          <div className="mb-32 px-8">
            <div
              className={`${
                contentVisible && "animate-[content_1s_ease-in-out]"
              }`}
            >
              <div>
                <h3 className="mb-6 text-2xl leading-snug text-black md:text-3xl md:leading-snug">
                  {data.summary}
                </h3>
                <div className="flex w-full flex-col justify-between gap-8 pt-8 md:w-3/4 md:flex-row">
                  <div>
                    <span className="text-base text-gray-500">Category</span>
                    <div className="text-lg font-medium capitalize">
                      {data.category}
                    </div>
                  </div>
                  <div>
                    <span className="text-base text-gray-500">Tool</span>
                    <div className="text-lg font-medium">{data.tool}</div>
                  </div>
                  <div>
                    <span className="text-base text-gray-500">Year</span>
                    <div className="text-lg font-medium">
                      {dayjs(data.date).format("MMM YYYY")}
                    </div>
                  </div>
                  {data.link && (
                    <div>
                      <span className="text-base text-gray-500">Website</span>
                      <div className="text-lg font-medium underline">
                        <a target="_blank" rel="noreferrer" href={data.link}>
                          Live Website
                        </a>
                      </div>
                    </div>
                  )}
                  {data.github && (
                    <div>
                      <span className="text-base text-gray-500">Source</span>
                      <div className="text-lg font-medium underline">
                        <a target="_blank" rel="noreferrer" href={data.github}>
                          Github Repo
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative my-20 flex items-center">
                <div className="flex-grow border-t"></div>
              </div>
            </div>
            <div
              className={`${
                contentVisible && "animate-[content_1.5s_ease-in-out]"
              }`}
            >
              <MDXRemote {...content} components={MDXComponents} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkLayout;
