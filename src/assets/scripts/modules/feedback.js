import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#review-form",
  data() {
    return {
      showModal: false,
      modalMessage: "",
      parameters: {
        name: "",
        email: "",
        feed: ""
      }
    };
  },
  methods: {
    addErrorClass(elem) {
      elem.classList.add("invalid");
      elem.nextSibling.classList.add("tooltip_active");
    },
    deleteErrorClass(e) {
      e.target.classList.remove("invalid");
      e.target.nextSibling.classList.remove("tooltip_active");
    },
    showModalBlock() {
      this.showModal = true;
      document.body.classList.add("scroll-off");
    },
    closeModal() {
      this.showModal = false;
      document.body.classList.remove("scroll-off");
    },
    checkForm() {
      if (
        this.parameters.name &&
        this.parameters.email &&
        this.parameters.feed
      ) {
        if (!this.validEmail(this.parameters.email)) {
          const emailInput = document.getElementById("mail");
          this.addErrorClass(emailInput);
          return false;
        }
        return true;
      }
      this.modalMessage = "Не все поля заполнены";
      this.showModalBlock();
      return false;
    },
    submitForm() {
      const url = "https://jsonplaceholder.typicode.com/posts";
      if (this.checkForm()) {
        axios
          .post(url, this.parameters)
          .then(response => {
            console.log(JSON.stringify(response, null, 2));
            this.modalMessage = "Ваше сообщение отправлено";
            this.showModalBlock();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
});
