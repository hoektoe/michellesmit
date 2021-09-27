import "../styles/tailwind.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-N2899P9" });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
