/**
 * Blog post preview only
 * @date 6th September 2022
 */

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { BlogType } from "../../lib/types";
import { ArrowBig } from "@components/index";

type Props = {
  data: BlogType[];
};

const BlogPreview = ({ data }: Props) => {
  const { ref: mainRef, inView: mainVisible } = useInView({
    triggerOnce: true
  });

  return (
    <section ref={mainRef} className="mx-auto max-w-screen-xl px-8">
      <div
        className={`my-20 md:my-40 ${
          mainVisible && "animate-[content_1s_ease-in-out]"
        }`}
      >
        <div className="w-full md:w-7/12">
          <h1 className="pb-12 text-3xl font-medium leading-snug md:text-5xl md:leading-snug">
            What I&apos;ve written
          </h1>
        </div>
        <div className="divide-y divide-solid">
          {data.map((blog, index) => (
            <div key={index} className="py-8">
              <Link href={"blog/" + blog.slug} key={index}>
                <a className="group">
                  <div className="flex justify-between">
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold underline-offset-2 group-hover:underline md:text-2xl">
                        {blog.title}
                      </h2>
                      <p className="text-lg md:text-xl">{blog.description}</p>
                    </div>
                    <div className="mt-auto mb-auto hidden overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 md:block">
                      <ArrowBig />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
