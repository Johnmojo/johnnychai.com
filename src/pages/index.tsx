/**
 * Index page
 * @date 6th September 2022
 */

import { GetStaticProps } from "next";
import { WorksData, BlogsData } from "@lib/types";
import getWorks from "@lib/getWorks";
import getBlogs from "@lib/getBlogs";
import Metadata from "@/utils/Metadata";
import { IndexHero } from "@/features/hero";
import { Summary, BlogPreview, WorkPreview } from "@components/index";

type Props = {
  worksData: WorksData[];
  blogsData: BlogsData[];
};

const Home = ({ worksData, blogsData }: Props) => {
  return (
    <>
      <Metadata
        title="Home - Johnny Chai"
        description="Front End Web Developer based in Malaysia who is who is passionate about coding and solving problems through code and design."
      />
      <IndexHero title="I'm Johnny, a front end developer based in Malaysia." />
      <Summary />
      <WorkPreview
        data={worksData}
        title="Some of the recent projects that I've worked on include designs, websites, and many more."
        limit={4}
      />
      <BlogPreview data={blogsData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const worksData = getWorks();
  const blogsData = getBlogs();
  return {
    props: {
      worksData,
      blogsData
    }
  };
};

export default Home;
