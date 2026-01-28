import Head from "../components/Head";
import HeaderBanner from "../components/HeaderBanner";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SchemaMarkup from "../components/SchemaMarkup";

const Layout = ({ children, locale, locales }) => (
  <div className="bg-white">
    <Head />
    <SchemaMarkup />
    <HeaderBanner locale={locale} locales={locales} />
    <Navigation locale={locale} locales={locales} />
    {children}
    <Footer locale={locale} locales={locales} />
    <WhatsAppButton />
  </div>
);
export default Layout;
