/**
 * Work index page
 * @date 6th September 2022
 */

import { GetStaticProps } from "next";
import { Hero } from "../../components/Layout/Page";
import { WorkFull } from "../../components/Layout/Work";
import { WorksData } from "../../lib/types";
import getWorks from "../../lib/getWorks";

interface Props {
  worksData: WorksData[];
}

const Work = ({ worksData }: Props) => {
  return (
    <>
      <Hero
        title="Work"
        intro="Some of my professional work and side projects that I've done over the years."
      />
      <WorkFull data={worksData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const worksData = getWorks();
  return {
    props: {
      worksData
    }
  };
};

export default Work;
