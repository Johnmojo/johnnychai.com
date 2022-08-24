import Link from "next/link";
import { BlogType } from "../../lib/types";

type Props = {
  data: BlogType[];
};

const BlogPreview = ({ data }: Props) => {
  return (
    <section className="mx-auto max-w-screen-xl px-8">
      <div className="my-40">
        <div className="w-full md:w-7/12">
          <h1 className="pb-12 text-5xl font-medium leading-snug">
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
                      <h3 className="text-2xl font-medium underline-offset-2 group-hover:underline">
                        {blog.title}
                      </h3>
                      <p className="text-lg text-black">{blog.description}</p>
                    </div>
                    <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        data-darkreader-inline-stroke=""
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
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
