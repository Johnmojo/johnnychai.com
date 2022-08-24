import { GetStaticProps } from "next";
import { WorksData } from "../../lib/types";
import getWorks from "../../lib/getWorks";
import Hero from "../../components/Content/Hero/HeroPage";
import WorkFull from "../../components/Content/WorkFull";

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
