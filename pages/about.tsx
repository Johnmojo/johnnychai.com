import Hero from "../components/Content/Hero/HeroPage";

const About = () => {
  return (
    <>
      <Hero title="About" intro="Hello there, nice to meet you!" />
      <section className="mx-auto max-w-screen-xl px-8">
        <div className="mb-40 divide-y divide-solid">
          <div className="flex gap-10 pb-24">
            {/* <div className="w-1/6">
              <Image
                src="/static/images/pages/profile.png"
                className="rounded-full"
                width={200}
                height={200}
                alt=""
              />
            </div> */}
            <div className="w-full space-y-4 md:w-3/4">
              <h3 className="text-3xl leading-snug md:text-5xl md:leading-snug">
                Hi, I&apos;m Johnny. I studied at Swinburne University Sarawak,
                graduated with a multimedia design degree, and recently worked
                as a Multimedia Designer.
              </h3>
            </div>
          </div>
          <div className="gap-10 space-y-4 py-24 text-lg">
            <p className="font-semibold">Summary</p>
            <p></p>
            <p>
              As someone with a non-traditional background, I approach problems
              like a designer with knowledge from my previous field. I like to
              see myself as a bridge between designers and developers. Someone
              who understands both sides&apos; language and translates
              practicality and constraint.
            </p>
            <p>
              Plus, I&apos;m a fast learner who is always curious about new
              technology and trends. I enjoy learning new things every day in
              the fast-changing industry. Outside of work, I always have an
              interest in topics like sci-fi, space, and futurology – something
              that I enjoyed.
            </p>
          </div>
          <div className="flex flex-col py-24 md:flex-row">
            <div className="w-1/3 py-12">
              <h1 className="text-lg font-semibold">Experience</h1>
            </div>
            <div className="w-full divide-y divide-solid text-lg md:w-2/3">
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full space-y-1 md:w-2/5">
                  <p className="font-semibold">Freelance</p>
                  <p>Freelance Developer</p>
                  <p className="text-base text-gray-600">Sep 2021 - May 2022</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>
                    Worked with clients to developed custom Wordpress websites
                    and animated short motion graphics.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full space-y-1 md:w-2/5">
                  <p className="font-semibold">MADE it Media</p>
                  <p>Multimedia Designer</p>
                  <p className="text-base text-gray-600">Oct 2020 - Aug 2021</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>
                    Creation of digital marketing materials such as graphics for
                    properties, advertisements, F&amp;B, and other format
                    mediums. Managed social media accounts &amp; websites
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-24 md:flex-row">
            <div className="w-1/3 py-12">
              <h1 className="text-lg font-semibold">Education</h1>
            </div>
            <div className="w-full space-y-4 py-12 text-lg md:w-2/3">
              <div className="space-y-1">
                <p className="font-semibold">
                  Swinburne University of Technology Sarawak
                </p>
                <p>
                  Bachelor of Design (Multimedia Design), Minor in 3D Modelling
                  and Animation
                </p>
                <p className="text-base text-gray-600">Mar 2017 - Dec 2019</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-24 md:flex-row">
            <div className="w-full py-12 md:w-1/3">
              <h1 className="text-lg font-semibold">Skills</h1>
            </div>
            <div className="w-full divide-y divide-solid text-lg md:w-2/3">
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full md:w-2/5">
                  <p className="font-semibold">Languages &amp; techs</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>HTML &amp; SCSS, Javascript, Typescript, PHP</p>
                </div>
              </div>
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full md:w-2/5">
                  <p className="font-semibold">Framework / Library / CMS</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>React.js, Node.js, Next.js, Bootstrap, WordPress</p>
                </div>
              </div>
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full md:w-2/5">
                  <p className="font-semibold">Tools</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>
                    Adobe Creative Cloud, Autodesk Maya, Blender, Unity, Git
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-24 md:flex-row">
            <div className="w-full py-12 md:w-1/3">
              <h1 className="text-lg font-semibold">Certificate</h1>
            </div>
            <div className="w-full divide-y divide-solid text-lg md:w-2/3">
              <div className="space-y-1 py-12">
                <p className="font-semibold">
                  Foundations of User Experience (UX) Design
                </p>
                <p>
                  Coursera | Google - Issued Oct 2021 | {""}
                  <a
                    className="text-gray-600 underline"
                    href="https://www.coursera.org/account/accomplishments/verify/AAM77APQBGTX"
                  >
                    Credential ID AAM77APQBGTX
                  </a>
                </p>
              </div>
              <div className="space-y-1 py-12">
                <p className="font-semibold">Technical Support Fundamentals</p>
                <p>
                  Coursera | Google - Issued Jan 2022 | {""}
                  <a
                    className="text-gray-600 underline"
                    href="https://www.coursera.org/account/accomplishments/verify/8UJJGHNZFP39"
                  >
                    Credential ID 8UJJGHNZFP39
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
