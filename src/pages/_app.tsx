/**
 * _app.tsx - TemplateLayout wrap component
 * @date 6th September 2022
 */

import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import type { AppProps } from "next/app";
import { Layout } from "@components/index";

const Index = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default Index;
