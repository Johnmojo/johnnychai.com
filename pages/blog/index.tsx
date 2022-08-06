import { GetStaticProps } from "next";
import { BlogsData } from "../../lib/types";
import getBlogs from "../../lib/getBlogs";

interface Props {
  blogsData: BlogsData[];
}

const Blog = ({ blogsData }: Props) => {
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
