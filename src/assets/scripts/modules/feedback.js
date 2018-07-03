import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#review-form",
  data() {
    return {
      parameters: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    submitForm() {
      let url = "https://jsonplaceholder.typicode.com/posts";
      axios
        .post(url, this.parameters)
        .then(response => {
          console.log(JSON.stringify(response, null, 2));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
