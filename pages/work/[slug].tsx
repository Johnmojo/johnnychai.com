import { GetStaticProps, GetStaticPaths } from "next";
import getWork from "../../lib/getWork";
import getWorks from "../../lib/getWorks";
import { serialize } from "next-mdx-remote/serialize";
import { WorkType, MDXContentType } from "../../lib/types";
import WorkLayout from "../../components/Layout/WorkLayout";
import RemarkUnwrapImages from "remark-unwrap-images";
import Prism from "remark-prism";

interface Props {
  data: WorkType[];
  content: MDXContentType[];
}

const Work = ({ data, content }: Props) => {
  return <WorkLayout data={data} content={content} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the slug from the URL
  const works = getWorks();
  const paths = works.map((work) => ({ params: { slug: work.slug } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const work = getWork(slug);
  const mdxSource = await serialize(work.content, {
    mdxOptions: {
      remarkPlugins: [Prism, RemarkUnwrapImages]
    }
  });

  return {
    props: {
      data: work.data,
      content: mdxSource
    }
  };
};

export default Work;
