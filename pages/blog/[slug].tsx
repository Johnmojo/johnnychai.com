import { GetStaticProps, GetStaticPaths } from "next";
import getBlog from "../../lib/getBlog";
import getBlogs from "../../lib/getBlogs";
import { serialize } from "next-mdx-remote/serialize";
import { BlogSlug } from "../../lib/types";
import BlogLayout from "../../components/Layout/BlogLayout";

const Blog = ({ data, content }) => {
  return <BlogLayout data={data} content={content} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the slug from the URL
  const blogs = getBlogs();
  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const blog = getBlog(slug);
  const mdxSource = await serialize(blog.content);

  return {
    props: {
      data: blog.data,
      content: mdxSource
    }
  };
};

export default Blog;
