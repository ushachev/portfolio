const blogs = {
	state: {
    data: []
  },
  mutations: {
    fillUpBlogs(state, blogs) {
      state.data = blogs;
    },
    addBlogToState(state, blog) {
      state.data.push(blog);
    },
    removeBlog(state, blogId) {
      state.data = state.data.filter(item => item.id !== blogId);
    }
  },
  actions: {
    addBlog({ commit }, blog) {
      console.log(blog);
      return this.$axios.post("/posts", blog).then(response => {
        commit("addBlogToState", response.data);
        console.log("addedBlog", response);
      });
    },
    removeExistedBlog({ commit }, blogId) {
      return this.$axios
        .delete(`/posts/${blogId}`)
        .then(response => {
          commit("removeBlog", blogId);
        });
    },
    fetchBlogs({ commit }) {
      return this.$axios
        .get(`/posts/7`)
        .then(response => {
          commit("fillUpBlogs", response.data);
        })
        .catch(e => console.error(e));
    }
  }
};

export default blogs;
