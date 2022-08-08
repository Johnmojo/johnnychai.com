import dayjs from "dayjs";

interface Props {
  date?: Date;
  title: string;
  intro?: string;
  status?: string;
}

const Hero = ({ date, title, intro, status }: Props) => {
  return (
    <section className="transition-all duration-300 ease-in-out">
      <div className="mx-auto flex h-[80vh] max-w-screen-xl flex-col justify-center space-y-8 pt-96 pb-64">
        {date && <p>Published on {dayjs(date).format("MMMM D, YYYY")}</p>}
        <h1 className="text-8xl font-medium leading-tight">{title}</h1>
        <h3 className="text-3xl leading-relaxed">
          {intro} <br />
          {status}
        </h3>
      </div>
    </section>
  );
};

export default Hero;
