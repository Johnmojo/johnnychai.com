/**
 * Header component
 * @date 6th September 2022
 */

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowSmall } from "@components/index";

interface Props {
  scroll: boolean;
}

const Header = ({ scroll }: Props) => {
  const [menu, setMenu] = useState(false);

  // If user resize the window, close the menu
  const handleResize = () => {
    if (window.innerWidth < 768 && menu) {
      setMenu(false);
    }
  };

  // Detect toggler click
  useEffect(() => {
    if (menu) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
    window.addEventListener("resize", handleResize);
  }, [menu]);

  return (
    <header>
      <div
        className={`fixed z-50 hidden w-full pt-8 pb-8 transition-all duration-300 ease-out md:block ${
          scroll && "-translate-y-full transition-all"
        }`}
      >
        <div className="flex items-center justify-between max-w-screen-xl px-8 mx-auto">
          <div className="cursor-pointer">
            <Link
              href="/"
              aria-label="Homepage"
              className="inline-block font-semibold decoration-2 underline-offset-8 hover:underline"
            >
              Johnny Chai
            </Link>
          </div>
          <nav>
            <ul className="text-base">
              <li className="inline-block ml-16 font-semibold decoration-2 underline-offset-8 hover:underline">
                <Link href="/work">Work</Link>
              </li>
              <li className="inline-block ml-16 font-semibold decoration-2 underline-offset-8 hover:underline">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="inline-block ml-16 font-semibold decoration-2 underline-offset-8 hover:underline">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`fixed z-50 block w-full px-8 pt-8 pb-8 transition-all duration-300 ease-out md:hidden ${
          scroll && "-translate-y-full transition-all"
        }`}
      >
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="cursor-pointer">
            <Link
              href="/"
              aria-label="Homepage"
              className="inline-block font-semibold decoration-2 underline-offset-8 hover:underline"
            >
              Johnny Chai
            </Link>
          </div>
          <div className="z-50 cursor-pointer">
            <button
              aria-label="Toggle main menu"
              aria-haspopup="menu"
              aria-expanded={menu ? "true" : "false"}
              title={menu ? "Close main menu" : "Open main menu"}
              className="flex flex-col items-center justify-center w-12 h-12 border border-black rounded-full"
              onClick={() => setMenu(!menu)}
            >
              <span
                className={`h-0.5 w-5 bg-black transition-all duration-300 ease-in-out ${
                  menu && "translate-y-[3px] -rotate-45"
                }`}
              ></span>
              <span
                className={`mt-[5px] h-0.5 w-5 bg-black transition-all duration-300 ease-in-out ${
                  menu && "-translate-y-[4px] rotate-45"
                }`}
              ></span>
            </button>
          </div>
          <div
            className={`fixed top-0 -right-2/4 flex h-screen w-2/4 flex-col justify-center bg-white transition-all duration-500 ease-in-out ${
              menu && "right-0 !w-full"
            }`}
          >
            <nav>
              <div className="flex flex-col mb-12 space-y-6 text-4xl">
                <div className="ml-8 mr-auto text-sm">Navigation</div>
                <div className="relative flex items-center px-8 my-20">
                  <div className="flex-grow border-t"></div>
                </div>
              </div>
              <ul className="flex flex-col space-y-6 text-4xl">
                <li
                  className={`ml-8 mr-auto underline-offset-8 ${
                    menu && "animate-[menu_0.5s_ease-in-out] duration-100"
                  }`}
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="/work">Work</Link>
                </li>
                <li
                  className={`ml-8 mr-auto underline-offset-8 ${
                    menu && "animate-[menu_0.75s_ease-in-out] duration-300"
                  }`}
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="/blog">Blog</Link>
                </li>
                <li
                  className={`ml-8 mr-auto underline-offset-8 ${
                    menu && "animate-[menu_1s_ease-in-out] duration-1000"
                  }`}
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="/about">About</Link>
                </li>
              </ul>
              <div className="flex flex-col mt-12 space-y-6 text-4xl">
                <div className="ml-8 mr-auto text-sm">Say hi at</div>
                <div className="relative flex items-center px-8 my-20">
                  <div className="flex-grow border-t"></div>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_1.25s_ease-in-out] duration-1000"
                  }`}
                >
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="hello@johnnychai.com"
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div>hello@johnnychai.com</div>
                      <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowSmall />
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_1.5s_ease-in-out] duration-1000"
                  }`}
                >
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/johchai"
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div>LinkedIn</div>
                      <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowSmall />
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_1.75s_ease-in-out] duration-1000"
                  }`}
                >
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.github.com/johnmojo"
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div>Github</div>
                      <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowSmall />
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_2s_ease-in-out] duration-1000"
                  }`}
                >
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/johnsaaz"
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div>Instagram</div>
                      <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowSmall />
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_2.25s_ease-in-out] duration-1000"
                  }`}
                ></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
