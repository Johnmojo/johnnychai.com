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
      <div className="mx-auto flex h-[80vh] max-w-screen-xl animate-elastic flex-col justify-center space-y-8 px-8 pt-96 pb-64">
        {date && <p>Published on {dayjs(date).format("MMMM D, YYYY")}</p>}
        <h1 className="w-full font-medium text-7xl md:w-5/6">{title}</h1>
        {intro || status ? (
          <h3 className="w-full text-3xl md:w-2/4">
            {intro} <br />
            {status}
          </h3>
        ) : null}
      </div>
    </section>
  );
};

export default HeroWork;
