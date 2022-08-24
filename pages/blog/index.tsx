import { GetStaticProps } from "next";
import { BlogsData } from "../../lib/types";
import getBlogs from "../../lib/getBlogs";
import Hero from "../../components/Content/Hero/HeroPage";
import BlogFull from "../../components/Content/BlogFull";

interface Props {
  blogsData: BlogsData[];
}

const Blog = ({ blogsData }: Props) => {
  return (
    <>
      <Hero title="Blog" intro="Here's where I write to reflect and learn" />
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
