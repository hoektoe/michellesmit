<template>
  <header>
    <nav class="relative z-20 bg-gray-800 shadow">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between h-20 md:h-24">
          <div class="flex ml-4 mr-2">
            <nuxt-link to="/" class="flex items-center flex-shrink-0">
              <img
                class=""
                src="~/assets/images/logo-block.svg"
                alt="Diaan Bisogno Therapy logo"
                width="90px"
                height="90px"
              />
              <div
                class="flex flex-col justify-center w-full ml-2 font-bold text-white"
              >
                <div class="w-full text-sm uppercase sm:text-xl lg:text-2xl">
                  Diaan Bisogno
                </div>
                <div
                  class="w-full text-xs uppercase md:-mt-2 sm:text-lg xl:text-base"
                >
                  clinical psychologist
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="hidden md:flex">
            <nuxt-link
              to="/"
              class="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-white transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-600 hover:border-cyan-300 focus:outline-none focus:text-gray-700 focus:border-cyan-300"
            >
              Welcome
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-white transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-600 hover:border-cyan-300 focus:outline-none focus:text-gray-700 focus:border-cyan-300"
            >
              About
            </nuxt-link>
            <nuxt-link
              to="/therapy-services"
              class="inline-flex items-center px-1 pt-1 ml-8 text-base font-medium leading-5 text-white transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-600 hover:border-cyan-300 focus:outline-none focus:text-gray-700 focus:border-cyan-300"
            >
              Therapy Services
            </nuxt-link>
          </div>
          <div class="items-center hidden -mr-4 md:flex">
            <div class="flex-shrink-0">
              <nuxt-link
                to="/contact"
                class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-teal-500 focus:outline-none focus:border-cyan-400 focus:shadow-outline-green active:bg-cyan-500"
              >
                <svg
                  class="w-5 h-5 mr-2 -ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>Contact</span>
              </nuxt-link>
            </div>
          </div>
          <div class="flex items-center ml-2 mr-2 md:hidden">
            <button
              @click="isOpen = !isOpen"
              class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <transition
        enter-active-class="transition duration-200 ease-out transform"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-100 ease-in transform"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-show="isOpen"
          class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div
            class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
          >
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <nuxt-link
                    @click="isOpen = false"
                    to="/"
                    class="flex items-center flex-shrink-0"
                  >
                    <img
                      src="~/assets/images/logo-color.svg"
                      alt="Diaan Bisogno Therapy logo"
                      width="60px"
                      height="60px"
                    />
                    <div
                      class="flex flex-col justify-center w-full ml-2 font-bold text-gray-600"
                    >
                      <div
                        class="w-full text-sm uppercase sm:text-xl lg:text-2xl"
                      >
                        Diaan Bisogno
                      </div>
                      <div
                        class="w-full text-xs uppercase md:-mt-2 sm:text-lg xl:text-base"
                      >
                        clinical psychologist
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    @click="isOpen = !isOpen"
                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <nuxt-link
                    @click="isOpen = false"
                    to="/about"
                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div class="ml-4 text-base font-medium text-gray-900">
                      About Me
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    @click="isOpen = false"
                    to="/therapy-services"
                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Therapy Services
                    </div>
                  </nuxt-link>

                  <nuxt-link
                    @click="isOpen = false"
                    to="/contact"
                    class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Contact
                    </div>
                  </nuxt-link>
                </nav>
              </div>
            </div>
            <div class="px-5 py-6">
              <nuxt-link
                @click="isOpen = false"
                to="/contact"
                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700"
              >
                Free 15 minute consultation
              </nuxt-link>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  data: () => ({
    isOpen: false,
  }),
};
</script>