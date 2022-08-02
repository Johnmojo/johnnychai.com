import { NextPage } from "next";

interface Props {
  title: string;
}

const Hero: NextPage<Props> = ({ title }) => {
  return (
    <section className="mx-auto max-w-screen-xl pt-60 pb-28">
      <h1 className="text-8xl font-medium">{title}</h1>
    </section>
  );
};

export default Hero;
