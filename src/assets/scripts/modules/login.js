import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#login-form",
  data() {
    return {
      showModal: false,
      parameters: {
        login: "",
        pwd: "",
        human: "",
        capcha: ""
      },
      user: {
        name: "",
        password: ""
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
      if (!this.parameters.human || this.parameters.capcha === "no") {
        this.showModal = true;
        return false;
      }
    },
    submitForm() {
      let url = "http://webdev-api.loftschool.com/login";
      if (this.checkForm()) {
        this.user.name = this.parameters.login;
        this.user.password = this.parameters.pwd;
        axios
          .post(url, this.user)
          .then(response => {
            if (response.status === 200) {
              const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("ttl", ttl);
              window.location.href = "/admin";
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
});
