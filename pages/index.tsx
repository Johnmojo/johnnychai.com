/**
 * Index page
 * @date 6th September 2022
 */

import { GetStaticProps } from "next";
import getWorks from "../lib/getWorks";
import getBlogs from "../lib/getBlogs";
import { HeaderMeta } from "../components/Layout/System/Header";

const Home = () => {
  return (
    <>
      <HeaderMeta
        title="Home - Johnny Chai"
        description="Front End Web Developer based in Malaysia who is who is passionate about coding and solving problems through code and design."
      />
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
