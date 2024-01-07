<template>
  <div class="paper" ref="skillsTable">
    <div class="container" v-for="skillTypePair in skillsData" :key="skillTypePair.id">
      <div class="row">
        <div class="col-sm-6" v-for="skillType in skillTypePair" :key="skillType.id">
          <div class="subpaper">
            <h4>{{ skillType.title }}</h4>
            <div class="row">
              <div class="col-6" v-for="skill in skillType.skills" :key="skill.id">
                <skill :skillName="skill[0]" :width="String(skill[1] * 10) + '%'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import resumeData from './JSON/resumeData.json'
  import Skill from './Skill.vue'

  export default {
    name: 'SkillsTable',
    components: {
      Skill
    },
    props: {
      handleHeight: {
        type: Function,
        required: true,
      }
    },
    data: function() {
      return { 
        skillsData: JSON,
        tableHeight: -1,
      }
    },

    mounted: function() {
      this.skillsData = resumeData.skillsData;
      window.addEventListener("resize", this.updateHeight);
    },

    updated: function() {
      this.updateHeight();
    },

    created () { 
      window.addEventListener('load', this.updateHeight);
    },

    methods: {
      getRatingString(rating) {
        let stars = "";
        for (let i = 0; i < rating; i++) {
          stars += "★";
        }
        while (stars.length < 5) {
          stars += "☆";
        }

        return stars;
      },
      updateHeight() {
        if (this.$refs.skillsTable.clientHeight > -1) {
          this.tableHeight = this.$refs.skillsTable.clientHeight;
          this.handleHeight(this.tableHeight);
        }
      }
    },
  }
</script>

<style scoped>
  .row {
    margin-left: -5px;
    margin-right: -5px;
    text-align: center;
  }
  .subpaper {
    font-size: 0.9em;
    width: 100%;
    height: 95%;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .barWrapper {
    background: rgb(230, 230, 230);
    height: 20px;
    width: 100%;
    border: 2px solid white;
    border-radius: 20px;
  }
  .bar {
    background-image: url("../assets/water.png");
    background-repeat: no-repeat;
    background-size: 100% 150%;
    background-position: center;
    height: 100%;
    width: 90%;
    border-radius: 20px;
  }
  .skill {
    text-align: start;
  }
  .skill > span {
    padding-left: 0.5rem;
  }

  @media (max-width: 980px) {
    .skill {
      font-size: 0.9em;
    }
  }
  @media (max-width: 768px) {
    .skill {
      text-align: left;
      padding-left: 10px;
      font-size: 0.9em;
    }
    .rating {
      font-size: 0.9em;
    }
  }
  @media (max-width: 575px) {
    h4 {
      text-align: center;
    }
    .skill {
      text-align: center;
      padding: 0;
    }
    .rating {
      text-align: center;
    }
  }

  @media (max-height: 460px) {
    .subpaper {
      padding: 8px;
    }
  }
</style>