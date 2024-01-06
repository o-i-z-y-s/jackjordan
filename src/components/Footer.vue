<template>
  <div>
    <div id="footer">
      Built by me in a dark bedroom, sorely missing the marine layer.
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
    padding: 2rem 1rem 1rem 1rem;
    color: white;
    font-size: 0.8em;
    font-style: italic;
    text-align: center;

    background-image: url("../assets/sand.png");
    height: 60px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 460px) {
    #footer {
      height: 80px;
    }
  }
</style>