<template>
  <section v-editable="blok">
    <div class="relative flex flex-col-reverse mb-16 bg-gray-100 md:flex-row">
      <div
        class="w-full max-w-6xl pt-8 pb-20 mx-auto text-center lg:py-40 lg:text-left"
      >
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1
            class="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block text-accent-500">{{ blok.headline }}</span>
          </h1>
          <p
            class="max-w-md mt-3 text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl"
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
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-accent-500 hover:bg-accent-400 md:py-4 md:text-lg md:px-10"
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
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-accent-500 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
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
        class="relative w-full h-52 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
      >
        <img
          class="absolute z-10 object-cover w-full h-full"
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
