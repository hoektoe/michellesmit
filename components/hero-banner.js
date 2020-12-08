import Image from 'next/image';
import Link from 'next/link';

import Container from './container';

export default function Header() {
    return (
        <main className="relative bg-gray-50">
            <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-40 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span className="block text-accent">Feel seen, value</span>
                        <span className="block text-brand-600 xl:inline">and heard</span>
                    </h1>
                    <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-accent hover:bg-accent-400 md:py-4 md:text-lg md:px-10">
                                Learn more
                            </a>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <a
                                href="#"
                                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-accent hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <Image
                    className="absolute z-10 object-cover w-full h-full"
                    src="/images/flower.svg"
                    layout="fill"
                    unsized
                />
            </div>
        </main>
    );
}
