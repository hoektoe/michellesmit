import Link from "next/link";
import Image from "next/image";

const trans = {
  tagline: {
    en: "Addiction Practitioner",
    af: "Voorligting Sielkundige - Terapie in persoon",
  },

  description: {
    en: "SACSSP registered social worker based in Winelands.",
    af: "HPCSA-geregistreerde voorligting sielkundige gebaseer in Paarl.",
  },
  about: {
    en: "About",
    af: "Meer oor my",
  },
  therapy: {
    en: "Services",
    af: "Terapiedienste",
  },

  copyright: {
    en: "Copyright",
    af: "Kopiereg",
  },
};

export default function Footer({ locale, locales }) {
  return (
    <footer className="relative pt-4 pb-6 bg-accent-900">
      <div className="pt-8 border-t-4 bg-accent-900 border-brand">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="flex justify-center w-full px-4 pb-6 responsive md:pb-0 md:justify-start lg:w-2/12">
              <Image
                alt="Adam Labuschagne Logo Artum Lilly"
                src="https://a.storyblok.com/f/302764/600x400/0f72e58a98/untitled-design-2.png"
                className="object cover"
                width={600}
                height={400}
              />
            </div>
            <div className="w-full px-4 text-center md:text-left lg:w-6/12">
              <div className="text-3xl font-semibold uppercase text-brand-200">
                Adam Labuschagne
              </div>
              <div className="mt-0 text-lg text-white">
                {trans.tagline[locale]}
              </div>

              <p className="text-gray-200">{trans.description[locale]}</p>
              <div className="mt-2">
                <ul className="text-sm text-gray-700 list-unstyled">
                  <li>
                    <a
                      href="mailto:adam@thecounsellorscouch.com"
                      className="text-brand-200"
                    >
                      adam@thecounsellorscouch.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden w-full px-4 lg:w-4/12 lg:flex">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-12/12">
                  <span className="block mb-2 text-sm uppercase text-brand-500">
                    Sitemap
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about">
                        <a className="block pb-2 text-sm text-gray-100 hover:text-brand-400">
                          {trans.about[locale]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/therapy-services">
                        <a className="block pb-2 text-sm text-gray-100 hover:text-brand-400">
                          {trans.therapy[locale]}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-brand" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm text-gray-300">
                {trans.copyright[locale]} © 2024 Adam Labuschagne
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
