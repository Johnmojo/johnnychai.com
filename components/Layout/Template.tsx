import Header from "./Header";
import Footer from "./Footer";
import { NextPage } from "next";
import { useState, useEffect } from "react";

interface Props {
  children: string;
}

const Template: NextPage<Props> = ({ children, pageClass, title }) => {
  const [scroll, setScroll] = useState(false);
  const [edge, setEdge] = useState(true);
  const [transparent, setTransparent] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  let oldScrollY: number = 0;

  const handleScroll = () => {
    // Reach edge
    if (window.scrollY === 0) {
      setEdge(true);
      // setDarkMode(true);
    } else {
      // setDarkMode(false);
      setEdge(false);
    }

    // Initiate transparent when nearing edge
    if (window.scrollY > 100) {
      setTransparent(false);
    } else {
      console.log("yes");
      setTransparent(true);
    }

    // Scrolling direction
    if (window.scrollY > oldScrollY && window.scrollY > 0) {
      // Scroll down
      setScroll(true); // Show header
    } else {
      // Scroll up
      setScroll(false); // Hide header
    }
    oldScrollY = window.scrollY;
  };

  // Run func when scroll event is fired
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${edge && "dark"}`}>
      <Header scroll={scroll} edge={edge} transparent={transparent} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
