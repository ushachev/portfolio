<template lang="pug">
  #tabs
    ul.tabs
      li.item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
        ).link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Блог", href: "/blog" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
#tabs {
  background: #f0efe9;
}

.item {
  border-right: 2px solid #fff;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100%;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  opacity: 0.7;
}

.tabs {
  display: flex;
}
</style>
