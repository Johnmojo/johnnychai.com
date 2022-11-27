/**
 * Footer component
 * @date 6th September 2022
 */

import { ArrowSmall, ArrowMid } from "@components/index";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  // Intersection observer
  const { ref: listRef, inView: listVisible } = useInView({
    triggerOnce: true
  });

  return (
    <footer
      ref={listRef}
      className={`border-t pt-8 pb-10 md:pt-28 md:pb-20 ${
        listVisible && "animate-[content_1s_ease-in-out]"
      }`}
    >
      <div className="max-w-screen-xl px-8 mx-auto">
        <section className="mt-12 mb-6 font-medium">
          <h1 className="text-3xl leading-snug md:text-5xl md:leading-snug">
            Say hi at
          </h1>
          <h1 className="inline-block text-xl leading-snug md:text-5xl md:leading-snug">
            <Link
              target="_blank"
              rel="noreferrer"
              href="mailto:hello@johnnychai.com"
              className="break-words group"
            >
              <div className="flex items-center">
                <div className="group-hover:underline">
                  hello@johnnychai.com
                </div>
                <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowMid />
                </div>
              </div>
            </Link>
            <div>or stay in touch.</div>
          </h1>
        </section>
        <section className="flex mt-6 mb-20 text-lg text-black md:mb-36">
          <ul className="flex flex-col md:flex-row">
            <li className="my-2 mr-6">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/johchai"
                className="group"
              >
                <div className="flex items-center justify-between">
                  <div className="decoration-2 underline-offset-2 group-hover:underline">
                    LinkedIn
                  </div>
                  <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowSmall />
                  </div>
                </div>
              </Link>
            </li>
            <li className="my-2 mr-6">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/johnmojo"
                className="group"
              >
                <div className="flex items-center justify-between">
                  <div className="decoration-2 underline-offset-2 group-hover:underline">
                    Github
                  </div>
                  <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowSmall />
                  </div>
                </div>
              </Link>
            </li>
            <li className="my-2 mr-6">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/johnsaaz"
                className="group"
              >
                <div className="flex items-center justify-between">
                  <div className="decoration-2 underline-offset-2 group-hover:underline">
                    Instagram
                  </div>
                  <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowSmall />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </section>
        <div className="text-sm leading-relaxed text-black">
          © 2022 Johnny Chai.⚡Built with NextJS and TailwindCSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
