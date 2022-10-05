/**
 * Override - web font insertion
 * @date 6th September 2022
 */

import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  // Store random colors
  const colorBG = [
    "#d1e4de",
    "#d1dee4",
    "#d2d0e5",
    "#e6d1d4",
    "#e5dbd2",
    "#eeeade",
    "#ffffff"
  ];

  // Generate a random number
  const random = Math.floor(Math.random() * colorBG.length);

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ backgroundColor: `${colorBG[random]}` }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
