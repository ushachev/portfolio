const works = {
	state: {
    data: []
  },
  mutations: {
    fillUpWorks(state, works) {
      state.data = works;
    },
    addWorkToState(state, work) {
      state.data.push(work);
    },
    removeWork(state, workId) {
      state.data = state.data.filter(item => item.id !== workId);
    }
  },
  actions: {
    add_Work(store, work) {
      return this.$axios.post("/works", work).then(response => {
        console.log("work was added", response);
      });
    },
    addWork({ commit }, work) {
      console.log(work);
      return this.$axios.post("/works", work).then(response => {
        commit("addWorkToState", response.data);
        console.log("addedWork", response);
      });
    },
    removeExistedWork({ commit }, workId) {
      return this.$axios
        .delete(`/works/${workId}`)
        .then(response => {
          commit("removeWork", workId);
        });
    },
    fetchWorks({ commit }) {
      return this.$axios
        .get(`/works/7`)
        .then(response => {
          commit("fillUpWorks", response.data);
        })
        .catch(e => console.error(e));
    }
  }
};

export default works;
