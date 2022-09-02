import { GetStaticProps } from "next";
import { WorksData, BlogsData } from "../lib/types";
import getWorks from "../lib/getWorks";
import getBlogs from "../lib/getBlogs";
import Hero from "../components/Content/Hero/HeroPage";
import SkillCard from "../components/Content/SkillCard";
import WorkPreview from "../components/Content/WorkPreview";
import BlogPreview from "../components/Content/BlogPreview";
import HeadComponent from "../components/Common/HeadComponent";

type Props = {
  worksData: WorksData[];
  blogsData: BlogsData[];
};

const Home = ({ worksData, blogsData }: Props) => {
  return (
    <>
      <HeadComponent
        title="Home - Johnny Chai"
        description="Front End Web Developer based in Malaysia who is who is passionate about coding and solving problems through code and design."
      />
      <Hero title="I'm a Front End Developer passionate about web technologies." />
      <SkillCard />
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
