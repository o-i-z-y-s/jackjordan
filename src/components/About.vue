<template>
  <content-block ref="aboutBlock" header="About" :updatedHeight="blockHeight">
    <template v-slot:content>
      <div id="about-content" ref="aboutContent">
        <p>Hello, hallo, こんにちは！ As you might have guessed, my name is Jordan, and I'm a software engineer and localization specialist living in the Los Angeles area.</p>
        <p>Presently, I'm working as part of a small team within CACI to create space launch display systems using the Vue.js JavaScript framework. I love seeing code come to life, building out frontend features, making data usable and meaningful, and slashing technical debt. In my previous roles, I kickstarted the first automated testing project in our org, created productivity tools, wrote tons of documentation, and even filled in as team lead during a management transition.</p>
        <p>Outside of my day job, I'm editing the translations of three book series, which includes the serializations of two novels and two manga. The overwhelming majority of my work has been done through J-Novel Club, where I've also proofread over 40 books. There's a full list of my works in the <a href="#experience" class="link">Experience</a> section!</p>
        <p>Unrelated to work in any way, my first love is and has always been obnoxious post-hardcore music and whiny poetry masked as lyrics. I've been doing hardcore vocals for going on 13 years now, and considering I regularly hit 102dB when practicing, it's a wonder I still have my voice.</p>
        <div style="text-align: center; vertical-align: middle;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224900.4713060073!2d-118.03198020133146!3d33.864784765961835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1631077782751!5m2!1sen!2sus" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          <p style="font-size: 0.8em;">Current location: somewhere in this mess of highways.</p>
        </div>
      </div>
    </template>
  </content-block>
</template>

<script>
import ContentBlock from './ContentBlock.vue';

  export default {
  components: { ContentBlock },
    name: 'About',

    props: {
        
    },

    data() {
      return {
        blockHeight: -1,
      }
    },

    mounted: function() {
      this.blockHeight = this.$refs.aboutContent.clientHeight;
      window.addEventListener("resize", this.updateHeight);
    },

    methods: {
      updateHeight() {
        if (this.$refs.aboutContent.clientHeight > -1) {
          this.blockHeight = this.$refs.aboutContent.clientHeight;
        }
      },
    }
  }
</script>

<style scoped>
  #about-content > p {
    text-indent: 1.5em;
  }

  @media (max-width: 490px) {
    p {
      font-size: 0.9em;
      padding-bottom: 10px;
    }
    #li {
      font-size: 1em;
    }
  }
</style>