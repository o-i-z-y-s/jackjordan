<template>
  <div ref="educationTable">
    <div class="container" v-for="school in educationData" :key="school.id">
      <div class="row paper">

        <div class="col-sm-4 col-lg-3">
          <div class="school">
            {{ school.name }}
          </div>
          <div class="location">
            &#128205; {{ school.location }}
          </div>
        </div>

        <div class="col-sm">
          <div class="subpaper">
            <div class="program">
              {{school.program}}
              <div class="program-extra" v-if="school.extra !== ''">
                with {{school.extra}}
              </div>
            </div>
            <div class="dates">
              {{school.dates}}
            </div>
            <div class="desc">
              {{ school.desc }}
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
    name: 'EducationTable',
    props: {
      handleHeight: {
        type: Function,
        required: true,
      }
    },
    data: function() {
      return { 
        educationData: JSON,
        tableHeight: -1,
      }
    },

    mounted: function() {
      this.educationData = resumeData.educationData;
      window.addEventListener("resize", this.updateHeight);
    },

    updated: function() {
      this.updateHeight();
    },

    methods: {
      updateHeight() {
        if (this.$refs.educationTable.clientHeight !== -1) {
          this.tableHeight = this.$refs.educationTable.clientHeight;
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