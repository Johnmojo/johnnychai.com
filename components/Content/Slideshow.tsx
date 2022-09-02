import { useEffect, useState } from "react";
import Image from "next/future/image";
import { SlideshowType } from "../../lib/types";

interface Props {
  data: SlideshowType[];
}

const Slideshow = ({ data }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Max 3 slides
    const slideShowInterval = setInterval(() => {
      setSlideIndex(slideIndex + 1);
      if (slideIndex === 2) {
        setSlideIndex(0);
      }
    }, 3000);
    return () => clearInterval(slideShowInterval);
  });

  return (
    <section className="z-10">
      {data.map((slideshow, index) => (
        <div
          className={`mx-auto max-w-screen-xl px-8 ${
            slideIndex === index ? "block" : "hidden"
          }`}
          key={index}
        >
          <Image
            alt="Slideshow"
            src={slideshow.image}
            width={1600}
            height={800}
            quality={100}
            className="animate-fade"
            sizes="(min-width: 640px) 600px, (min-width: 768px) 800px, (min-width: 1280px) 1600px"
            priority
          />
        </div>
      ))}
    </section>
  );
};

export default Slideshow;
