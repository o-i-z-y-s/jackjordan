<template>
  <content-block header="Skills" :updatedHeight="blockHeight" @newHeight="onNewHeight">
    <template v-slot:preamble>
      <div id="skillsText" class="summary" ref="skillsText">A subjective scale where one star indicates basic ability and five denotes advanced.</div>
    </template>
    <template v-slot:content>
      <skills-table ref="skillsTable" :handleHeight="handleHeight"/>
    </template>
  </content-block>
</template>

<script>
import ContentBlock from './ContentBlock.vue'
import SkillsTable from './SkillsTable.vue'

  export default {
    name: 'Skills',
    components: {
      SkillsTable,
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
        this.blockHeight = newHeight + this.$refs.skillsText.clientHeight;
      },
      onNewHeight(newHeight) {
        this.blockHeight = newHeight;
      }
    }
  }
</script>

<style scoped>

</style>