/**
 * _app.tsx - TemplateLayout wrap component
 * @date 6th September 2022
 */

import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import { createContext } from "react";
import type { AppProps } from "next/app";
import { AppLayout } from "../components/Layout/Template/App";

// Context for random color background
export const ColorContext = createContext<string | null>(null);

export default function App({ Component, pageProps }: AppProps) {
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
    <ColorContext.Provider value={colorBG[random]}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ColorContext.Provider>
  );
}
