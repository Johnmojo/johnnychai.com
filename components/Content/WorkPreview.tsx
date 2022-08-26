import Link from "next/link";
import { WorkType } from "../../lib/types";
import Image from "next/future/image";

type Props = {
  data: WorkType[];
  title: string;
  limit?: number; // Limit how many items to show
};

const WorkPreview = ({ data, title, limit }: Props) => {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="my-40 px-8">
        <div className="pb-40">
          <div className="w-full md:w-7/12">
            <h1 className="pb-12 font-medium text-5xl md:w-3/4">Work</h1>
            <h3 className="text-3xl">{title}</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
          {data
            .sort((a, b) => (a.date > b.date ? -1 : 1)) // Sort by date
            .slice(0, limit) // Sort by limit
            .map((work, index) => (
              <Link href={"work/" + work.slug} key={index}>
                <a key={index} className="group mb-auto space-y-8 even:mt-16">
                  <div className="clip-inactive group-hover:clip-active group-hover:grayscale">
                    <Image
                      src={work.thumbnail}
                      alt={work.title}
                      width={1280}
                      height={1600}
                    />
                  </div>
                  <div className="space-y-3 transition-all duration-300 ease-in group-hover:animate-elastic">
                    <h3 className="font-medium text-2xl group-hover:underline">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{work.description}</p>
                  </div>
                </a>
              </Link>
            ))}
        </div>
        <div className="flex justify-center pt-40">
          <Link href="/work">
            <a className="font-semibold underline underline-offset-8 text-2xl">
              See more work
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;
