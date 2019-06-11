<template lang="pug">
  .blog
    .blog__title {{blog.title}}
    button(type="button" @click="removeItem").button.button_del &#10006
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(["removeExistedBlog"]),
    removeItem() {
      this.removeExistedBlog(this.blog.id);
    }
  }
};
</script>
<style lang="scss">
.blog {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  min-height: 30px;

  &__title {
    text-align: right;
  }
}
</style>
