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
import { HeaderMeta } from "../components/Layout/System/Header";
import dynamic from "next/dynamic";
import Observer from "../components/Widget/Observer";
import { useRef, useEffect, useState, ReactNode } from "react";

type Props = {
  worksData: WorksData[];
  blogsData: BlogsData[];
};

const Home = ({ worksData, blogsData }: Props) => {
  const targetRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(targetRef.current);
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
      {/* <Observer
        // How do I set if the observer visible, then show the onload?
        onload={
          <WorkPreview
            data={worksData}
            title="Some of the recent projects that I've worked on include designs, websites, and many more."
            limit={4}
          />
        }
      /> */}
      <div ref={targetRef}>
        {visible && (
          <WorkPreview
            data={worksData}
            title="Some of the recent projects that I've worked on include designs, websites, and many more."
            limit={4}
          />
        )}
      </div>
      {/* <Observer onload={<BlogPreview data={blogsData} />} /> */}
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
