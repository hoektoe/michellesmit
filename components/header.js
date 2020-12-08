import Image from 'next/image';
import Link from 'next/link';

import Container from './container';

export default function Header() {
    return (
        <nav className="bg-gray-50">
            {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-4"> */}
            <Container>
                <div className="flex justify-between h-24">
                    <div className="flex">
                        <div className="flex items-center mr-2 -ml-2 md:hidden">
                            <button
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                                aria-label="Main menu"
                                aria-expanded="false">
                                <svg
                                    className="block w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>

                                <svg
                                    className="hidden w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Link href="/">
                            <a className="flex items-center flex-shrink-0">
                                <Image
                                    className="w-auto h-auto"
                                    src="/images/logo-block.svg"
                                    alt="Michelle Smit Therapy logo"
                                    width={90}
                                    height={90}
                                />
                                <div className="flex flex-col justify-center w-full ml-2 font-serif font-bold text-accent-600">
                                    <div className="w-full text-sm uppercase sm:text-xl lg:text-2xl">
                                        Michelle Smit
                                    </div>
                                    <div className="w-full -mt-2 text-xs uppercase sm:text-lg xl:text-base">
                                        counselling psychologist
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                            <Link href="/about">
                                <a className="inline-flex items-center px-1 pt-1 text-base font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-b-2 border-transparent focus:outline-none focus:border-accent-700">
                                    Welcome
                                </a>
                            </Link>
                            <Link href="/therapy-services">
                                <a className="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-accent-300 focus:outline-none focus:text-gray-700 focus:border-accent-300">
                                    About
                                </a>
                            </Link>
                            <Link href="/therapy-services">
                                <a className="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-accent-300 focus:outline-none focus:text-gray-700 focus:border-accent-300">
                                    Therapy Services
                                </a>
                            </Link>
                            <Link href="/therapy-services">
                                <a className="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-accent-300 focus:outline-none focus:text-gray-700 focus:border-accent-300">
                                    FAQs
                                </a>
                            </Link>
                    </div>
                    <div className="z-20 flex items-center -mr-4">
                        <div className="flex-shrink-0">
                            <button
                                type="button"
                                className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-accent hover:bg-accent-400 focus:outline-none focus:border-accent-400 focus:shadow-outline-green active:bg-accent-500">
                                <svg
                                    className="w-5 h-5 mr-2 -ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span>Contact</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="hidden md:hidden">
                <div className="pt-2 pb-3">
                    <Link href="/">
                        <a className="block py-2 pl-3 pr-4 text-base font-medium transition duration-150 ease-in-out border-l-4 text-accent-700 border-accent-500 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 sm:pl-5 sm:pr-6">
                            Dashboard
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6">
                            Team
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6">
                            Projects
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 sm:pl-5 sm:pr-6">
                            Calendar
                        </a>
                    </Link>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-4 sm:px-6">
                        <div className="flex-shrink-0">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-6 text-gray-800">
                                Tom Cook
                            </div>
                            <div className="text-sm font-medium leading-5 text-gray-500">
                                tom@example.com
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <a className="block px-4 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6">
                            Your Profile
                        </a>
                        <a className="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6">
                            Settings
                        </a>
                        <a className="block px-4 py-2 mt-1 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 sm:px-6">
                            Sign out
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
