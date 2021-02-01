<template>
  <section v-editable="blok" class="relative py-12 sm:py-16 bg-gray-50">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
    </div>
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div
        class="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
      >
        <div class="max-w-lg mx-auto">
          <h2
            class="text-2xl font-extrabold tracking-tight text-accent-600 sm:text-3xl"
          >
            {{ blok.title }}
          </h2>
          <div
            class="mt-3 text-lg leading-6 text-gray-500"
            v-if="blok.description"
            v-html="$md.render(blok.description)"
          ></div>
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Postal address</dt>
              <dd v-if="blok.address" v-html="$md.render(blok.address)"></dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Email</dt>
              <dd class="flex text-brand-600">
                <svg
                  class="flex-shrink-0 w-6 h-6 text-brand-600"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-3 text-brand-600">
                  therapy@michellesmit.com
                </span>
              </dd>
              <dt class="sr-only">Email</dt>
              <dd class="flex text-brand-600">
                <svg
                  class="flex-shrink-0 w-6 h-6text-brand-600"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-3 text-brand-600">
                  practicemanager@michellesmit.com
                </span>
              </dd>
            </div>
          </dl>
          <div
            class="pt-6 text-base text-gray-500"
            v-if="blok.additional_info"
            v-html="$md.render(blok.additional_info)"
          ></div>
        </div>
      </div>
      <div
        class="px-4 py-16 bg-white border rounded-lg shadow-sm border-brand-300 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
      >
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form
            name="contactus"
            data-netlify="true"
            method="POST"
            class="grid grid-cols-1 gap-y-6"
          >
            <div>
              <p class="hidden">
                <label
                  >Don’t fill this out if you’re human: <input name="bot-field"
                /></label>
              </p>
              <input type="hidden" name="form-name" value="contactus" />
              <label for="name" class="sr-only"> Full name </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <label for="email" class="sr-only"> Email </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label for="phone" class="sr-only"> Phone </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                placeholder="Phone"
              />
            </div>
            <div>
              <label for="message" class="sr-only"> Message </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="inline-flex justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-accent-500 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>