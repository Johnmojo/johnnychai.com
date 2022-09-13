/**
 * Slideshow component for homepage
 * Feed array of image links to data prop
 * e.g.
  const slideshowsData = [
    {
      image: "/static/images/slideshows/slideshow-1.png"
    },
    {
      image: "/static/images/slideshows/slideshow-2.png"
    },
    {
      image: "/static/images/slideshows/slideshow-3.png"
    }
  ];
  * After that, use <Slideshow data={slideshowsData} />
 */

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
    }, 4000);
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
            priority
          />
        </div>
      ))}
    </section>
  );
};

export default Slideshow;
