<template>
  <div class="paper" ref="skillsTable">
    <div class="container" v-for="skillTypePair in skillsData" :key="skillTypePair.id">
      <div class="row">
        <div class="col-sm-6" v-for="skillType in skillTypePair" :key="skillType.id">
          <div class="subpaper">
            <h4>{{ skillType.title }}</h4>
            <div class="row" v-for="skill in skillType.skills" :key="skill.id">
              <div class="col-6 skill">
                {{ skill[0] }}
              </div>
              <div class="col-6 rating">
                {{ getRatingString(skill[1]) }}
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

  export default {
    name: 'SkillsTable',
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
      this.tableHeight = this.$refs.skillsTable.clientHeight;
      window.addEventListener("resize", this.updateHeight);
    },

    updated: function() {
      this.updateHeight();
    },

    methods: {
      getRatingString: function(rating) {
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
  }

  @media (max-width: 980px) {
    .skill {
      font-size: 0.9em;
    }
  }
  @media (max-width: 768px) {
    .skill {
      text-align: left;
      padding-left: 5px;
      font-size: 0.8em;
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
      font-size: 0.7em;
      padding: 0;
    }
    .rating {
      text-align: center;
      font-size: 0.8em;
    }
  }
</style>