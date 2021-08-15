import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const menu = [
  {
    name: {
      en: "Welcome",
      af: "Welkom",
    },
    href: "/",
  },
  {
    name: {
      en: "About",
      af: "Meer oor my",
    },
    href: "/about",
  },
  {
    name: {
      en: "Therapy Services",
      af: "Dienste",
    },
    href: "#therapy-services",
  },
];
export default function Navigation({ locale, locales }) {
  const defaultLocale = locale === "en" ? "/" : `/${locale}/`;

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="flex items-center justify-between py-3 border-b-2 border-gray-100 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/" locale={locale}>
                  <a className="flex items-center">
                    <span className="sr-only">
                      Michelle Smit - Counselling Psychologist
                    </span>
                    <img
                      className="w-auto mr-3 h-14 sm:h-20"
                      src="https://a.storyblok.com/f/101001/x/00dafa5eda/logo-block.svg"
                      alt=""
                    />
                    <div className="font-extrabold text-gray-800 uppercase">
                      <div className="text-xl leading-5 sm:text-2xl">
                        Michelle Smit
                      </div>
                      <div className="text-md sm:text-base">
                        Counselling Psychologist
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                {menu.map((item) => (
                  <Link
                    href={`${item.href}`}
                    locale={locale}
                    key={item.name.en}
                  >
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                      {item.name[locale]}
                    </a>
                  </Link>
                ))}
              </Popover.Group>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 whitespace-nowrap hover:bg-brand-700">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="https://a.storyblok.com/f/101001/x/00dafa5eda/logo-block.svg"
                        alt="Michelle Smit"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {menu.map((item) => (
                        <Link href={item.href} key={item.name.en}>
                          <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name.en}
                            </span>
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <div>
                    <Link href="/contact" locale={locale}>
                      <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700">
                        Contact
                      </a>
                    </Link>
                    <p className="mt-6 text-base font-medium text-center text-gray-500">
                      therapy@michellesmit.com
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
