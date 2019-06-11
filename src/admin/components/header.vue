<template lang="pug">
  #header
    .header-title Панель администрирования
    a(@click="backToSite").exit Вернуться на сайт
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),
    backToSite() {
      this.logout();
      window.location.href = "/";
    }
  }
};
</script>
<style lang="scss" scoped>
#header {
  background: $green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  height: 100%;
}

.header-title {
  font-size: 28px;
  font-weight: 500;
}

.exit {
  color: inherit;
  text-decoration: underline;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}
</style>
