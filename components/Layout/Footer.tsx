const Footer = () => {
  return (
    <footer className="border-t pt-28 pb-20">
      <div className="mx-auto max-w-screen-xl px-8">
        <section className="mt-12 mb-6">
          <h1 className="pb-12 text-3xl font-medium leading-snug md:text-5xl md:leading-snug">
            Say hi at
          </h1>
          <h1 className="inline-block text-xl leading-snug md:text-3xl md:leading-snug">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:hello@johnnychai.com"
              className="group break-words font-medium"
            >
              <div className="flex items-center">
                <div className="group-hover:underline">
                  hello@johnnychai.com
                </div>
                <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    data-darkreader-inline-stroke=""
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          </h1>
        </section>
        <section className="mb-36 mt-6 flex text-lg text-black">
          <ul className="flex flex-col md:flex-row">
            <li className="my-4 mr-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/johchai"
                className="group"
              >
                <div className="flex items-center justify-between">
                  <div className="decoration-2 underline-offset-2 group-hover:underline">
                    LinkedIn
                  </div>
                  <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      data-darkreader-inline-stroke=""
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li className="my-4 mr-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/johnmojo"
                className="group"
              >
                <div className="flex items-center justify-between">
                  <div className="decoration-2 underline-offset-2 group-hover:underline">
                    Github
                  </div>
                  <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      data-darkreader-inline-stroke=""
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li className="my-4 mr-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/johnsaaz"
                className="group"
              >
                <div className="flex items-center justify-between">
                  <div className="decoration-2 underline-offset-2 group-hover:underline">
                    Instagram
                  </div>
                  <div className="mt-auto mb-auto overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      data-darkreader-inline-stroke=""
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <div className="text-sm text-black">
          © 2022 Johnny Chai.⚡Built with NextJS and TailwindCSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
