<template>
  <div>
    <Sky :skyColor="skyColor" />
    <div>
      <div id="sun"></div>
      <div id="moon"></div>
    </div>
    <div class="container" id="intro-container">
      <div class="row">
        <div class="col">
          <div id="intro-wrapper">
            <h2 class="header" id="greeting">{{ this.greeting }}</h2>
            <h1 class="header" id="itsme">I'm&nbsp;Jordan,</h1>
            <h2 id="headline">a software engineer and localization specialist in&nbsp;Southern&nbsp;California.</h2>
            <p id="blurb">Lately I've been using Vue and Node.js to build full stack applications for space launch, crusading to retire as much legacy code as&nbsp;possible.<br>I also moonlight as an editor of Japanese novels and comics.</p>
            <div class="icon-row">
              <div id="one" class="link-wrapper">
                <a href="https://github.com/o-i-z-y-s" target="_blank">
                  <img class="icon" src="../assets/github.png">
                </a>
              </div>
              <div id="two" class="link-wrapper">
                <a href="https://www.linkedin.com/in/jordan-fluitt/" target="_blank">
                  <img class="icon" src="../assets/linkedin.svg">
                </a>
              </div>
              <div id="three" class="link-wrapper">
                <a href="mailto:jorfludia@gmail.com" target="_blank">
                  <img class="icon" src="../assets/letter.svg">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sky from './Sky.vue'

  export default {
    name: 'Intro',
    components: {
      Sky,
    },
    props: {
      skyColor: {
        type: String,
        required: false
      },
      greeting: {
        type: String,
        required: true,
        default: "Hello!"
      },
      time: {
        type: Number,
        required: true,
        default: 0
      }
    },
    data() {
      return {
        dayPercent: 0
      }
    },
    watch: {
      time: function() {
        this.getSunMoonPlacement();
      }
    },
    mounted: function() {
      this.getSunMoonPlacement();
      window.addEventListener("resize", this.getSunMoonPlacement());
    },
    methods: {
      getSunMoonPlacement() {
        this.dayPercent = Math.trunc((this.time / 43200) * 100);

        let x = this.getX(this.dayPercent);
        let y = this.getY(this.dayPercent);
        if ( y < 3 ) { y += 2 }

        if (this.dayPercent >= 51 && this.dayPercent <= 149) { 
          document.getElementById("sun").style.setProperty("--sunVis", 'visible');
          document.getElementById("sun").style.setProperty("--sunLeft", String(x) + '%');
          document.getElementById("sun").style.setProperty("--sunTop", String(y) + '%');
          document.getElementById("moon").style.setProperty("--moonVis", 'hidden');
        } else if (this.dayPercent <= 49 || this.dayPercent >= 151) {
          x += 1;
          document.getElementById("moon").style.setProperty("--moonVis", 'visible');
          document.getElementById("moon").style.setProperty("--moonLeft", String(x) + '%');
          document.getElementById("moon").style.setProperty("--moonTop", String(y) + '%');
          document.getElementById("sun").style.setProperty("--sunVis", 'hidden');
        } else {
          document.getElementById("sun").style.setProperty("--sunVis", 'hidden');
          document.getElementById("moon").style.setProperty("--moonVis", 'hidden');
        }
      },
      getY(dayPercent) {
        let scale1Max = 100; let scale1Min = 80;
        let scale2Max = 80; let scale2Min = 100;
        if (window.innerWidth <= 600) {
          scale1Min = 90; scale2Max = 90;
        }

        let val = 0;
        if (dayPercent >= 100) {
          val = (100 - (dayPercent - 100));
        } else { val = dayPercent }

        let position = 0;
        if (0 <= val && val <= 49) {
          let nightRange2Max = 45;
          let nightRange2Min = 0;
          let percent = (val - nightRange2Min) / (nightRange2Max - nightRange2Min);
          position = percent * (scale2Max - scale2Min) + scale2Min;
        } else if (50 <= val && val <= 100) {
          let dayRange1Max = 100;
          let dayRange1Min = 55;
          let percent = (val - dayRange1Min) / (dayRange1Max - dayRange1Min);
          position = percent * (scale1Max - scale1Min) + scale1Min;
        } else if (101 <= val && val <= 150) {
          let dayRange2Max = 145;
          let dayRange2Min = 101;
          let percent = (val - dayRange2Min) / (dayRange2Max - dayRange2Min);
          position = percent * (scale2Max - scale2Min) + scale2Min;
        } else if (151 <= val && val <= 200) {
          let nightRange1Max = 200;
          let nightRange1Min = 155
          let percent = (val - nightRange1Min) / (nightRange1Max - nightRange1Min);
          position = percent * (scale1Max - scale1Min) + scale1Min;
        } 

        return 100 - position;
      },
      getX(val) {
        let scale1Max = 50; let scale1Min = 0;
        let scale2Max = 100; let scale2Min = 50;
        let percent = 0;

        if (0 <= val && val <= 49) {
          let nightRange2Max = 49;
          let nightRange2Min = 0;
          percent = (val - nightRange2Min) / (nightRange2Max - nightRange2Min);
          percent = percent * (scale2Max - scale2Min) + scale2Min;
        } else if (50 <= val && val <= 100) {
          let dayRange1Max = 100;
          let dayRange1Min = 50;
          percent = (val - dayRange1Min) / (dayRange1Max - dayRange1Min);
          percent = percent * (scale1Max - scale1Min) + scale1Min;
        } else if (100 <= val && val <= 150) {
          let dayRange2Max = 150;
          let dayRange2Min = 100;
          percent = (val - dayRange2Min) / (dayRange2Max - dayRange2Min);
          percent = percent * (scale2Max - scale2Min) + scale2Min;
        } else if (151 <= val && val <= 200) {
          let nightRange1Max = 200;
          let nightRange1Min = 150;
          percent = (val - nightRange1Min) / (nightRange1Max - nightRange1Min);
          percent = percent * (scale1Max - scale1Min) + scale1Min;
        } 

        let placement = (window.innerWidth * (percent/100));
        if (50 <= val && val <= 150) { placement -= 37.5 }
        else { placement -= 25 }
        return (placement / window.innerWidth) * 100;
      }
    }
  }
