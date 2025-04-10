import "../styles/globals.css";
import "../styles/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico.png" type="image/png" />
        <title>ERGSEC - Security Token</title>
        <meta
          name="description"
          content="Join us in promoting renewable energy and invest in the future with ERGSEC tokens."
        />
      </Head>
      <div className="noise" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
