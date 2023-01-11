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
import Pill from "../Button/Pill";

interface Props {
  data: WorkType[];
}

const WorkSection = ({ data }: Props) => {
  const [loading, setLoading] = useState(false);

  // Intersection observer
  const { ref: listRef, inView: listVisible } = useInView({
    triggerOnce: true
  });

  // Define list of categories
  const categoryArray = [
    { id: 0, title: "all" },
    { id: 1, title: "web" },
    { id: 2, title: "design" }
  ];

  // Keep track button states
  const [categoryState, setCategoryState] = useState({
    activeCategory: categoryArray[0],
    allCategory: categoryArray
  });

  // Toggle & update category's state
  const handleClick = (index: number) => {
    // If already selected, do nothing
    if (categoryState.allCategory[index] === categoryState.activeCategory) {
      return;
    }
    setCategoryState({
      ...categoryState,
      activeCategory: categoryState.allCategory[index]
    });
  };

  // Check if category is active & return boolean
  const handleActive = (index: number) => {
    if (categoryState.allCategory[index] === categoryState.activeCategory) {
      return true;
    } else {
      return false;
    }
  };

  // Loading animation handler
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [categoryState]);

  return (
    <>
      <HeaderMeta
        title="Work - Johnny Chai"
        description="Here's where I write to reflect and learn."
      />
      <section className="mb-20 md:mb-40">
        <div className="mx-auto max-w-screen-xl px-8">
          <div
            ref={listRef}
            className={`mb-20 border-b ${
              listVisible && "animate-[content_1s_ease-in-out]"
            }`}
          >
            <div className="flex flex-col space-y-4 pb-8 text-lg font-medium leading-relaxed text-gray-400 underline-offset-8 md:flex-row md:space-y-0 md:space-x-8">
              {categoryArray.map((item, index) => (
                <Pill
                  title={item.title}
                  key={index}
                  active={handleActive(index)}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
          <div
            className={`grid grid-cols-1 gap-20 opacity-100 md:grid-cols-2 md:gap-24 ${
              loading &&
              "animate-slowElastic transition duration-150 ease-in-out"
            }`}
          >
            {data
              .sort((asc, desc) => (asc.date > desc.date ? -1 : 1)) // Sort by date
              .filter(
                (cat) =>
                  cat.category === categoryState.activeCategory?.title ||
                  categoryState.activeCategory?.title === "all"
              ) // If category matched, return filtered data. Otherwise, return all unfiltered data anyway (truthy - at least one must be true). If can't find cat.category === "all", then it will return all unfiltered data.
              .map((item, index) => (
                <Link
                  href={"work/" + item.slug}
                  key={index}
                  className="group mb-auto space-y-8"
                >
                  <div className="clip-inactive group-hover:clip-active group-hover:grayscale">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={1280}
                      height={1600}
                      sizes="(min-width: 640px) 600px, (min-width: 768px) 800px, (min-width: 1280px) 1200px"
                    />
                  </div>
                  <div className="space-y-3 transition-all duration-300 ease-in group-hover:animate-elastic">
                    <h3 className="text-xl font-semibold group-hover:underline md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl">{item.description}</p>
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
