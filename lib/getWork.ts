import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getWork = (slug: string) => {
  const fileContents = fs.readFileSync(
    path.join(`data/work/${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content
  };
};

export default getWork;
