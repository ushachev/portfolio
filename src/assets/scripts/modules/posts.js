import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#posts-container",
  data: {
    posts: []
  },
  created() {
    axios
      .get("http://webdev-api.loftschool.com/posts/7")
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => console.error(e));
  },
  methods: {
    dataView(time) {
      let myTime = new Date(time * 1000).toLocaleDateString("ru", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });
      return myTime;
    }
  },
  template: "#posts-list"
});
