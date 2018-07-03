import Vue from "vue";

new Vue({
  el: "#page-down",
  methods: {
    moveDown() {
      let nextPage = document.getElementById("next"),
        nextPagePosTop = nextPage.getBoundingClientRect().top,
        scrollAmount = Math.floor(nextPagePosTop);
      window.scrollBy({ top: scrollAmount, left: 0, behavior: "smooth" });
    }
  }
});
