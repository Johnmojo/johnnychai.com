/**
 * Slug for blog post e.g. johnny.com/blog/[slug]
 * @date 6th September 2022
 */

import { GetStaticProps, GetStaticPaths } from "next";
import getBlog from "../../lib/getBlog";
import getBlogs from "../../lib/getBlogs";
import { serialize } from "next-mdx-remote/serialize";
import { BlogType } from "../../lib/types";
import { BlogLayout } from "../../components/Layout/Template/Blog";
import RemarkUnwrapImages from "remark-unwrap-images";
import ReadingTime from "reading-time";
import Prism from "remark-prism";

interface Props {
  data: BlogType;
  content: Awaited<ReturnType<typeof serialize>>;
}

const Blog = ({ data, content }: Props) => {
  return <BlogLayout data={data} content={content} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Read the slug from the URL
  const blogs = getBlogs();
  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  //Get the slug
  const slug = context.params?.slug as string;

  // Retrieve the content & frontmatter
  const blog = getBlog(slug);

  // Update front matter to have reading time
  const data = { ...blog.data, readingTime: ReadingTime(blog.content) };

  // Feed into MDX remote
  const mdxSource = await serialize(blog.content, {
    mdxOptions: {
      remarkPlugins: [Prism, RemarkUnwrapImages]
    }
  });

  return {
    props: {
      data: data,
      content: mdxSource
    }
  };
};

export default Blog;
