import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getBlog = (slug: string) => {
  const fileContents = fs.readFileSync(
    path.join(`data/blog/${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content
  };
};

export default getBlog;
