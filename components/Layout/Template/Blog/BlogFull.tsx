/**
 * Blog post full version - display all posts
 * @date 6th September 2022
 */

import Link from "next/link";
import Dayjs from "dayjs";
import { BlogType } from "../../../../lib/types";
import { HeaderMeta } from "../../Header";
import { ArrowBig } from "../../../SVG";
import { useInView } from "react-intersection-observer";

interface Props {
  data: BlogType[];
}

const BlogFull = ({ data }: Props) => {
  // Intersection observer
  const { ref: listRef, inView: listVisible } = useInView({
    triggerOnce: true
  });

  return (
    <>
      <HeaderMeta
        title="Blog - Johnny Chai"
        description="Here's where I write to reflect and learn."
      />
      <section ref={listRef} className="mb-20 md:mb-40">
        <div
          className={`mx-auto max-w-screen-xl divide-y divide-solid px-8 ${
            listVisible && "animate-[content_1s_ease-in-out]"
          }`}
        >
          {data.map((blog, index) => (
            <div key={index} className="py-8">
              <Link href={"blog/" + blog.slug} key={index}>
                <a className="group">
                  <div className="flex justify-between">
                    <div className="space-y-3">
                      <p className="text-base font-medium">
                        {Dayjs(blog.date).format("D MMMM, YYYY")}
                      </p>
                      <h3 className="text-xl font-semibold group-hover:underline md:text-2xl">
                        {blog.title}
                      </h3>
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
      </section>
    </>
  );
};

export default BlogFull;
