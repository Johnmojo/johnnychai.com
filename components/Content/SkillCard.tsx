import { NextPage } from "next";

interface Props {
  text: String;
}

const SkillCard: NextPage<Props> = ({ text }) => {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="py-40">
        <div className="w-7/12">
          <p className="text-base font-semibold">Featured Work</p>
          <h3 className="mt-4 text-3xl leading-relaxed">{text}</h3>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default SkillCard;
