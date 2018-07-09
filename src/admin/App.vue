<template lang="pug">
  #root
    .header
      router-view(name="header")
    .tabs
      router-view(name="tabs")
    .content
      router-view
</template>
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

  &_percent {
    margin-right: 10px;
    margin-bottom: 0;
    width: 70px;
  }

  &_skill {
    margin-bottom: 0;
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

  &_del {
    align-self: center;
    margin-left: 20px;
    padding: 7px 10px;
  }
}
</style>
