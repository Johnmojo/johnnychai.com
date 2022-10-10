/**
 * Slug for work post e.g. johnny.com/work/[slug]
 * @date 6th September 2022
 */

import { GetStaticProps, GetStaticPaths } from "next";
import getWork from "../../lib/getWork";
import getWorks from "../../lib/getWorks";
import { serialize } from "next-mdx-remote/serialize";
import { WorkType } from "../../lib/types";
import { WorkLayout } from "../../components/Layout/Work";
import RemarkUnwrapImages from "remark-unwrap-images";
import Prism from "remark-prism";

interface Props {
  data: WorkType;
  content: Awaited<ReturnType<typeof serialize>>;
}

const Work = ({ data, content }: Props) => {
  return <WorkLayout data={data} content={content} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Read the slug from the URL
  const works = getWorks();
  const paths = works.map((work) => ({ params: { slug: work.slug } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  //Get the slug
  const slug = context.params?.slug as string;

  // Retrieve the content & frontmatter
  const work = getWork(slug);

  // Feed into MDX remote
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
