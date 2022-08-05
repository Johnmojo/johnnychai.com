interface Props {
  title: string;
  intro?: string;
  status?: string;
}

const Hero = ({ title, intro, status }: Props) => {
  return (
    <section className="bg-white pt-60 pb-48 transition-all duration-500 ease-in-out dark:bg-black">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-8xl text-black dark:text-white">{title}</h1>
        <h3 className="my-12 text-3xl leading-relaxed text-black dark:text-white">
          {intro} <br />
          {status}
        </h3>
      </div>
    </section>
  );
};

export default Hero;
