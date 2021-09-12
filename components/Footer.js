import Link from "next/link";
import Image from "next/image";

const trans = {
  tagline: {
    en: "Psychologist - Online Therapy - Face to Face Therapy",
    af: "Voorligting Sielkundige - Aanlyn Terapie - Terapie in persoon",
  },
  qualifications: {
    en: "M. Psych, Hons Psych",
    af: "M. Sielk., Hons. Sielk.",
  },
  description: {
    en: "HPCSA registered counselling psychologist based in Cape Town. Online based therapy. Available after hours and weekends.",
    af: "HPCSA-geregistreerde voorligting sielkundige gebaseer in Kaapstad. Aanlyn-gebaseerde terapie. Beskikbaar na-ure en naweke.",
  },
  about: {
    en: "About",
    af: "Meer oor my",
  },
  therapy: {
    en: "Therapy Services",
    af: "Terapiedienste",
  },
  rates: {
    en: "Rates & Insurance",
    af: "Tariewe & Medies",
  },
  counselling: {
    en: "Counselling Psychologist",
    af: "Voorligting Sielkundige",
  },
  copyright: {
    en: "Copyright",
    af: "Kopiereg",
  },
};

export default function Footer({ locale, locales }) {
  return (
    <footer className="relative pt-4 pb-6 bg-white">
      <div className="pt-8 bg-white border-t-4 border-brand">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="flex justify-center w-full px-4 pb-6 md:pb-0 md:justify-start lg:w-2/12">
              <div>
                <Image
                  alt="Dr Elna Dürr Counselling Logo Artum Lilly"
                  src="https://a.storyblok.com/f/125511/300x207/bdc43b6882/logomakr-45wp0i.png"
                  className=""
                  width={200}
                  height={150}
                />
              </div>
            </div>
            <div className="w-full px-4 text-center md:text-left lg:w-6/12">
              <div className="text-3xl font-semibold uppercase text-brand-500">
                Dr Elna Dürr Counselling
              </div>
              <div className="mt-0 mb-6 text-gray-400">
                M. Psych, Hons Psych
              </div>
              <p className="text-gray-400">
                HPCSA registered counselling psychologist based in Cape Town.
                Online based therapy. Available after hours and weekends.
              </p>
              <div className="mt-2">
                <ul className="text-sm text-gray-700 list-unstyled">
                  <li>
                    <a
                      href="mailto:therapy@elnadurr.co.za"
                      className="text-brand-500"
                    >
                      therapy@elnadurr.co.za
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden w-full px-4 lg:w-4/12 lg:flex">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-12/12">
                  <span className="block mb-2 text-sm text-gray-500 uppercase">
                    Sitemap
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          {trans.about[locale]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/therapy-services">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          {trans.therapy[locale]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/rates-and-insurance">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          {trans.rates[locale]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/rates-and-insurance">
                        <a className="block pb-2 text-sm text-gray-400 hover:text-brand-400">
                          Sien in Afrikaans
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
                Copyright © 2021 Dr Elna Dürr Counselling - Counselling
                Psychologist
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://nappycare.co.za/" className="hidden">
        nappycare.co.za
      </a>
    </footer>
  );
}
