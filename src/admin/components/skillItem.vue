<template lang="pug">
  tr(v-if="!editmode")
    td {{skill.title}}
    td
      span {{skill.percents}} %
    td
      button(type="button" @click="removeItem") удалить
  tr(v-else)
    td 
      input(
        type="text" 
        v-model="newSkill.title"
      )
    td
      input(
        type="text"
        v-model="newSkill.percents" 
      )
      span %
    td 
      button(type="button" @click="addSkill") Добавить
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill", "removeExistedSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill).then(r => {
        this.newSkill.title = "";
        this.newSkill.percents = "";
      });
    },
    removeItem() {
      this.removeExistedSkill(this.skill.id);
    }
  }
};
</script>
