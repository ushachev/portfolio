import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const persents = (dashOffset / 100) * (100 - this.skillPercents);
      const trigger = window.innerHeight * 0.9,
        posTop = this.$el.offsetTop;
      let diff = trigger - posTop,
        container = document.getElementById("next"),
        containerPosTop = container.getBoundingClientRect().top;

      if (containerPosTop <= diff) {
        circle.style.strokeDashoffset = persents;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.drawCircle);
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skills.json");
    this.skills = data;
  },
  template: "#skills-list"
});
