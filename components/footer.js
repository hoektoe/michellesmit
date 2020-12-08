import Image from 'next/image';

import Container from './container';

export default function Footer() {
    return (
        <footer className="relative pt-4 pb-6 bg-accent-700">
            <div className="pt-8 border-t-4 bg-accent-700 border-brand">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 lg:w-2/12">
                            <Image
                                alt="Michelle Smit Logo Artum Lilly"
                                src="/images/logo-block.svg"
                                className="object cover footer-logo"
                                width={150}
                                height={150}
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <h4 className="text-3xl font-semibold uppercase text-brand">
                                Michelle Smit
                        </h4>
                            <h5 className="mt-0 mb-6 text-lg text-white">
                                Psychologist - Online Therapy
                        </h5>
                            <p className="text-gray-200">
                                HPCSA registered counselling psychologist based in Cape Town. Online
                                based therapy. Available after hours and weekends.
                        </p>
                            <div className="mt-2">
                                <ul className="text-sm text-gray-700 list-unstyled">
                                    <li>
                                        <a
                                            href="mailto:therapy@michellesmit.com"
                                            className="text-brand">
                                            therapy@michellesmit.com
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden w-full px-4 lg:w-4/12 lg:flex">
                            <div className="flex flex-wrap mb-6 items-top">
                                <div className="w-full px-4 ml-auto lg:w-12/12">
                                    <span className="block mb-2 text-sm font-semibold uppercase text-brand">
                                        Sitemap
                                </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="#about"
                                                className="block pb-2 text-sm font-semibold text-gray-300 hover:text-gray-900">
                                                About
                                        </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#therapy"
                                                className="block pb-2 text-sm font-semibold text-gray-300 hover:text-gray-900">
                                                Therapy Services
                                        </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#publication"
                                                className="block pb-2 text-sm font-semibold text-gray-300 hover:text-gray-900">
                                                Publication
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-brand" />
                    <div className="flex flex-wrap items-center justify-center md:justify-between">
                        <div className="w-full px-4 mx-auto text-center md:w-4/12">
                            <div className="py-1 text-sm font-semibold text-gray-300">
                                Copyright © 2020 Michelle Smit.
                        </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
