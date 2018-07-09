import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#menu-container",
  data: {
    posts: []
  },
  created() {
    axios
      .get("http://webdev-api.loftschool.com/posts/7")
      .then(response => {
        this.posts = response.data;
        console.log(this.posts);
      })
      .catch(e => console.error(e));
  },
  template: "#menu-list"
});
