<template lang="pug">
  .works__work.work
    .work__preview
      img(:src="srcSet()").work__img
    .work__title {{work.title}}
    button(type="button" @click="removeItem").button.button_del &#10006
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    work: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(["removeExistedWork"]),
    removeItem() {
      this.removeExistedWork(this.work.id);
    },
    srcSet() {
      return `http://webdev-api.loftschool.com/${this.work.photo}`;
    }
  }
};
</script>
<style lang="scss">
.work {
  display: flex;
  align-items: center;

  &__title {
    flex: 1;
    align-self: center;
  }

  &__preview {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    border: 1px solid $green;
    border-radius: 5px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
