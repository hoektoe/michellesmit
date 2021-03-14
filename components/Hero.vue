<template>
  <section v-editable="blok">
    <div class="relative flex flex-col-reverse mb-16 bg-gray-100 md:flex-row">
      <div
        class="z-20 w-full max-w-6xl pt-8 pb-20 mx-auto text-center lg:py-40 lg:text-left"
      >
        <div
          class="p-4 bg-white rounded-lg shadow-md lg:w-1/2 sm:px-8 xl:pr-16"
        >
          <h1
            class="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block text-gray-800">{{ blok.headline }}</span>
          </h1>
          <p
            class="max-w-md mt-3 text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            {{ blok.description }}
          </p>

          <template v-if="blok.link_primary_text && blok.link_primary_text">
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div
                v-if="blok.link_primary_text !== ''"
                class="rounded-md shadow"
              >
                <nuxt-link
                  :to="blok.link_primary_href.cached_url"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10"
                >
                  {{ blok.link_primary_text }}
                </nuxt-link>
              </div>
              <div
                v-if="blok.link_secondary_text !== ''"
                class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
              >
                <nuxt-link
                  :to="blok.link_secondary_href.cached_url"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-500 bg-white border rounded-md border-brand-400 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  {{ blok.link_secondary_text }}
                </nuxt-link>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div
        v-if="blok.image.filename"
        class="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
      >
        <img
          class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
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
