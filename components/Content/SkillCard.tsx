import Image from "next/image";

const SkillCard = () => {
  return (
    <section className=" mx-auto max-w-screen-xl px-8">
      <div className="mx-auto my-40 max-w-screen-xl space-y-12 border-t border-b py-40 ">
        <div className="flex items-center space-x-4 text-lg font-medium">
          <Image
            alt="Logo"
            src="/../../../static/icons/location.svg"
            width={14}
            height={19}
          />
          <div>Kuching, Malaysia</div>
        </div>
        <div className="w-full space-y-12 text-3xl md:w-3/4 md:text-5xl">
          <h3 className="leading-snug">
            <span className="font-medium">
              Hi, I&apos;m Johnny 👋 - a Front End Developer
            </span>{" "}
            who is passionate about coding and solving problems through code and
            design.
          </h3>
          <h3 className="leading-snug">
            Currently, I&apos;m on the break from freelancing. Before that, I
            worked as a Multimedia designer in a marketing agency doing digital
            advertisements and designs.
          </h3>
          <h3 className="leading-snug">
            Looking for my{" "}
            <a
              className="underline"
              target="_blank"
              href="https://drive.google.com/file/d/1HX4ZndDiLkeXlhvyCWGhR7n5zGysZe2P/view?usp=sharing"
              rel="noreferrer"
            >
              resume
            </a>
            ?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SkillCard;
