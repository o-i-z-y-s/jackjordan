<template>
  <div>
    <div id="all-content">
      <div class="icon-row time-toggle">
        <div class="link-wrapper">
          <a @click="setStyles('morning')">
            <img class="icon" src="./assets/sun.png">
          </a>
        </div>
        <div class="link-wrapper">
          <a @click="setStyles('evening')">
            <img class="icon" src="./assets/halfsunhalfmoon.png">
          </a>
        </div>
        <div class="link-wrapper">
          <a @click="setStyles('night')">
            <img class="icon" src="./assets/moon.png" style="height: 20px; width: 20px;">
          </a>
        </div>
      </div>
      <Intro id="intro" :greeting="greeting" :skyColor="skyColor" :style="'--surfaceColor:' + surfaceColor" />
      <div id="main-content" ref="allContent" :style="oceanColor">
        <div :style="'--rowColor:' + rowColor">
          <About id="about" />
          <Skills id="skills" />
          <Experience id="experience" />
          <Education id="education" />
          <Bubbles id="bubbles" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Bubbles from './components/Bubbles.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'AllContent',
  components: {
    Intro,
    Bubbles,
    About,
    Skills,
    Experience,
    Education,
    Footer
  },
  data() {
    return {
      greeting: "",
      timeOfDay: "",

      skyColor: '',
      daySky: 'background: linear-gradient(to bottom, #096dd9 0%, #1890ff 50%, #69c0ff 75%, #91d5ff 90%, #e6f7ff 150%);',
      nightSky: 'background: linear-gradient(to bottom, #010b17 0%, #06223d 65%, #0f3c63 150%);',
      dawnduskSky: 'background: linear-gradient(to bottom, #312678 0%, #d46b08 65%, #fa8c16 85%, #ffa940 95%, #ffc069 150%);',

      surfaceColor: '',
      daySurface: 'linear-gradient(to bottom, #47adfc, rgba(71, 173, 252, 0) 100%);',
      nightSurface: 'linear-gradient(to bottom, #31375e, rgba(49, 55, 94, 0) 100%);',
      dawnduskSurface: 'linear-gradient(to bottom, #ad8b00, rgba(173, 139, 0, 0) 100%);',

      oceanColor: '',
      dayOcean: 'background: linear-gradient(to bottom, #24648f, #0c4e81, #04335c, #001b36);',
      nightOcean: 'background: linear-gradient(to bottom, #0e1245, #020538, #000012);',
      dawnduskOcean: 'background: linear-gradient(to bottom, #0c4e81, #04335c, #001b36, #00070f);',

      rowColor: '',
      dayRow: 'rgba(125,125,125,0.75);',
      nightRow: 'rgba(50,50,50,0.75);',
      dawnduskRow: 'rgba(100,100,100,0.75);',
    }
  },
  
  mounted: function() {
    var hour = this.getTime();
    this.setGreeting(hour);
    this.setStyles(this.timeOfDay);
  },
  methods: {
    getTime: function() {
      var now = new Date();
      var hour = now.getHours();

      if(0 <= hour && hour < 5) {
        this.timeOfDay = "late";
      }
      else if(5 <= hour && hour < 7) {
        this.timeOfDay = "dawn";
      }
      else if(7 <= hour && hour < 12) {
        this.timeOfDay = "morning";
      }
      else if(12 <= hour && hour < 17) {
        this.timeOfDay = "afternoon";
      }
      else if (17 <= hour && hour <= 19) {
        this.timeOfDay = "evening";
      }
      else if(17 <= hour && hour <= 23) {
        this.timeOfDay = "night";
      }
    },
    setGreeting: function() {
      if(this.timeOfDay === "late") {
        this.greeting = "\"Good evening\" or \"good morning\"?"
      }
      else if(this.timeOfDay === "dawn" || this.timeOfDay === "morning") {
        this.greeting = "Good morning!"
      }
      else if(this.timeOfDay === "afternoon") {
        this.greeting = "Good afternoon!"
      }
      else if(this.timeOfDay === "evening" || this.timeOfDay === "night") {
        this.greeting = "Good evening!"
      }
    },
    setStyles: function(timeOfDay) {
      if(timeOfDay === "night" || timeOfDay === "late") {
        this.skyColor = this.nightSky;
        this.surfaceColor = this.nightSurface;
        this.oceanColor = this.nightOcean;
        this.rowColor = this.nightRow;
      }
      else if (timeOfDay === "dawn" || timeOfDay === "evening") {
        this.skyColor = this.dawnduskSky;
        this.surfaceColor = this.dawnduskSurface;
        this.oceanColor = this.dawnduskOcean;
        this.rowColor = this.dawnduskRow;
      }
      else if(timeOfDay === "morning" || timeOfDay === "afternoon") {
        this.skyColor = this.daySky;
        this.surfaceColor = this.daySurface;
        this.oceanColor = this.dayOcean;
        this.rowColor = this.dayRow;
      }
    },
  }
}
</script>

<style>
.time-toggle {
  position: absolute;
  text-align: center;
  width: 150px;
  z-index: 5;
  right: 2%;
  top: 1%;
}
#all-content {
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
}
#intro {
  position: relative;
  height: 90vh;
}
#intro::after {
  z-index: 1;
  content: "";
  position: absolute;
  width: 100%;
  height: 10vh;
  background: var(--surfaceColor);
}
#main-content {
  position: relative;
  padding-top: 11vh;
  background-repeat: no-repeat;
  background-attachment: scroll;
  padding-bottom: 8vh;
}
#main-content > * > * {
  position: relative;
  z-index: 1;
  margin-bottom: 1em;
}
#bubbles {
  position: fixed;
  z-index: 0;
}
#border-row {
  background: var(--rowColor);
}

@media (max-height: 460px) {
  p {
    padding-bottom: 0.2em;
  }
}
</style>