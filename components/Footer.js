import Link from "next/link";
import Image from "next/image";

const trans = {
  tagline: {
    en: "Quality - Value - Service",
    af: "Kwaliteit - Value - Diens",
  },
  description: {
    en: "HPCSA registered counselling psychologist based in Cape Town. Online based therapy. Available after hours and weekends.",
    af: "HPCSA-geregistreerde voorligting sielkundige gebaseer in Kaapstad. Aanlyn-gebaseerde terapie. Beskikbaar na-ure en naweke.",
  },
  services: {
    en: "Services",
    af: "Dienste",
  },
  batteries: {
    en: "Batteries",
    af: "Batterye",
  },
  loadshedding: {
    en: "Loadshedding Package",
    af: "Loadshedding Paket",
  },
  counselling: {
    en: "Counselling Psychologist",
    af: "Voorligting Sielkundige",
  },
  copyright: {
    en: "Copyright",
    af: "Kopiereg",
  },
  warranty: {
    en: "Warranty",
    af: "Waarborg",
  },
};

export default function Footer({ locale, locales }) {
  return (
    <footer className="relative pt-4 pb-6 bg-accent-800">
      <div className="pt-8 border-t-4 bg-accent-800 border-brand">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="w-full px-4 text-center md:text-left lg:w-6/12">
              <div className="text-3xl font-semibold uppercase text-brand-500">
                BATTERY PRO MAITLAND
              </div>
              <div className="mt-0 mb-6 text-lg text-white">
                {trans.tagline[locale]}
              </div>

              {/* <p className="text-gray-200">{trans.description[locale]}</p> */}
              <p className="text-gray-200">
                Email:{"  "}
                <a
                  href="mailto:maitland@batterypro.co.za"
                  className="text-brand-500"
                >
                  maitland@batterypro.co.za
                </a>
                <br />
                Cell:{"  "}
                <a href="tel:+27826228400" className="text-brand-500">
                  +27 82 622 8400
                </a>
                <br />
                <br />
                Mon - Fri: 08h00 - 17h00
                <br />
                Sat: 08h00 - 13h00
                <br />
                Closed Sundays and public holidays
              </p>
            </div>
            <div className="hidden w-full px-4 lg:w-4/12 lg:flex">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-12/12">
                  <span className="block mb-2 text-sm uppercase text-brand-500">
                    Sitemap
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/services">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          {trans.services[locale]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/batteries">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          {trans.batteries[locale]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/loadshedding">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          {trans.loadshedding[locale]}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/warranty">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          {trans.warranty[locale]}
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/rates-and-insurance">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          Sien in Afrikaans
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-brand" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm text-gray-300">
                {trans.copyright[locale]} © 2021 Battery Pro Maitland
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
