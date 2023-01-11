/**
 * Hero component for Home page
 * @date 7th September 2022
 */

interface Props {
  title: string; // Title of the hero
  intro?: string; // Summary of the hero
  status?: string; // Secondary summary of the hero
}

const PageHero = ({ title, intro, status }: Props) => {
  return (
    <section className="max-w-screen-xl px-8 mx-auto transition-all duration-300 ease-in-out animate-elastic">
      <div className="max-w-screen-xl pb-20 space-y-12 mmx-auto pt-44 md:pb-40 md:pt-64">
        <h1 className="w-full text-5xl font-semibold leading-snug sm:text-6xl sm:leading-snug md:text-7xl md:font-medium md:leading-snug lg:text-8xl lg:leading-snug xl:w-5/6">
          {title}
        </h1>
        {intro || status ? (
          <h3 className="w-full space-y-4 text-2xl leading-snug md:w-2/4 md:text-3xl md:leading-snug">
            <div>{intro}</div>
            <div>{status}</div>
          </h3>
        ) : null}
      </div>
    </section>
  );
};

export default PageHero;
