import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";

interface Props {
  scroll: Boolean;
  edge: Boolean;
}

const Header: NextPage<Props> = ({ scroll, edge }) => {
  return (
    <header>
      <div
        className={`header-desktop fixed w-full bg-white py-5 transition duration-500 ease-in-out  ${
          scroll && "-translate-y-full"
        } ${edge && "translate-y-8 bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
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
              <li className="ml-16 inline-block">
                <Link href="/work">
                  <a>Work</a>
                </Link>
              </li>
              <li className="ml-16 inline-block">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="ml-16 inline-block">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-mobile hidden"></div>
    </header>
  );
};

export default Header;
