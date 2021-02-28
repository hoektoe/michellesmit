<template>
  <footer class="relative pt-4 pb-6 bg-rose-50">
    <div class="pt-8 text-gray-500 border-t-4 border-rose-300 bg-rose-50">
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-wrap">
          <div
            class="flex justify-center w-full px-4 pb-6 md:pb-0 md:justify-start lg:w-2/12"
          >
            <img
              alt="Diaan Bisogno Logo Artum Lilly"
              src="~/assets/images/logo-gray.svg"
              class="object cover footer-logo"
              width="150px"
              height="150px"
            />
          </div>
          <div class="w-full px-4 text-center md:text-left lg:w-6/12">
            <div class="text-3xl font-semibold text-gray-700 uppercase">
              Diaan Bisogno
            </div>
            <div class="mt-0 mb-6 text-lg text-gray-700">
              Psychologist - Online Therapy - Face to Face Therapy
            </div>
            <p class="text-gray-700">
              HPCSA registered clinical psychologist based in Cape Town. Online
              based therapy. Available after hours and weekends.
            </p>
            <div class="mt-2">
              <ul class="text-md list-unstyled">
                <li>
                  <a
                    href="mailto:therapy@michellesmit.com"
                    class="font-bold text-rose-500"
                  >
                    therapy@diaanbisogno.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="hidden w-full px-4 lg:w-4/12 lg:flex">
            <div class="flex flex-wrap mb-6 items-top">
              <div class="w-full px-4 ml-auto lg:w-12/12">
                <span
                  class="block mb-2 text-sm font-bold text-gray-500 uppercase"
                >
                  Links
                </span>
                <ul class="list-unstyled">
                  <li>
                    <nuxt-link
                      to="/about"
                      class="block pb-2 text-gray-500 hover:text-brand-600"
                    >
                      About
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/therapy-services"
                      class="block pb-2 text-gray-500 hover:text-brand-600"
                    >
                      Therapy Services
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/rates-and-insurance"
                      class="block pb-2 text-gray-500 hover:text-brand-600"
                    >
                      Rates and Insurance
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-rose-400" />
        <div
          class="flex flex-wrap items-center justify-center md:justify-between"
        >
          <div class="w-full px-4 mx-auto text-center md:w-4/12">
            <div class="py-1 text-sm text-gray-500">
              Copyright © 2020 Diaan Bisogno - Clinical Psychologist
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
