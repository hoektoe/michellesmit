/* This example requires Tailwind CSS v2.0+ */
import { AtSymbolIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderBanner({ locale }) {
  const { asPath } = useRouter();

  return (
    <div className="text-xs bg-accent-600">
      <div className="px-3 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-0">
            <span className="flex p-1 rounded-lg bg-accent-400">
              <AtSymbolIcon className="w-3 h-3 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">elnadurr@gmail.com</span>
              <span className="hidden md:inline">elnadurr@gmail.com</span>
            </p>
          </div>
          <div className="flex-shrink-0 order-2 hidden sm:order-3 sm:ml-3">
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
