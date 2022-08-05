import { GetStaticProps } from "next";
// import { BlogIndex } from "../../lib/types";
import getBlogs from "../../lib/getBlogs";

const Blog = ({ blogsData }) => {
  return (
    <div>
      <h1>Blog</h1>
      {JSON.stringify(blogsData)}
    </div>
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
