/**
 * About page
 * @date 6th September 2022
 */

import { Hero } from "@components/index";
import { HeaderMeta } from "@components/index";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Intersection observer
  const { ref: introRef, inView: introVisible } = useInView({
    triggerOnce: true
  });
  const { ref: summaryRef, inView: summaryVisible } = useInView({
    triggerOnce: true
  });
  const { ref: experienceRef, inView: experienceVisible } = useInView({
    triggerOnce: true
  });
  const { ref: educationRef, inView: educationVisible } = useInView({
    triggerOnce: true
  });
  const { ref: skillsRef, inView: skillsVisible } = useInView({
    triggerOnce: true
  });
  const { ref: certificateRef, inView: certificateVisible } = useInView({
    triggerOnce: true
  });

  return (
    <>
      <HeaderMeta
        title="About - Johnny Chai"
        description="Hi! I studied at Swinburne University Sarawak, graduated with a multimedia design degree, and previously worked as a Multimedia Designer."
      />
      <Hero title="About" intro="Some story about myself." />
      <section className="mx-auto max-w-screen-xl px-8">
        <div className="mb-20 divide-y divide-solid md:mb-40">
          <div
            ref={introRef}
            className={`flex gap-10 pb-20 md:pb-24 ${
              introVisible && "animate-[content_1s_ease-in-out]"
            }`}
          >
            <div className="w-full space-y-4 md:w-3/4">
              <h3 className="text-3xl leading-relaxed md:text-5xl md:leading-snug">
                Hi, I&apos;m Johnny. I studied at Swinburne University Sarawak,
                graduated with a multimedia design degree, and recently worked
                as a Front End Developer.
              </h3>
            </div>
          </div>
          <div
            ref={summaryRef}
            className={`gap-10 space-y-4 py-10 text-lg md:py-24 ${
              summaryVisible && "animate-[content_1s_ease-in-out]"
            }`}
          >
            <h1 className="w-full py-12 text-xl font-semibold underline md:w-1/3 md:no-underline">
              Summary
            </h1>
            <div className="space-y-8 py-12">
              <p>
                As someone with a non-traditional background, I approach
                problems like a designer with knowledge from my previous field.
                I like to see myself as a bridge between designers and
                developers. Someone who understands both sides&apos; language
                and translates practicality and constraint.
              </p>
              <p>
                Plus, I&apos;m a fast learner who is always curious about new
                technology and trends. I enjoy learning new things every day in
                the fast-changing industry. Outside of work, I always have an
                interest in topics like VR games, sci-fi, space, and futurology
                – something that I enjoyed.
              </p>
            </div>
          </div>
          <div
            ref={experienceRef}
            className={`flex flex-col py-10 md:flex-row md:py-24 ${
              experienceVisible && "animate-[content_1s_ease-in-out]"
            }`}
          >
            <div className="w-full py-12 md:w-1/3">
              <h1 className="text-xl font-semibold underline md:no-underline">
                Experience
              </h1>
            </div>
            <div className="w-full text-lg md:w-2/3 md:divide-y md:divide-solid">
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full space-y-1 md:w-2/5">
                  <p className="font-semibold">UXAgents</p>
                  <p>Front End Developer - Contract</p>
                  <p className="text-base text-gray-600">Sep 2022 - Present</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>
                    Responsible for the front-end web development, and
                    implementation of client-side logic for existing startup
                    clients like Ouch! Insurance & Swipey.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full space-y-1 md:w-2/5">
                  <p className="font-semibold">Freelance</p>
                  <p>Freelance Developer</p>
                  <p className="text-base text-gray-600">Sep 2021 - May 2022</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>
                    Developed and launched client&apos;s websites with WordPress
                    CMS, SCSS & WooCommerce. Produced several motion graphics
                    for an NGO.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full space-y-1 md:w-2/5">
                  <p className="font-semibold">MADE it Media</p>
                  <p>Multimedia Designer - Full time</p>
                  <p className="text-base text-gray-600">Oct 2020 - Aug 2021</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>
                    Creation of digital marketing materials such as graphics for
                    properties, advertisements, F&amp;B, and other format
                    mediums. Handled social media accounts & client website
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={educationRef}
            className={`flex flex-col py-10 md:flex-row md:py-24 ${
              educationVisible && "animate-[content_1s_ease-in-out]"
            }`}
          >
            <div className="w-full py-12 md:w-1/3">
              <h1 className="text-xl font-semibold underline md:no-underline">
                Education
              </h1>
            </div>
            {/* <div className="w-full py-12 space-y-4 text-lg md:w-2/3"> */}
            <div className="w-full text-lg md:w-2/3 md:divide-y md:divide-solid">
              <div className="space-y-1 py-12">
                <p className="font-semibold">General Assembly Malaysia</p>
                <p>
                  User Experience Design Bootcamp - Fully funded upskilling
                  programme by Khazanah Nasional (MySTEP)
                </p>
                <p className="text-base text-gray-600">Aug 2022 - Sep 2022</p>
              </div>
              <div className="space-y-1 py-12">
                <p className="font-semibold">
                  Swinburne University of Technology Sarawak
                </p>
                <p>
                  Bachelor of Design (Multimedia Design). Minor in 3D Modeling
                  and Animation.
                </p>
                <p className="text-base text-gray-600">Mar 2017 - Dec 2019</p>
              </div>
            </div>
          </div>
          <div
            ref={skillsRef}
            className={`mb:py-24 flex flex-col py-10 md:flex-row ${
              skillsVisible && "animate-[content_1s_ease-in-out]"
            }`}
          >
            <div className="w-full py-12 md:w-1/3">
              <h1 className="text-xl font-semibold underline md:no-underline">
                Skills
              </h1>
            </div>
            <div className="w-full text-lg md:w-2/3 md:divide-y md:divide-solid">
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full md:w-2/5">
                  <p className="font-semibold">Languages &amp; techs</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>HTML &amp; SCSS, Javascript, Typescript</p>
                </div>
              </div>
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full md:w-2/5">
                  <p className="font-semibold">Framework / Library / CMS</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>React.js, Express.js, Next.js, Bootstrap, WordPress</p>
                </div>
              </div>
              <div className="flex flex-col gap-8 py-12 text-lg md:flex-row">
                <div className="w-full md:w-2/5">
                  <p className="font-semibold">Tools</p>
                </div>
                <div className="w-full md:w-3/5">
                  <p>
                    Adobe Creative Cloud, Autodesk Maya, Blender, Unity, Figma,
                    Git
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={certificateRef}
            className={`flex flex-col py-10 md:flex-row md:py-24 ${
              certificateVisible && "animate-[content_1s_ease-in-out]"
            }`}
          >
            <div className="w-full py-12 md:w-1/3">
              <h1 className="text-xl font-semibold underline md:no-underline">
                Certificate
              </h1>
            </div>
            <div className="w-full text-lg md:w-2/3 md:divide-y md:divide-solid">
              <div className="space-y-1 py-12">
                <p className="font-semibold">User Experience Design Bootcamp</p>
                <p className="text-gray-600">
                  General Assembly Malaysia - Issued Dec 2022 | {""}
                  <Link
                    href="https://drive.google.com/file/d/1s6st2uUauI3MsrD4sqxFEzUeXGemzQx2"
                    className="underline"
                    target="_blank"
                  >
                    Certificate of Completion
                  </Link>
                </p>
              </div>
              <div className="space-y-1 py-12">
                <p className="font-semibold">
                  Foundations of User Experience (UX) Design
                </p>
                <p className="text-gray-600">
                  Coursera | Google - Issued Oct 2021 | {""}
                  <Link
                    href="https://www.coursera.org/account/accomplishments/verify/AAM77APQBGTX"
                    className="underline"
                    target="_blank"
                  >
                    Credential ID AAM77APQBGTX
                  </Link>
                </p>
              </div>
              <div className="space-y-1 py-12">
                <p className="font-semibold">Technical Support Fundamentals</p>
                <p className="text-gray-600">
                  Coursera | Google - Issued Jan 2022 | {""}
                  <Link
                    href="https://www.coursera.org/account/accomplishments/verify/8UJJGHNZFP39"
                    className="underline"
                    target="_blank"
                  >
                    Credential ID 8UJJGHNZFP39
                  </Link>
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
