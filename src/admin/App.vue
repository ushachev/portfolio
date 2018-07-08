<template lang="pug">
  #root
    .header
      router-view(name="header")
    .tabs
      router-view(name="tabs")
    .content
      router-view
</template>

<script>
// import header from "./components/header";
// import tabs from "./components/tabs";
// import skills from "./components/skills";

// const data = [
//   { id: 1, title: "Html", percent: 20, category: 0 },
//   { id: 2, title: "PHP", percent: 30, category: 1 },
//   { id: 3, title: "CSS", percent: 40, category: 0 },
//   { id: 4, title: "Node.js", percent: 50, category: 1 },
//   { id: 5, title: "Mongo", percent: 60, category: 1 },
//   { id: 6, title: "Git", percent: 70, category: 2 },
//   { id: 7, title: "Gulp", percent: 20, category: 2 }
// ];

// import { mapActions, mapState, mapGetters } from "vuex";

// export default {
// components: {
//   appHeader: header,
//   tabs,
//   skills
// }
// created() {
//   // this.getUserInfo();
// },
// methods: {
//   ...mapActions(["getUserInfo"])
// }
// };
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic");

body,
html {
  margin: 0;
  height: 100%;
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: $lineHeight;
  color: $text-color;
}

.wrapper {
  height: 100%;
}

#root {
  height: 100%;
  display: flex;
  flex-flow: column;
}

.header {
  height: 80px;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

* {
  box-sizing: border-box;
}

.title {
  margin-bottom: 40px;
  font-size: 21px;
  font-weight: 500;
}

.subtitle {
  margin-bottom: 15px;
  font-weight: 500;
}

.tabs {
  height: 60px;
}

.content {
  position: relative;
  flex: 1;
  padding: 50px 30px;
  background-image: url("./bg_admin.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.input-txt {
  margin-bottom: 20px;
  padding: 13px 20px;
  border: none;
  border-radius: 5px;
  font-size: 100%;

  &_works {
    width: 400px;
  }
}

.button {
  padding: 13px 20px;
  border: none;
  border-radius: 5px;
  font-size: 100%;
  font-weight: 500;
  color: #fff;
  background-color: $green;

  &:hover {
    background-color: #009688;
  }
}
</style>
