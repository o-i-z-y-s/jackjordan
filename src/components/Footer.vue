<template>
  <div>
    <div id="footer">
      Site designed and built by me. Background animations done using <a href="https://github.com/VincentGarreau/particles.js" target="_blank" class="link">Particles.js</a>.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
        
    },
    mounted: function() {
        
    },
    methods: {

    }
  }
</script>

<style scoped>
  #footer {
    position: relative;
    z-index: 1;
    margin-top: -3vh;
    padding: 15px;
    color: white;
    font-size: 0.8em;
    font-style: italic;
    text-align: center;

    background-image: url("../assets/seafloor.svg");
    height: 60px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>