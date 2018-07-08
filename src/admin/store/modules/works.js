const works = {
  actions: {
    addWork(store, work) {
      return this.$axios.post("/works", work).then(response => {
        console.log("work was added", response);
      });
    }
  }
};

export default works;
