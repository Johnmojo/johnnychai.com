import { NextPage } from "next";

interface Props {
  title: string;
}

const Hero: NextPage<Props> = ({ title }) => {
  return (
    <section className="bg-white pt-60 pb-40 transition-all duration-500 ease-in-out dark:bg-black">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-8xl text-black transition-all duration-500 ease-in-out dark:text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
