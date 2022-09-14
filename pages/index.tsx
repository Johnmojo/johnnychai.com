/**
 * Index page
 * @date 6th September 2022
 */

import { GetStaticProps } from "next";
import { WorksData, BlogsData } from "../lib/types";
import getWorks from "../lib/getWorks";
import getBlogs from "../lib/getBlogs";
import { Hero } from "../components/Layout/Template/Home";
import { Summary } from "../components/Common";
// import { WorkPreview } from "../components/Layout/Template/Work";
import { BlogPreview } from "../components/Layout/Template/Blog";
import { HeaderMeta } from "../components/Layout/Header";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

type Props = {
  worksData: WorksData[];
  blogsData: BlogsData[];
};

const Home = ({ worksData, blogsData }: Props) => {
  const { ref: workRef, inView: workVisible } = useInView({
    triggerOnce: true
  });
  const { ref: blogRef, inView: blogVisible } = useInView({
    triggerOnce: true
  });

  const WorkPreview = dynamic(
    () => import("../components/Layout/Template/Work/WorkPreview")
  );

  return (
    <>
      <HeaderMeta
        title="Home - Johnny Chai"
        description="Front End Web Developer based in Malaysia who is who is passionate about coding and solving problems through code and design."
      />
      <Hero title="I'm Johnny, a front end developer based in Malaysia." />
      <Summary />
      <div
        ref={workRef}
        className={` ${workVisible ? "opacity-100" : "opacity-0"}`}
      >
        {workVisible && (
          <WorkPreview
            data={worksData}
            title="Some of the recent projects that I've worked on include designs, websites, and many more."
            limit={4}
          />
        )}
      </div>
      <div ref={blogRef}>{blogVisible && <BlogPreview data={blogsData} />}</div>
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
