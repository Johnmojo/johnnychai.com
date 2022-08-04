import { NextPage, GetStaticProps } from "next";
import { BlogIndex } from "../../lib/types";
import getBlogs from "../../lib/getBlogs";
import Template from "../../components/Layout/Template";

const Blog: NextPage<BlogIndex> = ({ blogs }) => {
  return (
    <Template title="Johnny Chai - Blog">
      <div>
        <h1>Blog</h1>
        {JSON.stringify(blogs)}
      </div>
    </Template>
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
