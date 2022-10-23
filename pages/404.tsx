/**
 * Error page
 * @date 6th September 2022
 */

import { HeaderMeta, Button, Hero } from "@components/index";

const Error = () => {
  return (
    <>
      <HeaderMeta
        title="404 - Johnny Chai"
        description="Front End Web Developer based in Malaysia who is who is passionate about coding and solving problems through code and design."
      />
      <Hero title="404" intro="Page not found" status="(ノಠ益ಠ)ノ彡┻━┻" />
      <section className="max-w-screen-xl px-8 mx-auto mb-40">
        <Button title="Return Home" target="/" />
      </section>
    </>
  );
};

export default Error;
