import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#login-form",
  data() {
    return {
      parameters: {
        login: "",
        pwd: "",
        human: "",
        capcha: ""
      }
    };
  },
  methods: {
    addErrorClass(elem) {
      elem.classList.add("invalid");
      elem.previousSibling.classList.add("tooltip_active");
    },
    deleteErrorClass(e) {
      e.target.classList.remove("invalid");
      e.target.previousSibling.classList.remove("tooltip_active");
    },
    checkForm() {
      if (
        this.parameters.login &&
        this.parameters.pwd &&
        this.parameters.human &&
        this.parameters.capcha === "yes"
      )
        return true;
      if (!this.parameters.login) {
        let loginInput = document.getElementById("login");
        this.addErrorClass(loginInput);
        return false;
      }
      if (!this.parameters.pwd) {
        let pwdInput = document.getElementById("pwd");
        this.addErrorClass(pwdInput);
        return false;
      }
    },
    submitForm() {
      let url = "https://jsonplaceholder.typicode.com/posts";
      if (this.checkForm()) {
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
  }
});
