import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Hero from "../../components/Content/Hero";
// import { BlogType, MDXContentType } from "../../lib/types";

// interface Props {
//   data: BlogType[];
//   content: MDXContentType[];
// }

const BlogLayout = ({ data, content }) => {
  const mdxComponents = {
    img: (props) => (
      <Image alt={data.title} width="600" height="460" {...props} />
    )
  };

  return (
    <>
      <Hero title={data.title} intro={data.description} />
      <section>
        <MDXRemote {...content} components={mdxComponents} />
      </section>
    </>
  );
};

export default BlogLayout;
