<template lang="pug">
  div
    h1.title Страница "Блог"
    .blogs
      .blogs__adding
        .subtitle Добавить запись
        input(type="text" placeholder="Название" v-model="blog.title").input-txt
        br
        input(type="text" placeholder="Дата" v-model="blog.date").input-txt
        br
        textarea(placeholder="Содержание" v-model="blog.content").input-area
        br
        button(@click="addNewBlog").button Добавить
      .blogs__added
        .subtitle Добавленные записи
        blogItem(
          v-for="blog in blogs"
          :key="blog.id"
          :blog="blog"
        )
</template>

<script>
import blogItem from "./blogItem";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    blogItem
  },
  data() {
    return {
      blog: {
        title: "",
        date: "",
        content: ""
      }
    };
  },
  computed: {
    ...mapState({
      blogs: state => state.blogs.data
    })
  },
  created() {
    this.fetchBlogs();
  },
  methods: {
    ...mapActions(["addBlog", "fetchBlogs"]),
    addNewBlog() {
      this.addBlog(this.blog).then(r => {
        this.blog.title = "";
        this.blog.date = "";
        this.blog.content = "";
      });
    }
  }
};
</script>
<style lang="scss">
.blogs {
  display: flex;

  &__added {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-left: 20px;
    padding-right: 20px;
    width: 50%;
  }

  &__adding {
    width: 50%;
  }
}

.input-area {
  margin-bottom: 20px;
  width: 400px;
  height: 300px;
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 100%;
  padding: 13px 20px;
  border: none;
  border-radius: 5px;
}
</style>
