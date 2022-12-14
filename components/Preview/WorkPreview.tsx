/**
 * Work post preview only - display up to 4 at a time
 * @date 6th September 2022
 */

import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { WorkType } from "@lib/types";

type Props = {
  data: WorkType[];
  title: string;
  limit?: number; // Limit how many items to show
};

const WorkPreview = ({ data, title, limit }: Props) => {
  const { ref: mainRef, inView: mainVisible } = useInView({
    triggerOnce: true
  });

  return (
    <section ref={mainRef} className="max-w-screen-xl mx-auto">
      <div
        className={`my-20 px-8 md:my-40 ${
          mainVisible && "animate-[content_1s_ease-in-out]"
        }`}
      >
        <div className="pb-20 md:pb-40">
          <div className="w-full md:w-7/12">
            <h1 className="pb-12 text-3xl font-medium leading-snug md:w-3/4 md:text-5xl md:leading-snug">
              Work
            </h1>
            <h2 className="text-2xl leading-snug md:text-3xl md:leading-snug">
              {title}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-24">
          {data
            .sort((a, b) => (a.date > b.date ? -1 : 1)) // Sort by date
            .slice(0, limit) // Sort by limit
            .map((work, index) => (
              <Link
                href={"work/" + work.slug}
                key={index}
                className="mt-10 mb-auto space-y-8 group md:even:mt-16"
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
                  <p className="text-lg md:test-xl">{work.description}</p>
                </div>
              </Link>
            ))}
        </div>
        <div className="flex justify-center pt-20 pb-8 md:pb-0 md:pt-40">
          <Link
            href="/work"
            className="text-xl font-semibold underline underline-offset-8 hover:no-underline md:text-2xl"
          >
            See more work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;
