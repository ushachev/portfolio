<template lang="pug">
  .skills
    .skills-title {{type.name}}
    table.skills-list
      skills-item(
        v-for="skill in skills"
        v-if="skill.category === type.id"
        :key="skill.id"
        :skill="skill"
      )
      skills-item(
        :editmode= "true"
        :typeId="type.id"
      )
    br
    hr
    br
</template>

<script>
import skillsItem from "./skillItem";
export default {
  components: {
    skillsItem
  },
  props: {
    type: {
      type: Object,
      default: () => ({
        id: 0,
        name: "frontend"
      })
    },
    skills: {
      type: Array,
      default: () => []
    }
  }
  // mehtods: {
  //   fromNameToNum(name) {
  //     switch (name) {
  //       case "frontend":
  //         return 0;
  //       case "backend":
  //         return 1;
  //       case "workflow":
  //         return 2;
  //     }
  //   }
  // }
};
</script>
<style lang="scss">
.skills-title {
  font-weight: 500;
}
</style>
