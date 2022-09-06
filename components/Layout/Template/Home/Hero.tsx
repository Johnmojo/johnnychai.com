interface Props {
  title: string; // Name
  intro?: string; // Summary of the hero
}

const Hero = ({ title, intro }: Props) => {
  return (
    <section className="transition-all duration-300 ease-in-out">
      <div className="mx-auto flex h-[40vh] max-w-screen-xl animate-elastic flex-col justify-center px-8 pt-72 pb-48 md:h-[80vh] lg:pb-72 lg:pt-96">
        <h1 className="w-full text-4xl font-medium leading-snug sm:text-6xl sm:leading-snug md:text-7xl md:leading-snug lg:text-8xl lg:leading-snug xl:w-5/6">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
