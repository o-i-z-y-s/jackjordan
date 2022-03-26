<template>
  <div class="row-fluid">
    <section id="sky" :style="skyColor"></section>
  </div>
</template>

<script>
  import 'particles.js/particles';
  const particlesJS = window.particlesJS;

  export default {
    name: 'Sky',
    props: {
      skyColor: {
        type: String,
        required: false,
      }
    },
    data() {
      return {
        
      }
    },
    mounted: function() {
      this.initParticles();
    },  
    methods: {
      initParticles() {
        particlesJS("sky", {
          "particles": {
            "number": {
              "value": 75,
              "density": {
                "enable": true,
                "value_area": 850
              }
            },
            "color": {
              "value": ["#fff08f", "#ffffff", "#96ffff"]
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.9,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 2,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1.5,
                "size_min": 0,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 0,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "bubble"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 10,
                "opacity": 1,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 2
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      }
    }
  }
</script>

<style scoped>
  #sky {
    position: absolute;
    z-index: 1;
    width: 100vw; 
    height: 100%;
  }
</style>