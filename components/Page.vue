<template>
  <div v-editable="blok">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
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
  head() {
    return {
      title: this.blok.seo.title,
      meta: [
        { name: "robots", content: this.isNoIndexPage ? "noindex" : "index" },
        {
          hid: "description",
          name: "description",
          content: "{{ blok.seo.description }}",
        },
        {
          hid: "title",
          name: "title",
          content: this.blok.seo.title,
        },
        {
          hid: "image",
          name: "image",
          content: this.blok.seo.og_image,
        },
        { property: "og:type", hid: "og:type", content: "article" },
        {
          property: "og:title",
          hid: "og:title",
          content: this.blok.seo.title,
        },
        {
          property: "og:url",
          hid: "og:url",
          content: "http://michellesmit.com/",
        },
        {
          property: "og:image",
          hid: "og:image",
          content: this.blok.seo.og_image,
        },
        {
          property: "og:description",
          hid: "og:description",
          content: this.blok.seo.og_description,
        },
        {
          property: "og:site_name",
          hid: "og:site_name",
          content: "Michelle Smit",
        },
      ],
    };
  },
  computed: {
    isNoIndexPage: function () {
      return this.$nuxt.$route.params.slug === "thank-you";
    },
  },
};
</script>
