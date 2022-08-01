import Head from "next/head";
import Footer from "./Footer";

const Master = (props) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: "Johnny Chai |",
    description: "Johnny Chai's personal website",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="master">
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Johnny Chai" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Master;
