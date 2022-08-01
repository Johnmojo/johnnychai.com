import { NextPage, GetStaticProps } from "next";
import { BlogIndex } from "../../lib/types";
import getBlogs from "../../lib/getBlogs";

const Blog: NextPage<BlogIndex> = ({ blogs }) => {
  return (
    <div>
      <h1>Blog</h1>
      {JSON.stringify(blogs, null, 2)}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = getBlogs();

  return {
    props: {
      blogs: data
    }
  };
};

export default Blog;
