<template>
  <div> 
    <div id="footer">
      Site designed and built by me. Background animations done using <a href="https://github.com/VincentGarreau/particles.js" target="_blank" class="link">Particles.js</a>.
    </div>
    <img id="seafloor" src="../assets/seafloor.svg">
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
    padding: 10px;
    margin-bottom: -12vh;
    color: white;
    background-color: #2e271f;
    font-size: 0.8em;
    font-style: italic;
    text-align: center;
  }
  #seafloor {
    position: relative;
    display: inline;
    left: -1vw;
    width: 101vw;
    transform: scaleY(0.5);
    bottom: -4vh;
  }

  @media (max-width: 506px) {
    #seafloor {
      bottom: -2.5vh;
    }
  }
</style>