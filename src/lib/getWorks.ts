/**
 * Read data/work directory
 * @date 26th August 2022
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getWorks = () => {
  // Get the directory
  const files = fs.readdirSync(path.join("data/work"));
  const allWorksData = files.map((fileName) => {
    // Rid of .mdx
    const slug = fileName.replace(".mdx", "");

    // Read the individual mdx content
    const fileContents = fs.readFileSync(
      path.join(`data/work/${slug}.mdx`),
      "utf8"
    );

    // Parse & return front-matter data and content
    const { data } = matter(fileContents);
    return data;
  });

  return allWorksData;
};

export default getWorks;
