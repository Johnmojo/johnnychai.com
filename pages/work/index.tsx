import { GetStaticProps } from "next";
// import { BlogIndex } from "../../lib/types";
import getWorks from "../../lib/getWorks";

const Work = ({ worksData }) => {
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
