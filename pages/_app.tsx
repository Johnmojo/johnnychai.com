/**
 * _app.tsx - TemplateLayout wrap component
 * @date 6th September 2022
 */

import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";

import type { AppProps } from "next/app";
import { AppLayout } from "../components/Layout/Template/App";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
