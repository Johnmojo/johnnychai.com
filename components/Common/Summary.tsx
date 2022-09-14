/**
 * Summary component for homepage
 */

import { Location } from "../SVG";

const Summary = () => {
  return (
    <section className=" mx-auto max-w-screen-xl px-8">
      <div className="mx-auto max-w-screen-xl space-y-12 border-t border-b py-20 md:py-40 ">
        <div className="flex items-center space-x-4 text-lg font-medium">
          <Location />
          <div className="text-sm md:text-base">Kuching, Malaysia</div>
        </div>
        <div className="w-full space-y-12 text-3xl md:w-3/4 md:text-5xl">
          <h1 className="leading-snug">
            <span className="font-medium">
              Hello!{" "}
              <span className="inline-block origin-[70%_70%] animate-wave">
                👋
              </span>{" "}
              I&apos;m a self-taught Front-End developer
            </span>{" "}
            with a passion for web technologies and solving problems through
            code and design.
          </h1>
          <h1 className="leading-snug">
            Currently, I&apos;m on a break from freelancing. Before that, I
            worked as a Multimedia designer in a marketing agency doing digital
            advertisements and designs.
          </h1>
          <h1 className="leading-snug">
            Looking for my{" "}
            <a
              className="text-blue-600 underline hover:text-black"
              target="_blank"
              href="https://drive.google.com/file/d/1HX4ZndDiLkeXlhvyCWGhR7n5zGysZe2P/view?usp=sharing"
              rel="noreferrer"
            >
              resume
            </a>
            ?
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Summary;
