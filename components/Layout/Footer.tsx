import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black pt-28 pb-20">
      <div className="mx-auto max-w-screen-xl">
        <section className="my-12 text-white">
          <h1 className="text-5xl leading-snug">
            Say hi at <br />
            <a href="mailto:hello@johnnychai.com" className="underline">
              hello@johnnychai.com
            </a>
            <br />
            or stay in touch
            <br />
          </h1>
        </section>
        <section className="mb-36 mt-12 flex text-base text-white">
          <ul className="flex">
            <li className="mr-6">
              <a href="https://www.linkedin.com/in/johchai">
                <Image
                  alt="Logo"
                  src="/../../../static/icons/linkedin.svg"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li className="mr-6">
              <a href="https://www.github.com/johnmojo">
                <Image
                  alt="Logo"
                  src="/../../../static/icons/github.svg"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li className="mr-6">
              <a href="https://www.instagram.com/johnsaaz">
                <Image
                  alt="Logo"
                  src="/../../../static/icons/instagram.svg"
                  width={25}
                  height={25}
                />
              </a>
            </li>
          </ul>
        </section>
        <div className="text-base text-white">
          © 2022 Johnny Chai. Built with NextJS and TailwindCSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
