/**
 * Main layout template for _app.tsx
 * @date 6th September 2022
 */

import { Header } from "../../System/Header";
import { Footer } from "../../System/Footer";
import { useState, useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

declare global {
  interface Window {
    instgrm: {
      Embeds: {
        process(): void;
      };
    };
  }
}

const AppLayout = ({ children }: Props) => {
  const [scroll, setScroll] = useState(false);
  const [edge] = useState(true);

  let curScroll: number;
  let prevScroll =
    (typeof window !== "undefined" && window.scrollY) ||
    (typeof document !== "undefined" && document.documentElement.scrollTop);
  let curDirection = 0;
  let prevDirection = 0;

  let lastY = 0;

  let toggled: void | boolean;
  const downThreshold = 400;
  const upThreshold = 400;

  const handleScroll = () => {
    curScroll = window.scrollY || document.documentElement.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    } else {
      lastY = curScroll;
    }

    prevScroll = curScroll;

    if (toggled) {
      prevDirection = curDirection;
    }
  };

  const toggleHeader = () => {
    toggled = true;
    if (curDirection === 2 && curScroll - lastY > downThreshold) {
      lastY = curScroll;
      setScroll(true);
    } else if (curDirection === 1 && lastY - curScroll > upThreshold) {
      lastY = curScroll;
      setScroll(false);
    } else {
      toggled = false;
    }

    return toggled;
  };

  // Run func when scroll event is fired
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Unused dark mode
    <div className={`${edge && "dark"}`}>
      <Header scroll={scroll} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
