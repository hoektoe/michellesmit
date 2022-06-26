import "../styles/tailwind.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-PFTRW6W" });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
