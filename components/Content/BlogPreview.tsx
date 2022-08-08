import Link from "next/link";
import dayjs from "dayjs";
import { BlogType } from "../../lib/types";

type Props = {
  data: BlogType[];
};

const BlogPreview = ({ data }: Props) => {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="py-40">
        <div className="w-7/12">
          <h1 className="text-5xl leading-snug">What I&apos;ve written</h1>
        </div>
        <div>
          {data.map((blog, index) => (
            <Link href={"blog/" + blog.slug} key={index}>
              <a>
                <div key={index}>
                  <h3 className="mt-12 mb-3 text-2xl">{blog.title}</h3>
                  <p className="text-base text-black">{blog.description}</p>
                  <p className="mt-3 text-sm font-medium text-gray-400">
                    {dayjs(blog.date).format("D MMMM, YYYY")}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
