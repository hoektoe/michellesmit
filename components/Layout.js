import Head from "../components/Head";
import HeaderBanner from "../components/HeaderBanner";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, locale, locales }) => (
  <div className="bg-white">
    <Head />
    <HeaderBanner locale={locale} locales={locales} />
    <Navigation locale={locale} locales={locales} />
    {children}
    <Footer />
  </div>
);
export default Layout;
