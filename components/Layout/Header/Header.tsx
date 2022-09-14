/**
 * Header component
 * @date 6th September 2022
 */

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo, Arrow } from "../../SVG";

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
        className={`fixed z-50 hidden w-full border-b bg-white pt-5 pb-5 transition-all duration-300 ease-out md:block ${
          scroll && "-translate-y-full transition-all"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-8">
          <div className="cursor-pointer">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <nav>
            <ul className="text-base">
              <li className="ml-16 inline-block font-medium decoration-2 underline-offset-8 hover:underline">
                <Link href="/work">
                  <a>Work</a>
                </Link>
              </li>
              <li className="ml-16 inline-block font-medium decoration-2 underline-offset-8 hover:underline">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="ml-16 inline-block font-medium decoration-2 underline-offset-8 hover:underline">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`fixed z-50 block w-full border-b bg-white px-8 pt-5 pb-5 transition-all duration-300 ease-out md:hidden ${
          scroll && "-translate-y-full transition-all"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="cursor-pointer">
            <Link href="/">
              <a aria-label="Homepage">
                <Logo />
              </a>
            </Link>
          </div>
          <div className="z-50 cursor-pointer">
            <button
              aria-label="Toggle main menu"
              aria-haspopup="menu"
              aria-expanded={menu ? "true" : "false"}
              title={menu ? "Close main menu" : "Open main menu"}
              className="flex h-12 w-12 flex-col items-center justify-center rounded-full border border-black"
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
              <div className="mb-12 flex flex-col space-y-6 text-4xl">
                <div className="ml-8 mr-auto text-sm">Navigation</div>
                <div className="relative my-20 flex items-center px-8">
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
                  <Link href="/work">
                    <a>Work</a>
                  </Link>
                </li>
                <li
                  className={`ml-8 mr-auto underline-offset-8 ${
                    menu && "animate-[menu_0.75s_ease-in-out] duration-300"
                  }`}
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li
                  className={`ml-8 mr-auto underline-offset-8 ${
                    menu && "animate-[menu_1s_ease-in-out] duration-1000"
                  }`}
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
              </ul>
              <div className="mt-12 flex flex-col space-y-6 text-4xl">
                <div className="ml-8 mr-auto text-sm">Say hi at</div>
                <div className="relative my-20 flex items-center px-8">
                  <div className="flex-grow border-t"></div>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_1.25s_ease-in-out] duration-1000"
                  }`}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="hello@johnnychai.com"
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div>hello@johnnychai.com</div>
                      <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <Arrow />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_1.5s_ease-in-out] duration-1000"
                  }`}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/johchai"
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div>LinkedIn</div>
                      <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <Arrow />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_1.75s_ease-in-out] duration-1000"
                  }`}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.github.com/johnmojo"
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div>Github</div>
                      <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <Arrow />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className={`ml-8 mr-auto text-xl underline-offset-8 ${
                    menu && "animate-[menu_2s_ease-in-out] duration-1000"
                  }`}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/johnsaaz"
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div>Instagram</div>
                      <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <Arrow />
                      </div>
                    </div>
                  </a>
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
