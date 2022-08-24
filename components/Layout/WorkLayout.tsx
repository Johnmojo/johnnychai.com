import Image from "next/future/image";
import { MDXRemote } from "next-mdx-remote";
import { HeroWork } from "../Content/Hero";
import { WorkType, MDXContentType } from "../../lib/types";
import dayjs from "dayjs";

interface Props {
  data: WorkType[];
  content: MDXContentType[];
}

const WorkLayout = ({ data, content }: Props) => {
  const MDXComponents = {
    h1: (props: { children: string }) => (
      <h1
        className="mt-12 mb-4 text-2xl font-medium leading-relaxed text-black"
        {...props}
      />
    ),
    p: (props: { children: string }) => (
      <p className="my-6 text-lg leading-10 text-black" {...props} />
    ),
    img: (props: { src: string; alt: string }) => (
      <div className="pb-4">
        <Image
          src={props.src}
          alt={props.alt}
          width={1000}
          height={1000}
          className="w-full pt-8 pb-4"
        />
        <figcaption className="text-center text-xs text-neutral-800">
          {props.alt}
        </figcaption>
      </div>
    )
  };

  return (
    <>
      <HeroWork title={data.title} />
      <section className="mb-48 space-y-32 px-8">
        {data.hero && (
          <div className="mx-auto max-w-screen-xl">
            <Image
              src={data.hero}
              alt={data.alt}
              width={1000}
              height={1000}
              className="w-full pt-8 pb-4"
            />
          </div>
        )}
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-32">
            <div>
              <div>
                <h3 className="mb-6 text-3xl leading-relaxed text-black">
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
            <div>
              <MDXRemote {...content} components={MDXComponents} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkLayout;
