import dayjs from "dayjs";

interface Props {
  date?: Date; // Date if you use on Work or Blog post
  title: string; // Title of the hero
  intro?: string; // Summary of the hero
  status?: string; // Secondary summary of the hero
}

const HeroWork = ({ date, title, intro, status }: Props) => {
  return (
    <section className="transition-all duration-300 ease-in-out">
      <div className="justify-cente mx-auto flex h-[40vh] max-w-screen-xl animate-elastic flex-col space-y-8 px-8 pb-48 pt-72 md:h-[80vh] md:pt-96 md:pb-64">
        {date && <p>Published on {dayjs(date).format("MMMM D, YYYY")}</p>}
        <h1 className="mx-auto w-full text-4xl font-medium leading-relaxed md:ml-0 md:w-5/6 md:text-6xl md:leading-relaxed">
          {title}
        </h1>
        {intro || status ? (
          <h3 className="w-full text-2xl leading-snug md:w-2/4 md:text-3xl md:leading-snug">
            {intro} <br />
            {status}
          </h3>
        ) : null}
      </div>
    </section>
  );
};

export default HeroWork;
