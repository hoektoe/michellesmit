import "../styles/tailwind.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-PFTRW6W" });
  }, []);
  return <>
    <Script

      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-CL0R5VTP3D`} />

    <Script strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CL0R5VTP3D');
                `}
    </Script><Component {...pageProps} />
  </>;
}

export default MyApp;
