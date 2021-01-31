<template>
  <div v-editable="blok">
    <div
      v-if="blok.image.filename === null"
      :class="[
        `flex
      flex-col
      justify-start
      col-span-1
      px-8
      py-8
      text-center
      text-white
      bg-gradient-to-r h-full
      ${bgStyle[blok.style]}`,
      ]"
    >
      <div class="uppercase">{{ blok.subtitle }}</div>
      <h4 class="pb-6 text-4xl font-bold uppercase">{{ blok.title }}</h4>
      <p class="pb-6">{{ blok.description }}</p>
      <div>
        <nuxt-link
          :to="blok.link.cached_url"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 uppercase bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Learn more
        </nuxt-link>
      </div>
    </div>

    <div
      v-if="blok.image.filename !== null"
      class="relative flex justify-center col-span-1 overflow-hidden bg-gray-50 h-96"
    >
      <img class="object-cover" :src="blok.image.filename" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      bgStyle: {
        "green-left-to-right": "bg-gradient-to-r from-brand-500 to-brand-400",
        "green-right-to-left": "bg-gradient-to-r from-brand-400 to-brand-500",
        "blue-left-to-right": "bg-gradient-to-r from-accent-500 to-accent-400",
        "blue-right-to-left": "bg-gradient-to-r from-accent-400 to-accent-500",
      },
    };
  },
};
</script>
