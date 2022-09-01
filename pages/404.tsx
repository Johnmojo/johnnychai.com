import { HeroPage } from "../components/Content/Hero";
import CustomButton from "../components/Common/CustomButton";

const Error = () => {
  return (
    <>
      <HeroPage title="404" intro="Page not found" status="(ノಠ益ಠ)ノ彡┻━┻" />
      <section className="mx-auto mb-40 max-w-screen-xl px-8">
        <CustomButton title="Return Home" target="/" />
      </section>
    </>
  );
};

export default Error;
