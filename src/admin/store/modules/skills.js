const skills = {
  state: {
    data: []
  },
  mutations: {
    fillUpSkills(state, skills) {
      state.data = skills;
    },
    addSkillToState(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skillId) {
      state.data = state.data.filter(item => item.id !== skillId);
    }
  },
  actions: {
    addNewSkill({ commit }, skill) {
      console.log(skill);
      return this.$axios.post("/skills", skill).then(response => {
        commit("addSkillToState", response.data);
        console.log("addedSkill", response);
      });
    },
    removeExistedSkill({ commit }, skillId) {
      return this.$axios
        .delete(`/skills/${skillId}`)
        .then(response => {
          commit("removeSkill", skillId);
        });
    },
    fetchSkills({ commit }) {
      return this.$axios
        .get(`/skills/7`)
        .then(response => {
          commit("fillUpSkills", response.data);
        })
        .catch(e => console.error(e));
    }
  }
};

export default skills;
