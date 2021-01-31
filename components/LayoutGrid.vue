<template>
  <div
    v-editable="blok"
    class="grid grid-cols-1 py-12 sm:py-12 sm:grid-cols-2 auto-rows-auto md:grid-cols-3"
    :key="blok._uid"
  >
    <template v-for="blok in blok.columns">
      <component :blok="blok" :is="blok.component" />
    </template>
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
};
</script>
