<template>
  <content-block header="Education" :updatedHeight="blockHeight" @newHeight="onNewHeight">
    <template v-slot:preamble>
      <div id="educationText" ref="educationText">
        
      </div>
    </template>
    <template v-slot:content>
      <education-table ref="educationTable" :handleHeight="handleHeight" />
    </template>
  </content-block>
</template>

<script>
import ContentBlock from './ContentBlock.vue'
import EducationTable from './EducationTable.vue'

  export default {
    name: 'Education',
    components: {
      EducationTable,
      ContentBlock
    },
    props: {
      updatedHeight: {
        type: Number,
        required: false,
        default: -1,
      }
    },
    data() {
      return {
        blockHeight: -1,
      }
    },

    mounted: function() {

    },
    methods: {
      handleHeight(newHeight) {
        this.blockHeight = newHeight + this.$refs.educationText.clientHeight;
      },
      onNewHeight(newHeight) {
        this.blockHeight = newHeight;
      }
    }
  }
</script>

<style scoped>

</style>