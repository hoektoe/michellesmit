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
    transactionID: function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
  },
  mounted() {
    if (this.$nuxt.$route.params.slug === "thank-you") {
      this.$gtag.event("conversion", {
        send_to: "AW-624837513/MhzFCNOC7IkCEImH-akC",
        value: 500,
        transaction_id: this.transactionID,
      });

      // this.$gtag.purchase({
      //   transaction_id: this.transactionID,
      //   affiliation: "Contact Form Submitted",
      //   value: 500,
      // });

      this.$gtag.event("conversion", {
        event_category: "conversion",
        event_label: "conversion",
        value: 500,
      });
      this.$gtag.event("generate_lead", {
        event_category: "engagement",
        event_label: "Contact Form Lead",
        value: 500,
      });
    }
  },
};
</script>
