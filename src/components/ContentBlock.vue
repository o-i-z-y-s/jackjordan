<template>
  <div class="container-fluid" style="margin-top: 10px;">
    <div class="container">
      <div class="row" id="border-row">
        <a class="header" @click="toggleShown">
          <h3>{{ header }}
            <button class="header-btn" :style="arrowStyle">&#x25BC;</button>
          </h3>
        </a>
        <div class="col">
          <div ref="contentBlock" class="content-block" :style="contentStyle" >
            <slot name="preamble" />
            <slot name="content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContentBlock',

    props: {
      header: {
        type: String,
        required: true,
      },
      updatedHeight: {
        type: Number,
        required: false,
        default: -1,
      },
    },

    data() {
      return {
        isShown: false,
        arrowStyle: {},
        contentStyle: {},
        blockHeight: -1,
      }
    },

    watch: {
      updatedHeight: function(newVal) {
        if (!this.isShown && newVal !== this.blockHeight) {
          this.blockHeight = this.updatedHeight;
          this.contentStyle = { height: '0px', overflow: 'hidden' };
        }
        else if (newVal !== this.blockHeight) {
          this.blockHeight = this.updatedHeight;
          this.contentStyle = { height: (this.blockHeight + 10)+'px', overflow: 'hidden' };
        }
      }
    },

    mounted: function() {
      
    },

    methods: {
      toggleShown: function() {
        if(!this.isShown) {
          this.isShown = true;
          this.arrowStyle = { transform: 'rotate(-180deg)' };
          if (this.blockHeight < this.updatedHeight) {
            this.blockHeight = this.updatedHeight;
          }
          this.handleHeight(this.blockHeight + 1);
        }
        else {
          this.isShown = false;
          this.arrowStyle = { transform: 'rotate(0deg)' };
          this.contentStyle = { height: '0px', overflow: 'hidden' };
        }
      },
      handleHeight(newHeight) {
        this.$emit('newHeight', newHeight);
      },
    }
  }
</script>

<style scoped>
  .content-block {
    z-index: 1;
    min-height: 0px;
  }
  .content-block li {
    font-size: 0.9em;
    margin-left: 3vw;
    margin-bottom: 0.5em;
  }
  .content-block li:last-child {
    margin-bottom: 0px;
  }
  #border-row {
    border-radius: 10px;
  }
</style>