import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Props {
  scroll: boolean;
  transparent: boolean;
}

const Header = ({ scroll, transparent }: Props) => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <div
        className={`fixed z-50 hidden w-full transition-all duration-300 ease-out md:block ${
          scroll && "-translate-y-full transition-all"
        } ${transparent ? "bg-transparent pt-16 pb-5" : "bg-white pt-5 pb-5"} 
        `}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-8">
          <div className="cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  alt="Logo"
                  src="/static/icons/logo.svg"
                  width={60}
                  height={60}
                />
              </a>
            </Link>
          </div>
          <nav>
            <ul className="text-base">
              <li className="ml-16 inline-block font-semibold underline-offset-8 hover:underline">
                <Link href="/work">
                  <a>Work</a>
                </Link>
              </li>
              <li className="ml-16 inline-block font-semibold underline-offset-8 hover:underline">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="ml-16 inline-block font-semibold underline-offset-8 hover:underline">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`fixed z-50 block w-full px-8 transition-all duration-300 ease-out md:hidden ${
          scroll && "-translate-y-full transition-all"
        } ${transparent ? "bg-transparent pt-16 pb-5" : "bg-white pt-5 pb-5"} `}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  alt="Logo"
                  src="/static/icons/logo.svg"
                  width={60}
                  height={60}
                />
              </a>
            </Link>
          </div>
          <div className="z-50 cursor-pointer">
            <button
              className="flex h-14 w-14 flex-col items-center justify-center rounded-full border border-black"
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
            className={`fixed top-0 -right-2/4 flex h-screen w-2/4 flex-col justify-center bg-white transition-all duration-300 ease-in-out ${
              menu && "right-0 !w-full"
            }`}
          >
            <nav>
              <ul className="flex flex-col space-y-6 text-4xl">
                <li
                  className="ml-16 mr-auto underline-offset-8"
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="/work">
                    <a>Work</a>
                  </Link>
                </li>
                <li
                  className="ml-16 mr-auto underline-offset-8"
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li
                  className="ml-16 mr-auto underline-offset-8"
                  onClick={() => setMenu(!menu)}
                >
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
