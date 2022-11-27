/**
 * Summary component for homepage
 */

// TODO Compoentize this component

import { IconLocation } from "@components/index";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Summary = () => {
  // Intersection observer
  const { ref: contentRef, inView: contentVisible } = useInView({
    triggerOnce: true
  });

  return (
    <section
      ref={contentRef}
      className={`mx-auto max-w-screen-xl px-8 ${
        contentVisible && "animate-[content_1s_ease-in-out]"
      }`}
    >
      <div className="max-w-screen-xl py-20 mx-auto space-y-12 border-t border-b md:py-40 ">
        <div className="flex items-center space-x-4 text-lg font-medium">
          <IconLocation />
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
            code and design. I also recently graduated with a multimedia design
            degree.
          </h1>
          <h1 className="leading-snug">
            Currently working as a{" "}
            <span className="underline">Front-End Developer</span> @{" "}
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://uxagents.com"
              className="underline"
            >
              UXAgents
            </Link>
            . Before that, I&apos;ve worked as a Multimedia designer in a
            marketing agency doing digital advertisements and designs.
          </h1>
          <h1 className="leading-snug">
            Looking for my{" "}
            <Link
              className="text-blue-600 underline hover:text-black"
              target="_blank"
              href="https://drive.google.com/file/d/1HX4ZndDiLkeXlhvyCWGhR7n5zGysZe2P/view?usp=sharing"
              rel="noreferrer"
            >
              resume
            </Link>
            ?
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Summary;
