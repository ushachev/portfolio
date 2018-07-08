<template lang="pug">
  .works__added
    workItem(
      v-for="work in works"
      :key="work.id"
      :work="work"
    )
</template>
<script>
import workItem from "./workItem";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    workItem
  },
  computed: {
    ...mapState({
      works: state => state.works.data
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions(["fetchWorks"])
  }
};
</script>
