import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";

interface Props {
  scroll: Boolean;
  edge: Boolean;
  transparent: Boolean;
}

const Header: NextPage<Props> = ({ scroll, edge, transparent }) => {
  return (
    <header>
      <div
        className={`fixed w-full transition-all duration-100 ease-out ${
          scroll && "-translate-y-full transition-all"
        } ${transparent ? "bg-transparent pt-16 pb-5" : "bg-white pt-5 pb-5"} 
        `}
      >
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  alt="Logo"
                  src="/../../../static/icons/logo.svg"
                  width={60}
                  height={60}
                />
              </a>
            </Link>
          </div>
          <nav>
            <ul>
              <li className="inline-block ml-16 text-black dark:text-white">
                <Link href="/work">
                  <a>Work</a>
                </Link>
              </li>
              <li className="inline-block ml-16 text-black dark:text-white">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="inline-block ml-16 text-black dark:text-white">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="hidden header-mobile"></div>
    </header>
  );
};

export default Header;
