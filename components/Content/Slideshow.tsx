import { useEffect, useState } from "react";
import Image from "next/image";
import { slideshowType } from "../../lib/types";

interface Props {
  data: slideshowType[];
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
          className={`${slideIndex === index ? "block" : "hidden"}`}
          key={index}
        >
          <Image
            alt="Slideshow"
            src={slideshow.image}
            layout="responsive"
            width={1600}
            height={800}
            quality={100}
            className="animate-fade"
          />
        </div>
      ))}
    </section>
  );
};

export default Slideshow;
