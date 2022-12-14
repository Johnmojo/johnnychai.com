/**
 * Override - web font insertion
 * @date 6th September 2022
 */

import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-transparent transition-all duration-1000">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
