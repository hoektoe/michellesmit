/* This example requires Tailwind CSS v2.0+ */
import { AtSymbolIcon, XIcon } from "@heroicons/react/outline";

export default function HeaderBanner({ locale }) {

  return (
    <div className="text-xs bg-accent-600">
      <div className="px-3 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-100">
            <span className="flex p-1 rounded-lg bg-brand-800">
              <AtSymbolIcon className="w-3 h-3 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">therapy@michellesmit.com</span>
              <span className="hidden md:inline">therapy@michellesmit.com</span>
            </p>
          </div>
          <div className="flex-shrink-0 ml-8 order-3 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a href="https://www.google.com/maps/place/33%C2%B049'26.7%22S+18%C2%B056'17.9%22E/@-33.82409,18.9361023,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa56137bb04d3db77!8m2!3d-33.82409!4d18.938291
" className="text-white">
              Psychologist based in Paarl
            </a>
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
