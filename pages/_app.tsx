/**
 * _app.tsx - TemplateLayout wrap component
 * @date 6th September 2022
 */

import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import Script from "next/script";

import type { AppProps } from "next/app";
import { AppLayout } from "../components/Layout/Template/App";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C05N0PJ9Z3"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C05N0PJ9Z3');
        `}
      </Script>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
