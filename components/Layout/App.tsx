/**
 * Main layout template for _app.tsx
 * @date 6th September 2022
 */

import { Header } from "../Navigation";
import { Footer } from "../Navigation";
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

const App = ({ children }: Props) => {
  // Check scroll & color
  const [scroll, setScroll] = useState(false);

  // Here we store our beautiful & colorful array
  const colorsArray = [
    "#d1e4de",
    "#d1dee4",
    "#d2d0e5",
    "#e6d1d4",
    "#e5dbd2",
    "#eeeade"
  ];

  // Set scroll variables
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

  // Check scroll direction
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

  // Toggle header
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

  // Run function when scroll event is fired
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch random colors
  useEffect(() => {
    async function fetchColor() {
      const random = Math.floor(Math.random() * colorsArray.length);

      // Inject CSS directly into body
      document.body.style.background = colorsArray[random];
    }
    fetchColor();
  }, []);

  return (
    <>
      <Header scroll={scroll} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default App;
