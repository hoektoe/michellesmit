<template>
  <section v-editable="blok">
    <div class="relative max-w-6xl px-4 py-12 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div
        class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-top"
      >
        <div class="lg:col-start-2">
          <div class="pb-12 text-lg prose">
            <div
              v-if="blok.description"
              v-html="$md.render(blok.description)"
            ></div>
          </div>

          <div v-if="blok.button_link && blok.button_text !== ''">
            <div class="inline-flex rounded-md shadow">
              <nuxt-link
                :to="blok.button_link.cached_url"
                class="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-accent-500 flex-inline hover:bg-accent-400 md:py-4 md:text-lg md:px-10"
              >
                {{ blok.button_text }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="relative mt-10 sm:text-right sm:-mx-4 sm:pr-8 lg:mt-0 lg:col-start-1"
        >
          <img
            v-if="blok.image.filename !== null"
            class="relative mx-auto rounded-lg"
            width="400"
            :src="blok.image.filename"
          />
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