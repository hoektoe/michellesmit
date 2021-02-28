<template>
  <section v-editable="blok">
    <div class="max-w-4xl px-4 py-12 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div class="text-center">
        <div class="text-base font-bold tracking-wide text-teal-500 uppercase">
          {{ blok.subtitle }}
        </div>
        <h1
          v-if="blok.make_title_h1"
          class="text-4xl font-extrabold leading-tight text-rose-400 sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          {{ blok.title }}
        </h1>
        <h2
          v-else="blok.make_title_h1"
          class="text-4xl font-extrabold leading-tight text-rose-400 sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          {{ blok.title }}
        </h2>

        <div
          v-if="blok.description"
          v-html="$md.render(blok.description)"
          class="pt-6 text-lg"
        ></div>
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