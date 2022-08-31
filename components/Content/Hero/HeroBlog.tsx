interface Props {
  title: string; // Title of the hero
}

const HeroBlog = ({ title }: Props) => {
  return (
    <section className="transition-all duration-300 ease-in-out">
      <div className="mx-auto flex h-[80vh] max-w-screen-xl animate-elastic flex-col justify-center space-y-8 px-8 pt-96 pb-64 text-center">
        <h1 className="w-full text-left text-4xl font-medium leading-snug md:w-full md:text-7xl md:leading-snug">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroBlog;
