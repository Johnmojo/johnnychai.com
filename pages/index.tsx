import { NextPage, GetStaticProps } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Something else here</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};

export default Home;
