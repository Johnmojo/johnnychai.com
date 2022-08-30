import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t pt-28 pb-20">
      <div className="mx-auto max-w-screen-xl px-8">
        <section className="my-12">
          <h1 className="text-3xl leading-snug md:text-5xl md:leading-snug">
            Say hi at <br />
            <a
              href="mailto:hello@johnnychai.com"
              target="_blank"
              rel="noreferrer"
              className="break-words text-black underline hover:text-blue-700"
            >
              hello@johnnychai.com
            </a>
            <br />
            or stay in touch
            <br />
          </h1>
        </section>
        <section className="mb-36 mt-12 flex text-lg text-black">
          <ul className="flex">
            <li className="mr-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/johchai"
              >
                <Image
                  alt="Logo"
                  src="/../../../static/icons/linkedin.svg"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li className="mr-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/johnmojo"
              >
                <Image
                  alt="Logo"
                  src="/../../../static/icons/github.svg"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li className="mr-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/johnsaaz"
              >
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
        <div className="text-sm text-black">
          © 2022 Johnny Chai. Built with NextJS and TailwindCSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
