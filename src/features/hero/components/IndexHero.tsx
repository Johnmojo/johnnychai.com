/**
 * Hero component for Index page
 * @date Created: 7th September 2022, Updated: 11 Jan 2023
 */

interface Props {
  title: string; // Title of the hero
  intro?: string; // Summary of the hero
  status?: string; // Secondary summary of the hero
}

export const IndexHero = ({ title, intro, status }: Props) => {
  return (
    <section className="mx-auto max-w-screen-xl animate-elastic px-8 transition-all duration-300 ease-in-out">
      <div className="mmx-auto max-w-screen-xl space-y-12 pb-20 pt-44 md:pb-40 md:pt-64">
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
