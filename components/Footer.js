import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative pt-4 pb-6 bg-accent-700">
      <div className="pt-8 border-t-4 bg-accent-700 border-brand">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="flex justify-center w-full px-4 pb-6 md:pb-0 md:justify-start lg:w-2/12">
              <Image
                alt="Michelle Smit Logo Artum Lilly"
                src="https://a.storyblok.com/f/101001/x/00dafa5eda/logo-block.svg"
                className="object cover"
                width={150}
                height={150}
              />
            </div>
            <div className="w-full px-4 text-center md:text-left lg:w-6/12">
              <div className="text-3xl font-semibold uppercase text-brand-500">
                Michelle Smit
              </div>
              <div className="mt-0 text-lg text-white">
                Psychologist - Online Therapy - Face to Face Therapy
              </div>
              <div className="mt-0 mb-6 text-brand-300">
                M. Psych, Hons Psych
              </div>
              <p className="text-gray-200">
                HPCSA registered counselling psychologist based in Cape Town.
                Online based therapy. Available after hours and weekends.
              </p>
              <div className="mt-2">
                <ul className="text-sm text-gray-700 list-unstyled">
                  <li>
                    <a
                      href="mailto:karli@kdlanguageservices.co.za"
                      className="text-brand-400"
                    >
                      karli@kdlanguageservices.co.za
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:practicemanager@michellesmit.com"
                      className="text-brand-500"
                    >
                      practicemanager@michellesmit.com
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
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          About
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/therapy-services">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          Therapy Services
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/rates-and-insurance">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
                          Rates and Insurance
                        </a>
                      </Link>
                    </li>
                    <li className="hidden">
                      <Link href="/rates-and-insurance">
                        <a className="block pb-2 text-sm text-gray-300 hover:text-brand-400">
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
                Copyright © 2021 Michelle Smit - Counselling Psychologist
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
