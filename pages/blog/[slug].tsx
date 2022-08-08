import { GetStaticProps, GetStaticPaths } from "next";
import getBlog from "../../lib/getBlog";
import getBlogs from "../../lib/getBlogs";
import { serialize } from "next-mdx-remote/serialize";
import { BlogType, MDXContentType } from "../../lib/types";
import BlogLayout from "../../components/Layout/BlogLayout";
import RemarkUnwrapImages from "remark-unwrap-images";
import Prism from "remark-prism";

interface Props {
  data: BlogType[];
  content: MDXContentType[];
}

const Blog = ({ data, content }: Props) => {
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
  const mdxSource = await serialize(blog.content, {
    mdxOptions: {
      remarkPlugins: [Prism, RemarkUnwrapImages]
    }
  });

  return {
    props: {
      data: blog.data,
      content: mdxSource
    }
  };
};

export default Blog;
