import dayjs from "dayjs";

interface Props {
  date?: Date; // Date if you use on Work or Blog post
  title: string; // Title of the hero
  intro?: string; // Summary of the hero
  status?: string; // Secondary summary of the hero
}

const HeroBlog = ({ date, title, intro, status }: Props) => {
  return (
    <section className="transition-all duration-300 ease-in-out">
      <div className="mx-auto flex h-[80vh] max-w-screen-xl animate-elastic flex-col justify-center space-y-8 px-8 pt-96 pb-64 text-center">
        <h1 className="w-full text-7xl font-medium leading-normal md:w-5/6">
          {title}
        </h1>
        {intro || status ? (
          <h3 className="w-full text-3xl md:w-2/4">
            {intro} <br />
            {status}
          </h3>
        ) : null}
        {date && (
          <p className="mx-auto w-1/5 text-black">
            Published on {dayjs(date).format("MMMM D, YYYY")}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBlog;
