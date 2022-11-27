/**
 * Work post full version - display all posts
 * @date 6th September 2022
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { WorkType } from "@lib/types";
import { HeaderMeta } from "@components/index";
import { useInView } from "react-intersection-observer";

interface Props {
  data: WorkType[];
}

const WorkSection = ({ data }: Props) => {
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // Intersection observer
  const { ref: listRef, inView: listVisible } = useInView({
    triggerOnce: true
  });

  // Onclick handler for the category buttons
  const setClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      setCategory(e.currentTarget.value);
    }
  };

  // Loading animation handler
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [category]);

  return (
    <>
      <HeaderMeta
        title="Work - Johnny Chai"
        description="Here's where I write to reflect and learn."
      />
      <section className="mb-20 md:mb-40">
        <div className="max-w-screen-xl px-8 mx-auto">
          <div
            ref={listRef}
            className={`mb-20 border-b ${
              listVisible && "animate-[content_1s_ease-in-out]"
            }`}
          >
            <ul className="flex flex-col pb-8 space-y-4 text-lg font-medium leading-relaxed text-gray-400 underline-offset-8 md:flex-row md:space-y-0 md:space-x-8">
              <li>
                <button
                  value="all"
                  onClick={setClick}
                  className={` ${category === "all" && "text-black"} `}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  value="web"
                  onClick={setClick}
                  className={` ${category === "web" && "text-black"} `}
                >
                  Website
                </button>
              </li>
              <li>
                <button
                  value="design"
                  onClick={setClick}
                  className={` ${category === "design" && "text-black"} `}
                >
                  Design
                </button>
              </li>
            </ul>
          </div>
          <div
            className={`grid grid-cols-1 gap-20 opacity-100 md:grid-cols-2 md:gap-24 ${
              loading &&
              "animate-slowElastic transition duration-150 ease-in-out"
            }`}
          >
            {data
              .sort((asc, desc) => (asc.date > desc.date ? -1 : 1)) // Sort by date
              .filter((cat) => cat.category === category || category === "all") // If category matched, return filtered data. Otherwise, return all unfiltered data anyway (truthy - at least one must be true). If can't find cat.category === "all", then it will return all unfiltered data.
              .map((work, index) => (
                <Link
                  href={"work/" + work.slug}
                  key={index}
                  className="mb-auto space-y-8 group"
                >
                  <div className="clip-inactive group-hover:clip-active group-hover:grayscale">
                    <Image
                      src={work.thumbnail}
                      alt={work.title}
                      width={1280}
                      height={1600}
                      sizes="(min-width: 640px) 600px, (min-width: 768px) 800px, (min-width: 1280px) 1200px"
                    />
                  </div>
                  <div className="space-y-3 transition-all duration-300 ease-in group-hover:animate-elastic">
                    <h3 className="text-xl font-semibold group-hover:underline md:text-2xl">
                      {work.title}
                    </h3>
                    <p className="text-lg md:text-xl">{work.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSection;
