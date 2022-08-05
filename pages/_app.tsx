import "../styles/globals.css";

import type { AppProps } from "next/app";
import TemplateLayout from "../components/Layout/TemplateLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TemplateLayout>
      <Component {...pageProps} />
    </TemplateLayout>
  );
}