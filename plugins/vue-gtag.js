import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: {
        id: "G-Q72VRYTGE2",
        params: {
          send_page_view: true
        }
      },
      includes: [
        {
          id: "AW-624837513",
          params: {
            send_page_view: false
          }
        }
      ],
      appName: "michellesmit",
      enabled: true
    },
    app.router
  );
};