</script>

<style scoped>
  #sun::after {
    z-index: 10;
    content: '';
    display: inline-block;
    width: 75px;
    height: 75px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0 0 50px 15px white;
    position: absolute;
    left: var(--sunLeft);
    top: var(--sunTop);
    visibility: var(--sunVis);
  }
  #moon::after {
    z-index: 10;
    content: '';
    display: inline-block;
    width: 60px;
    height: 60px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    box-shadow: -20px 5px 0px 15px white;
    filter: drop-shadow(0 0 1rem white);
    position: absolute;
    left: var(--moonLeft);
    top: var(--moonTop);
    visibility: var(--moonVis);
  }
  #intro-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 80%;
    z-index: 2;
  }
  #greeting {
    text-align: center;
    color: white;
    font-size: 2em;
    letter-spacing: 2px;
    margin-top: 10px;
    animation: fadein 1s ease-in;
  }
  #itsme {
    color: white;
    font-size: 4em;
    margin-top: -10px;
    animation: delayed-fadein 2s ease-in;
  }
  #headline {
    text-align: center;
    color: white;
    font-size: 1.5em;
    margin-top: -5px;
    animation: delayed-fadein 2s ease-in;
  }
  #blurb {
    text-align: center;
    color: white;
    animation: more-delayed-fadein 3s ease-in;
  }
  .icon-row {
    text-align: center;
  }
  .icon-row > #one {
    animation: pop-in 3.5s ease-in;
  }
  .icon-row > #two {
    animation: pop-in 4s ease-in;
  }
  .icon-row > #three {
    animation: pop-in 4.5s ease-in;
  }

  @media (min-width: 1650px) {
    #intro-container {
      max-width: 50%;
    }
  }
  @media (min-width: 1400px) and (max-width: 1649px) {
    #intro-container {
      max-width: 60%;
    }
  }
  @media (min-width: 860px) and (max-width: 1399px) {
    #intro-container {
      max-width: 65%;
    }
  }
  @media (min-width: 712px) and (max-width: 833px) {
    #intro-container {
      max-width: 80%;
    }
    #greeting {
      font-size: 1.9em;
    }
    #itsme {
      font-size: 3.25em;
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 711px) {
    #intro-container {
      max-width: 80%;
    }
    #greeting {
      font-size: 1.8em;
    }
    #itsme {
      font-size: 3.25em;
    }
    #headline {
      font-size: 1.2em;
    }
  }
  @media (min-width: 471px) and (max-width: 578px) {
    #intro-container {
      max-width: 75%;
    }
    #itsme {
      font-size: 3em;
    }
  }
  @media (max-width: 470px) {
    #greeting {
      margin-top: -1em;
    }
    #itsme {
      font-size: 2.75em;
    }
    #headline {
      font-size: 1.2em;
      margin-top: 0px;
    }
  }
  @media (min-width: 320px) and (max-width: 419px) {
    #greeting {
      font-size: 1.7em;
    }
    #headline {
      font-size: 1.1em;
    }
    .icon-row {
      margin-top: 1em;
    }
  }

  @media (max-height: 460px) {
    #intro-container {
      max-width: 85%;
    }
    #greeting {
      margin-top: 1em;
      font-size: 1.7em;
    }
    #itsme {
      font-size: 2.75em;
      margin-top: -10px;
      padding-bottom: 6px;
    }
    #headline {
      font-size: 1.2em;
    }
  }
  @media (max-height: 430px) {
    .icon-row {
      margin-bottom: 0.25em;
    }
    #greeting {
      margin-top: -0.5em;
      font-size: 1.5em;
    }
    #itsme {
      font-size: 2.75em;
      padding-bottom: 6px;
    }
    #headline {
      font-size: 1.2em;
    }
    p {
      font-size: 0.9em;
    }
  }
  @media (max-height: 349px) {
    p {
      margin-bottom: 0.25em;
    }
    .icon-row {
      margin-bottom: 1.25em;
    }
    #greeting {
      margin-top: 0.25em;
      font-size: 1.2em;
    }
    #itsme {
      font-size: 2.5em;
      padding-bottom: 0px;
    }
    #headline {
      font-size: 1.1em;
    }
    p {
      font-size: 0.9em;
    }
  }

  @keyframes fadein {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes delayed-fadein {
    0% {opacity: 0;}
    25% { opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes more-delayed-fadein {
    0% {opacity: 0;}
    50% { opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes pop-in {
    0% { opacity: 0; }
    90% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>