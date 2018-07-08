<template lang="pug">
  div
    h1.title Страница "Мои работы"
    .subtitle Добавить работу
    input(type="text" placeholder="Название проекта" v-model="work.title").input-txt.input-txt_works
    br
    input(type="text" placeholder="Технологии" v-model="work.techs").input-txt.input-txt_works
    br
    input(type="text" placeholder="Ссылка" v-model="work.link").input-txt.input-txt_works
    br
    .upload
      label.upload__label
        input(type="file" @change="addPhoto").upload__btn
        span.upload__text Загрузить картинку
    br
    button(@click="addNewWork").button Добавить работу
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      work: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  methods: {
    ...mapActions(["addWork"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.length === 0) return;

      this.work.photo = files[0];
    },
    addNewWork() {
      const formData = new FormData();

      Object.keys(this.work).forEach(prop => {
        formData.append(prop, this.work[prop]);
      });

      this.addWork(formData);
    }
  }
};
</script>
<style lang="scss">
.upload {
  &__label {
    display: block;
    width: 35px;
    height: 34px;
    background-image: url(../upload.png);
    background-repeat: no-repeat;
  }

  &__btn {
    display: none;
  }

  &__text {
    margin-left: 45px;
    white-space: nowrap;
    line-height: 34px;
    color: $green;
    opacity: 0.7;

    .upload__label:hover & {
      opacity: 1;
    }
  }
}
</style>
