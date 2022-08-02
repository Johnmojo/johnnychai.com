import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Template = (props) => {
  const [theme, setTheme] = useState(true);

  const { children, ...customMeta } = props;

  const meta = {
    title: "Johnny Chai | Front End Developer",
    description: "Johnny Chai's personal website",
    type: "website",
    ...customMeta
  };

  const [scroll, setScroll] = useState(false);
  const [edge, setEdge] = useState(true);

  let oldScrollY: number = 0;

  const handleScroll = () => {
    // Detect if scrolling reached top edge
    if (window.scrollY === 0) {
      setEdge(true);
      setScroll(false);
    } else {
      setEdge(false);
      setScroll(true);
    }

    // Detect which scrolling direction
    if (window.scrollY > oldScrollY) {
      setScroll(true);
    } else {
      setScroll(false);
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
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Johnny Chai" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <>
        <Header scroll={scroll} edge={edge} />
        <main>{children}</main>
        <Footer />
      </>
    </>
  );
};

export default Template;
