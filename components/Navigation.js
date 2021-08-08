import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const resolveWelcome = {
  en: "Welcome",
  es: "Welkom",
};

const resolveAbout = {
  en: "About",
  es: "Página principal",
};

const resolveTherapy = {
  en: "Therapy Services",
  es: "Página principal",
};

const menu = [
  {
    name: {
      en: "Welcome",
      es: "Welkom",
    },
    href: "/",
  },
  {
    name: {
      en: "About",
      es: "Welkom",
    },
    href: "/about",
  },
  {
    name: {
      en: "Therapy Services",
      es: "",
    },
    href: "/therapy-services",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({ locale, locales }) {
  const defaultLocale = locale === "en" ? "/" : `/${locale}/`;

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="flex items-center justify-between py-3 border-b-2 border-gray-100 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/" className="flex items-center">
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
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                {menu.map((item) => (
                  <a
                    key={item.name.en}
                    href={item.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name.en}
                  </a>
                ))}
              </Popover.Group>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 whitespace-nowrap hover:bg-brand-700"
                >
                  Contact
                </a>
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
              className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="https://a.storyblok.com/f/101001/x/00dafa5eda/logo-block.svg"
                        alt="Workflow"
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
                        <a
                          key={item.name.en}
                          href={item.href}
                          className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name.en}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <div>
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-base font-medium text-center text-gray-500">
                      Existing customer?{" "}
                      <a
                        href="#"
                        className="text-brand-600 hover:text-brand-500"
                      >
                        Sign in
                      </a>
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

// const Navigation = ({ locale, locales }) => {
//   const resolveWelcome = {
//     en: "Welcome",
//     es: "Welkom",
//   };
//   const resolveHome = {
//     en: "Home",
//     es: "Página principal",
//   };

//   const defaultLocale = locale === "en" ? "/" : `/${locale}/`;
//   return (

//     <header>
//     <nav class="relative z-20 bg-white shadow">
//       <div class="max-w-6xl mx-auto">
//         <div class="flex justify-between h-20 md:h-24">
//           <div class="flex ml-4 mr-2">
//             <a href="/" class="flex items-center flex-shrink-0">
//               <img
//                 src="~/assets/images/logo-block.svg"
//                 alt="Michelle Smit Therapy logo"
//                 width="80px"
//                 height="80px"
//               />
//               <div
//                 class="flex flex-col justify-center w-full ml-2 font-bold  text-accent-600"
//               >
//                 <div class="w-full text-sm uppercase sm:text-xl lg:text-2xl">
//                   Michelle Smit
//                 </div>
//                 <div
//                   class="w-full text-xs uppercase  md:-mt-2 sm:text-lg xl:text-base"
//                 >
//                   counselling psychologist
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div class="hidden md:flex">
//             <a
//               href="/"
//               class="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-gray-800 transition duration-150 ease-in-out border-b-2 border-transparent  hover:text-gray-600 hover:border-accent-300 focus:outline-none focus:text-gray-700 focus:border-accent-300"
//             >
//               Welcome
//             </a>
//             <a
//               href="/about"
//               class="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-gray-800 transition duration-150 ease-in-out border-b-2 border-transparent  hover:text-gray-600 hover:border-accent-300 focus:outline-none focus:text-gray-700 focus:border-accent-300"
//             >
//               About
//             </a>
//             <a
//               href="/therapy-services"
//               class="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-gray-800 transition duration-150 ease-in-out border-b-2 border-transparent  hover:text-gray-600 hover:border-accent-300 focus:outline-none focus:text-gray-700 focus:border-accent-300"
//             >
//               Therapy Services
//             </a>
//           </div>
//           <div class="items-center hidden -mr-4 md:flex">
//             <div class="flex-shrink-0">
//               <a
//                 href="/contact"
//                 class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm  bg-accent-400 bg-accent hover:bg-accent-400 focus:outline-none focus:border-accent-400 focus:shadow-outline-green active:bg-accent-500"
//               >
//                 <svg
//                   class="w-5 h-5 mr-2 -ml-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   ></path>
//                 </svg>
//                 <span>Contact</span>
//               </a>
//             </div>
//           </div>
//           <div class="flex items-center ml-2 mr-2 md:hidden">
//             <button
//               @click="isOpen = !isOpen"
//               class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
//               aria-label="Main menu"
//               aria-expanded="false"
//             >
//               <svg
//                 class="block w-6 h-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>

//               <svg
//                 class="hidden w-6 h-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <transition
//         enter-active-class="transition duration-200 ease-out transform"
//         enter-from-class="scale-95 opacity-0"
//         enter-to-class="scale-100 opacity-100"
//         leave-active-class="transition duration-100 ease-in transform"
//         leave-from-class="scale-100 opacity-100"
//         leave-to-class="scale-95 opacity-0"
//       >
//         <div
//           v-show="isOpen"
//           class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform  md:hidden"
//         >
//           <div
//             class="bg-white divide-y-2 rounded-lg shadow-lg  ring-1 ring-black ring-opacity-5 divide-gray-50"
//           >
//             <div class="px-5 pt-5 pb-6">
//               <div class="flex items-center justify-between">
//                 <div>
//                   <a
//                     @click="isOpen = false"
//                     href="/"
//                     class="flex items-center flex-shrink-0"
//                   >
//                     <img
//                       src="~/assets/images/logo-block.svg"
//                       alt="Michelle Smit Therapy logo"
//                       width="60px"
//                       height="60px"
//                     />
//                     <div
//                       class="flex flex-col justify-center w-full ml-2 font-bold  text-accent-600"
//                     >
//                       <div
//                         class="w-full text-sm uppercase sm:text-xl lg:text-2xl"
//                       >
//                         Michelle Smit
//                       </div>
//                       <div
//                         class="w-full text-xs uppercase  md:-mt-2 sm:text-lg xl:text-base"
//                       >
//                         counselling psychologist
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div class="-mr-2">
//                   <button
//                     type="button"
//                     @click="isOpen = !isOpen"
//                     class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
//                   >
//                     <span class="sr-only">Close menu</span>
//                     <svg
//                       class="w-6 h-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <div class="mt-6">
//                 <nav class="grid grid-cols-1 gap-7">
//                   <a
//                     @click="isOpen = false"
//                     href="/about"
//                     class="flex items-center p-3 -m-3 rounded-lg  hover:bg-gray-50"
//                   >
//                     <div class="ml-4 text-base font-medium text-gray-900">
//                       About Me
//                     </div>
//                   </a>
//                   <a
//                     @click="isOpen = false"
//                     href="/therapy-services"
//                     class="flex items-center p-3 -m-3 rounded-lg  hover:bg-gray-50"
//                   >
//                     <div class="ml-4 text-base font-medium text-gray-900">
//                       Therapy Services
//                     </div>
//                   </a>

//                   <a
//                     @click="isOpen = false"
//                     href="/contact"
//                     class="flex items-center p-3 -m-3 rounded-lg  hover:bg-gray-50"
//                   >
//                     <div class="ml-4 text-base font-medium text-gray-900">
//                       Contact
//                     </div>
//                   </a>
//                 </nav>
//               </div>
//             </div>
//             <div class="px-5 py-6">
//               <a
//                 @click="isOpen = false"
//                 href="/contact"
//                 class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm  bg-brand-600 hover:bg-brand-700"
//               >
//                 Free 15 minute consultation
//               </a>
//             </div>
//           </div>
//         </div>
//       </transition>
//     </nav>
//   </header>
//     <header className="w-full bg-white">
//       <nav className="" role="navigation">
//         <div className="container flex flex-wrap items-center p-4 mx-auto md:flex-no-wrap">
//           <div className="mr-4 md:mr-8">
//             <a href="/">
//               <svg width="69" height="66" xmlns="http://www.w3.org/2000/svg">
//                 <g fill="none" fillRule="evenodd">
//                   <path fill="#FFF" d="M-149-98h1440v938H-149z" />
//                   <path
//                     d="M37.555 66c17.765 0 27.051-16.38 30.24-33.415C70.986 15.549 52.892 4.373 35.632.52 18.37-3.332 0 14.876 0 32.585 0 50.293 19.791 66 37.555 66z"
//                     fill="#000"
//                   />
//                   <path
//                     d="M46.366 42.146a5.55 5.55 0 01-1.948 2.043c-.86.557-1.811 1.068-2.898 1.3-1.087.279-2.265.511-3.487.511H22V20h18.207c.905 0 1.675.186 2.4.604a6.27 6.27 0 011.811 1.485 7.074 7.074 0 011.54 4.504c0 1.207-.317 2.368-.905 3.482a5.713 5.713 0 01-2.718 2.507c1.45.418 2.582 1.16 3.442 2.229.815 1.114 1.223 2.553 1.223 4.364 0 1.16-.226 2.136-.68 2.971h.046z"
//                     fill="#FFF"
//                   />
//                 </g>
//               </svg>
//             </a>
//           </div>
//           <div className="text-black">
//             <p className="text-lg">Storyblok</p>
//             <p>NextJS Demo</p>
//           </div>
//           <div className="ml-auto md:hidden">
//             <button
//               className="flex items-center px-3 py-2 border rounded"
//               type="button"
//             >
//               <svg
//                 className="w-3 h-3"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//               </svg>
//             </button>
//           </div>
//           <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
//             <ul className="flex flex-col pt-4 mt-4 -mx-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 md:border-0">
//               <li>
//                 <a
//                   href={`${defaultLocale}`}
//                   className="block px-4 py-1 md:p-2 lg:px-8"
//                 >
//                   {resolveHome[locale]}
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={`${defaultLocale}blog`}
//                   className="block px-4 py-1 md:p-2 lg:px-8"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={`${defaultLocale}about`}
//                   className="block px-4 py-1 md:p-2 lg:px-8"
//                 >
//                   {resolveAbout[locale]}
//                 </a>
//               </li>
//             </ul>
//             <ul className="flex flex-col pt-4 mt-4 -mx-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0"></ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navigation;

// {
//   locales.map(loc => {
//     return(<li key={loc}>
//       <a href={`/${loc}`} className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4
//         ${locale === loc ? "bg-black text-white" : ""}`}>{loc}</a>
//     </li>)
//   })
//   }
