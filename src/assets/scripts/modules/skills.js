import Vue from "vue";
import axios from "axios";

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
    axios
      .get("http://webdev-api.loftschool.com/skills/7")
      .then(response => {
        const temp = response.data;
        const data = [
          { skillsGroup: "Frontend", skills: {} },
          { skillsGroup: "Backend", skills: {} },
          { skillsGroup: "Workflow", skills: {} }
        ];
        temp.forEach(skill => {
          switch (skill.category) {
            case 0:
              data[0].skills[skill.title] = skill.percents;
              break;
            case 1:
              data[1].skills[skill.title] = skill.percents;
              break;
            case 2:
              data[2].skills[skill.title] = skill.percents;
              break;
          }
        });
        this.skills = data;
      })
      .catch(e => console.error(e));
  },
  template: "#skills-list"
});
