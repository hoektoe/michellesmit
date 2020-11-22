
import Image from 'next/image'

import Container from './container'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 pt-8 pb-6">
      <Container>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/12 px-4">
            <Image 
              alt="Michelle Smit Logo Artum Lilly" 
              src="/images/logo.svg" 
              className="object cover footer-logo"
              width={150}
              height={150}
              loading="lazy"
              />
          </div> 
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl text-green-200 font-semibold uppercase">Michelle Smit</h4>
            <h5 className="text-lg text-white mt-0 mb-6">Psychologist - Online Therapy</h5>
            <p className="text-gray-200">
              HPCSA registered counselling psychologist based in Cape Town. Online based therapy. Available after hours and weekends.
            </p>
            <div className="mt-2">
              <ul className="list-unstyled text-sm text-gray-700">
                <li><a href="mailto:therapy@michellesmit.com" className="text-green-200">therapy@michellesmit.com</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4 hidden lg:flex">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-6/12 px-4 ml-auto">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">Sitemap</span>
                <ul className="list-unstyled">
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm">About</a>
                  </li>
                  <li>
                    <a href="#therapy" className="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm">Therapy Services</a>
                  </li>
                  <li>
                    <a href="#publication" className="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm">Publication</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
        <hr className="my-6 border-gray-400"/>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-300 font-semibold py-1">
              Copyright © 2020 Michelle Smit.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
