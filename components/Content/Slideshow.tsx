import { useEffect, useState } from "react";
import Image from "next/image";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slideshowsArray = [
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

  useEffect(() => {
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
      {slideshowsArray.map((slideshow, index) => (
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
