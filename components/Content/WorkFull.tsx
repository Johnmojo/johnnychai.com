import { useState, useEffect } from "react";
import { WorkType } from "../../lib/types";
import Link from "next/link";
import Image from "next/future/image";

interface Props {
  data: WorkType[];
}

const WorkFull = ({ data }: Props) => {
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

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
    <section className="mb-40">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="my-20 border-b">
          <ul className="flex space-x-8 pb-8 text-lg font-medium text-gray-400 underline-offset-8">
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
            <li>
              <button
                value="app"
                onClick={setClick}
                className={` ${category === "app" && "text-black"} `}
              >
                Mobile App
              </button>
            </li>
          </ul>
        </div>
        <div
          className={`grid grid-cols-1 gap-24 opacity-100 md:grid-cols-2 ${
            loading && "animate-slowElastic transition duration-150 ease-in-out"
          }`}
        >
          {data
            .sort((asc, desc) => (asc.date > desc.date ? -1 : 1)) // Sort by date
            .filter((cat) => cat.category === category || category === "all") // If category matched, return filtered data. Otherwise, return all unfiltered data anyway (truthy - at least one must be true). If can't find cat.category === "all", then it will return all unfiltered data.
            .map((work, index) => (
              <Link href={"work/" + work.slug} key={index}>
                <a key={index} className="group mb-auto space-y-8">
                  <div className="clip-inactive group-hover:clip-active group-hover:grayscale">
                    <Image
                      src={work.thumbnail}
                      alt={work.title}
                      width={1280}
                      height={1600}
                    />
                  </div>
                  <div className="space-y-3 transition-all duration-300 ease-in group-hover:animate-elastic">
                    <h3 className="text-2xl font-medium group-hover:underline">
                      {work.title}
                    </h3>
                    <p className="text-lg text-gray-600">{work.description}</p>
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFull;
