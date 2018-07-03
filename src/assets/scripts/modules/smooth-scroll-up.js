import Vue from "vue";

new Vue({
  el: "#page-to-top",
  methods: {
    moveUp() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }
});
