/**
 * _app.tsx - TemplateLayout wrap component
 * @date 6th September 2022
 */

import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import type { AppProps } from "next/app";
import { App } from "../components/Layout/";

const Index = ({ Component, pageProps }: AppProps) => {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
};

export default Index;
