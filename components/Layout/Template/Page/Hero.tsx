/**
 * Hero component for Home page
 * @date 7th September 2022
 */

import dayjs from "dayjs";

interface Props {
  date?: Date; // Date if you use on Work or Blog post
  title: string; // Title of the hero
  intro?: string; // Summary of the hero
  status?: string; // Secondary summary of the hero
}

const Hero = ({ date, title, intro, status }: Props) => {
  return (
    <section className="transition-all duration-300 ease-in-out">
      <div className="mx-auto flex h-[40vh] max-w-screen-xl animate-elastic flex-col justify-center space-y-8 px-8 pt-72 pb-48 md:h-[80vh] md:pb-64 md:pt-96">
        {date && <p>Published on {dayjs(date).format("MMMM D, YYYY")}</p>}
        <h1 className="w-full text-5xl font-semibold leading-relaxed md:text-6xl md:leading-relaxed lg:w-5/6">
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

export default Hero;
