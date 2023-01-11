/**
 * Read data/blog directory
 * @date 26th August 2022
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getBlogs = () => {
  // Get the directory
  const files = fs.readdirSync(path.join("data/blog"));
  const allBlogsData = files.map((fileName) => {
    // Rid of .mdx
    const slug = fileName.replace(".mdx", "");

    // Read the individual mdx content
    const fileContents = fs.readFileSync(
      path.join(`data/blog/${slug}.mdx`),
      "utf8"
    );

    // Parse & return front-matter data and content
    const { data } = matter(fileContents);
    return data;
  });

  return allBlogsData;
};

export default getBlogs;
