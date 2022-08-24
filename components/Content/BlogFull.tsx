import { BlogType } from "../../lib/types";
import Link from "next/link";
import Dayjs from "dayjs";

interface Props {
  data: BlogType[];
}

const BlogFull = ({ data }: Props) => {
  return (
    <section className="mb-48">
      <div className="mx-auto max-w-screen-xl divide-y divide-solid px-8">
        {data.map((blog, index) => (
          <div key={index} className="py-8">
            <Link href={"blog/" + blog.slug} key={index}>
              <a className="group">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold group-hover:underline">
                    {blog.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400">
                    {Dayjs(blog.date).format("D MMMM, YYYY")}
                  </p>
                  <p className="text-lg text-black">{blog.description}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogFull;
