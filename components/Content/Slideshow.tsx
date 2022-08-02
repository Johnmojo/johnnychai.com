import { useState } from "react";
import { NextPage } from "next";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="h-screen bg-black">
      <div></div>
    </section>
  );
};

export default Slideshow;
