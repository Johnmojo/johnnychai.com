import { GetStaticProps } from "next";
import { WorksData } from "../../lib/types";
import getWorks from "../../lib/getWorks";

interface Props {
  worksData: WorksData[];
}

const Work = ({ worksData }: Props) => {
  return (
    <div>
      <h1>Work</h1>
      {JSON.stringify(worksData)}
    </div>
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
