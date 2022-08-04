import getWorks from "../lib/getWorks";
import getBlogs from "../lib/getBlogs";
import { NextPage, GetStaticProps } from "next";
import Hero from "../components/Content/Hero";
import Slideshow from "../components/Content/Slideshow";
import SkillCard from "../components/Content/SkillCard";
import BlogPreview from "../components/Content/BlogPreview";

const Home: NextPage = ({ blogsData }) => {
  return (
    <>
      <Hero
        title="I craft solid websites with great user experiences."
        intro="I'm a front-end developer and a multimedia designer."
        status="Currently exploring opportunities and side projects."
      />
      <Slideshow />
      <SkillCard text="I do digital products (Apps, Websites, Mockups) Specifically on Front-End Web development." />
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
