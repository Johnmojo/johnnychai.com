import "../styles/globals.css";
import type { AppProps } from "next/app";
import Template from "../components/Layout/Template";

function App({ Component, pageProps }: AppProps) {
  return (
    <Template pageClass={Component.pageClass} title="Johnny Chai | Dev">
      <Component {...pageProps} />
    </Template>
  );
}

export default App;
