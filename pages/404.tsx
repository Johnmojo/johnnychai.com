/**
 * Error page
 * @date 6th September 2022
 */

import { Hero } from "../components/Layout/Template/Page";
import { CustomButton } from "../components/Common/Button";
import { HeaderMeta } from "../components/Layout/System/Header";

const Error = () => {
  return (
    <>
      <HeaderMeta
        title="404 - Johnny Chai"
        description="Front End Web Developer based in Malaysia who is who is passionate about coding and solving problems through code and design."
      />
      <Hero title="404" intro="Page not found" status="(ノಠ益ಠ)ノ彡┻━┻" />
      <section className="mx-auto mb-40 max-w-screen-xl px-8">
        <CustomButton title="Return Home" target="/" />
      </section>
    </>
  );
};

export default Error;
