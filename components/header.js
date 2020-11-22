import Link from 'next/link'
import Image from 'next/image'
import Container from './container'


export default function Header() {
  return (
    <nav className="bg-white">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4"> */}
      <Container>
        <div className="flex justify-between h-24">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">

                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Link href="/">
            <a className="flex-shrink-0 flex items-center">
              <Image className="h-8 w-auto"
                src="/images/logo.svg"
                alt="Michelle Smit Therapy logo"
                width={120}
                height={120} />
              <div className="flex flex-col w-full ml-2 sm:ml-4 justify-center">
                <div className="w-full uppercase font-bold text-sm sm:text-xl lg:text-2xl leading-6">Michelle Smit</div>
                <div className="w-full uppercase text-xs sm:text-lg xl:text-base leading-none">
                  psychologist
                  <span className="hidden sm:inline-block"> - online therapy</span>
                </div>
              </div>
            </a>
            </Link>
            <div className="hidden md:ml-6 md:flex">
              <Link href="/about">
                <a className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-green-700 transition duration-150 ease-in-out">
                  Home
                </a>
              </Link>
              <Link href="/therapy-services">
                <a href="#" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-green-300 focus:outline-none focus:text-gray-700 focus:border-green-300 transition duration-150 ease-in-out">
                  Therapy Services
                </a>
              </Link>
              <Link href="/therapy-services">
                <a href="#" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-green-300 focus:outline-none focus:text-gray-700 focus:border-green-300 transition duration-150 ease-in-out">
                  About
                </a>
              </Link>
              <Link href="/therapy-services">
                <a href="#" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-green-300 focus:outline-none focus:text-gray-700 focus:border-green-300 transition duration-150 ease-in-out">
                  Publications
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center -mr-4">
            <div className="flex-shrink-0">
              <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-800 bg-green-200 shadow-sm hover:bg-green-300 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150">
                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>Book</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="hidden md:hidden">
        <div className="pt-2 pb-3">
          <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-green-500 text-base font-medium text-green-700 bg-green-50 focus:outline-none focus:text-green-800 focus:bg-green-100 focus:border-green-700 transition duration-150 ease-in-out sm:pl-5 sm:pr-6">Dashboard</a>
          <a href="#" className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6">Team</a>
          <a href="#" className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6">Projects</a>
          <a href="#" className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6">Calendar</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4 sm:px-6">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-6 text-gray-800">Tom Cook</div>
              <div className="text-sm font-medium leading-5 text-gray-500">tom@example.com</div>
            </div>
          </div>
          <div className="mt-3">
            <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6">Your Profile</a>
            <a href="#" className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6">Settings</a>
            <a href="#" className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out sm:px-6">Sign out</a>
          </div>
        </div>
        </div>
    </nav>
  )
}
