<template lang="pug">
  #about
    h1.title Страница "Обо мне"
    skillsRow(
      v-for="type in types"
      :key="type.name"
      :type="type"
      :skills="skills"
    )
</template>

<script>
import skillsRow from "./skillsRow";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    skillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "frontend" },
        { id: 1, name: "backend" },
        { id: 2, name: "workflow" }
      ]
    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.data
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions(["fetchSkills"])
  }
};
</script>
