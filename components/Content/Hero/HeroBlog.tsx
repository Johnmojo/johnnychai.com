interface Props {
  title: string; // Title of the hero
}

const HeroBlog = ({ title }: Props) => {
  return (
    <section className="transition-all duration-300 ease-in-out">
      <div className="mx-auto flex h-[40vh] max-w-screen-xl animate-elastic flex-col justify-center space-y-8 px-8 pt-72 pb-48 text-center md:h-[80vh] md:pt-96 md:pb-64">
        <h1 className="w-full text-left text-4xl font-medium leading-relaxed md:w-full md:text-6xl md:leading-relaxed">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroBlog;
