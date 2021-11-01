import Head from "../components/Head";
// import HeaderBanner from "../components/HeaderBanner";
// import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";

const Layout = ({ children, locale, locales }) => (
  <div className="bg-red-600">
    <Head />
    {/* <HeaderBanner locale={locale} locales={locales} /> */}
    {/* <Navigation locale={locale} locales={locales} /> */}
    {children}
    {/* <Footer locale={locale} locales={locales} /> */}
  </div>
);
export default Layout;
