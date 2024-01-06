<template>
  <div ref="softwareTable">
    <div class="container" v-for="company in softwareExperienceData" :key="company.id" ref="tableItems">
      <div class="row paper">

        <div class="col-sm-4 col-lg-3">
          <div class="workplace">
            {{ company.name }}
            <div class="workplace-extra" v-if="company.extraName !== null">{{company.extraName}}</div> 
          </div>
          <div class="location">
            &#128205; {{ company.location }}
          </div>
          <div class="technologies" v-if="company.technologies !== null">
            <h4>Technologies Used:</h4>
            <li v-for="tech in company.technologies" :key="tech.id">
              {{ tech }}
            </li>
          </div>
        </div>

        <div class="col-sm">
          <div class="subpaper" v-for="role in company.roles" :key="role.id">
            <div class="job">
              {{role.title}}
            </div>
            <div class="dates">
              {{role.dates}}
            </div>
            <div class="desc" v-for="ind in role.desc.length" :key="ind.id">
              <li>{{ role.desc[ind-1] }}</li>
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
    name: 'SoftwareTable',
    props: {
      handleHeight: {
        type: Function,
        required: true,
      }
    },
    data: function() {
      return { 
        softwareExperienceData: JSON,
        tableHeight: -1,
      }
    },

    mounted: function() {
      this.softwareExperienceData = resumeData.experienceData.software;
      window.addEventListener("resize", this.updateHeight);
    },

    updated: function() {
      this.updateHeight();
    },

    created () { 
      window.addEventListener('load', () => {
        this.updateHeight();
      });
    },

    methods: {
      updateHeight() {
        if (this.$refs.softwareTable.clientHeight !== -1) {
          this.tableHeight = this.$refs.softwareTable.clientHeight;
          this.handleHeight(this.tableHeight);
        }
      }
    },
  }
</script>

<style scoped>
  .paper {
    margin-bottom: 8px;
  }
  .subpaper {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>