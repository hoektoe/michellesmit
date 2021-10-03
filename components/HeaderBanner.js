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
    <div className="text-xs bg-brand-500">
      <div className="px-3 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center flex-1 w-0">
            <span className="flex p-1 rounded-lg bg-brand-700">
              <AtSymbolIcon className="w-3 h-3 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">maitland@batterypro.co.za</span>
              <span className="hidden md:inline">
                maitland@batterypro.co.za | +27 82 622 8400
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
