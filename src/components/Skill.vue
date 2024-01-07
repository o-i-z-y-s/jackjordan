<template>
  <div>
    <div class="skill">
      <span class="skillName">{{ skillName }}</span>
    </div>
    <div class="barWrapper">
      <div class="bar" :style="{ 'width': width }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SkillsTable',
    props: {
      skillName: {
        type: String,
        required: true
      },
      width: {
        type: String,
        required: true
      }
    },
    data: function() {
      return { 
      }
    },

    mounted: function() {
    },

    updated: function() {
    },

    methods: {
    },
  }
</script>

<style scoped>
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
    border-radius: 20px;
  }
  .skill {
    width: 100%;
  }
  .skillName {
    text-align: start;
    /* padding-left: 1rem; */
  }
  .skillLevel {
    text-align: end;
    align-self: center;
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
  }
  @media (max-width: 575px) {
    .skill {
      text-align: center;
      padding: 0;
    }
  }
</style>