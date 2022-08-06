import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TemplateLayout = ({ children }: Props) => {
  const [scroll, setScroll] = useState(false);
  const [edge, setEdge] = useState(true);
  const [transparent, setTransparent] = useState(true);

  let oldScrollY = 0;

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
      <Header scroll={scroll} transparent={transparent} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default TemplateLayout;
