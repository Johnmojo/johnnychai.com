import Link from "next/link";
import { WorkType } from "../../lib/types";

type Props = {
  data: WorkType[];
};

const WorkPreview = ({ data }: Props) => {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="py-40">
        <div>
          {data.map((work, index) => (
            <Link href={"work/" + work.slug} key={index}>
              <a>
                <div key={index}>
                  <h3 className="mt-12 mb-3 text-2xl">{work.title}</h3>
                  <p className="text-base text-black">{work.description}</p>
                  <p className="mt-3 text-sm font-medium text-gray-400"></p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;
