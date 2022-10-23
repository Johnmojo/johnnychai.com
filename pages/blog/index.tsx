/**
 * Blog index page
 * @date 6th September 2022
 */

import { GetStaticProps } from "next";
import { Hero } from "@components/index";
import { BlogFull } from "@components/index";
import { BlogsData } from "../../lib/types";
import getBlogs from "../../lib/getBlogs";

interface Props {
  blogsData: BlogsData[];
}

const Blog = ({ blogsData }: Props) => {
  return (
    <>
      <Hero title="Blog" intro="Here's where I write to reflect and learn." />
      <BlogFull data={blogsData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogsData = getBlogs();
  return {
    props: {
      blogsData
    }
  };
};

export default Blog;
