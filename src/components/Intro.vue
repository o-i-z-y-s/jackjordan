<template>
  <div>
    <Sky :skyColor="skyColor" />
    <div class="container" id="intro-container">
      <div class="row">
        <div class="col">
          <div id="intro-wrapper">
            <h2 class="header" id="greeting">{{ this.greeting }}</h2>
            <h1 class="header" id="itsme">I'm&nbsp;Jordan,</h1>
            <h2 id="headline">a software engineer and localization editor in&nbsp;Southern&nbsp;California.</h2>
            <p id="blurb">Lately I've been using Vue to build frontend interfaces and data flows for web-based space launch display systems, crusading to retire as much legacy code as&nbsp;possible.<br>I also moonlight as an editor of Japanese novels and comics.</p>
            <div class="icon-row">
              <div class="link-wrapper">
                <a href="https://github.com/o-i-z-y-s" target="_blank">
                  <img class="icon" src="../assets/github.png">
                </a>
              </div>
              <div class="link-wrapper">
                <a href="https://www.linkedin.com/in/jordan-fluitt/" target="_blank">
                  <img class="icon" src="../assets/linkedin.svg">
                </a>
              </div>
              <div class="link-wrapper">
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
      }
    },
    data() {
      return {
        
      }
    },
    mounted: function() {

    },
    methods: {

    }

  }
</script>

<style scoped>
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
    animation: more-delayed-fadein 3.5s ease-in;
  }
  .icon-row {
    text-align: center;
    animation: more-delayed-fadein 5s ease-in;
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
    #itsme {
      font-size: 2.75em;
    }
    #headline {
      font-size: 1.2em;
    }
  }
  @media (min-width: 320px) and (max-width: 419px) {
    #greeting {
      font-size: 1.7em;
    }
    #headline {
      font-size: 1.1em;
    }
  }

  @media (max-height: 460px) {
    #intro-container {
      max-width: 85%;
    }
    #greeting {
      font-size: 1.7em;
    }
    #itsme {
      font-size: 2.75em;
      padding-bottom: 6px;
    }
    #headline {
      font-size: 1.2em;
    }
  }
  @media (max-height: 430px) {
    .icon-row {
      margin-bottom: 1em;
    }
    #greeting {
      font-size: 1.6em;
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
    #intro-wrapper {
      margin-top: -0.5em;
    } 
    .icon-row {
      margin-top: -0.75em;
    }
    #greeting {
      font-size: 1.5em;
    }
    #itsme {
      font-size: 2.5em;
      padding-bottom: 6px;
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
</style>