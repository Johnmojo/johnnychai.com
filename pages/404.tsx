import { HeroPage } from "../components/Content/Hero";
import CustomButton from "../components/Common/CustomButton";
import HeadComponent from "../components/Common/HeadComponent";

const Error = () => {
  return (
    <>
      <HeadComponent
        title="404 - Johnny Chai"
        description="Front End Web Developer based in Malaysia who is who is passionate about coding and solving problems through code and design."
      />
      <HeroPage title="404" intro="Page not found" status="(ノಠ益ಠ)ノ彡┻━┻" />
      <section className="mx-auto mb-40 max-w-screen-xl px-8">
        <CustomButton title="Return Home" target="/" />
      </section>
    </>
  );
};

export default Error;
