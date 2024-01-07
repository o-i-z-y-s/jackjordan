<template>
  <content-block ref="aboutBlock" header="About" :updatedHeight="blockHeight" @newHeight="onNewHeight">
    <template v-slot:content>
      <div id="about-content" ref="aboutContent">
        <p>Hello, hallo, こんにちは！ I'm Jordan (or Jack), a software engineer and localization specialist living in the Los Angeles area.</p>
        <p>Presently, I'm working with a small team at CACI to build information display systems while spearheading the development of a new product. In my previous roles, I kickstarted the first automated testing project in our org, created productivity tools, wrote tons of documentation, and filled in as team lead during a management transition.</p>
        <p>Outside of my day job, I'm editing the translations of two novel series and three manga, whenever new volumes drop. You can find a full list of my works in the <a href="#experience" class="link">Experience</a> section.</p>
        <div style="text-align: center; vertical-align: middle;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d173403.2417169549!2d-118.03668612332154!3d33.77404796869735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1704491251029!5m2!1sen!2sus" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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

    created () { 
      window.addEventListener('load', this.updateHeight);
    },

    methods: {
      updateHeight() {
        if (this.$refs.aboutContent.clientHeight > -1) {
          this.blockHeight = this.$refs.aboutContent.clientHeight;
        }
      },
      onNewHeight(newHeight) {
        this.blockHeight = newHeight;
      }
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
  @media (max-height: 460px) {
    iframe {
      height: 200px;
    }
  }
</style>