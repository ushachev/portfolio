<template lang="pug">
  tr.row1(v-if="!editmode")
    td {{skill.title}}
    td.column2
      span {{skill.percents}} %
    td.column3
      button(type="button" @click="removeItem").button.button_del &#10006
  tr(v-else)
    td 
      input(
        type="text" 
        v-model="newSkill.title"
      ).input-txt.input-txt_skill
    td.column2
      input(
        type="text"
        v-model="newSkill.percents" 
      ).input-txt.input-txt_percent
      span %
    td.column3
      button(type="button" @click="addSkill").button Добавить
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
<style lang="scss">
.row1 {
  height: 50px;
  padding-bottom: 20px;
}

.column2 {
  padding: 0 20px;
  text-align: center;
}

.column3 {
  text-align: right;
}
</style>
