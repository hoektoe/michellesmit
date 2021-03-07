<template>
  <section v-editable="blok">
    <div
      id="call-to-action"
      class="relative max-w-6xl px-4 py-12 mx-auto sm:py-12 sm:px-6 lg:px-8"
    >
      <div
        class="px-6 py-6 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 md:py-12 md:px-12 lg:py-12 lg:px-16 xl:flex xl:items-center"
      >
        <div class="xl:w-0 xl:flex-1">
          <div
            class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
          >
            {{ blok.title }}
          </div>
          <p class="max-w-3xl mt-3 text-lg leading-6 text-cyan-100">
            {{ blok.description }}
          </p>
        </div>
        <div class="mt-8 text-center sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <nuxt-link
            to="/contact"
            class="px-8 py-3 text-base font-medium text-teal-800 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Schedule now
          </nuxt-link>
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