/* This example requires Tailwind CSS v2.0+ */
import { AtSymbolIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderBanner({ locale }) {
  const { asPath } = useRouter();
  const textLanguageSwitch =
    locale === "en" ? "Sien in Afrikaans" : "Browse in English";

  const switchLocale = locale === "en" ? "af" : "en";

  return (
    <div className="text-xs bg-accent-600">
      <div className="px-3 py-1 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-0">
            <span className="flex p-1 rounded-lg bg-brand-800">
              <AtSymbolIcon className="w-3 h-3 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">therapy@michellesmit.co.za</span>
              <span className="hidden md:inline">
                therapy@michellesmit.co.za
              </span>
            </p>
          </div>
          <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            {asPath}
            <Link href={asPath} locale={switchLocale}>
              <a className="flex items-center justify-center px-4 py-1 text-xs font-medium bg-white border border-transparent rounded-md shadow-sm text-accent-600 hover:bg-accent-50">
                {textLanguageSwitch}
              </a>
            </Link>
          </div>
          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="flex p-2 -mr-1 rounded-md hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
