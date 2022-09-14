/**
 * Hero component for Home
 * @date 7th September 2022
 */

interface Props {
  title: string; // Name
  intro?: string; // Summary of the hero
}

const Hero = ({ title }: Props) => {
  return (
    <section className=" mx-auto max-w-screen-xl animate-elastic px-8 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-screen-xl space-y-12 pb-20 pt-44 md:pb-40 md:pt-64">
        <h1 className="w-full text-4xl font-medium leading-snug sm:text-6xl sm:leading-snug md:text-7xl md:leading-snug lg:text-8xl lg:leading-snug xl:w-5/6">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
