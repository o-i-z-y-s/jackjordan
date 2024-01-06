<template>
  <content-block header="Experience" :updatedHeight="blockHeight" @newHeight="onNewHeight">
    <template v-slot:preamble>
      <div id="buttons-row" ref="buttonRow">
        <button class="btn btn-primary" id="software-btn" :disabled="tableToggle" @click="toggleTables()">Software</button>
        <button class="btn btn-primary" id="localization-btn" :disabled="!tableToggle" @click="toggleTables()">Localization</button>
      </div>
      <div class="summary" ref="softwareText" v-show="tableToggle">
        Seven years experience working in software companies, with a combined 4 years in development, 3.5 years in QA, and 2 years in technical writing.
      </div>
      <div class="summary" ref="localizationText" v-show="!tableToggle">
        Seven years experience professionally editing English writing, with a combined 6 years in localization, 2 years in technical content, and 1 year in academic writing.
      </div>
    </template>
    <template v-slot:content>
      <software-table ref="softwareTable" :handleHeight="handleHeight" v-if="tableToggle" />
      <localization-table ref="localizationTable" :handleHeight="handleHeight" v-if="!tableToggle" />
    </template>
  </content-block>
</template>

<script>
import ContentBlock from './ContentBlock.vue';
import SoftwareTable from './SoftwareTable.vue';
import LocalizationTable from './LocalizationTable.vue';

  export default {
    name: 'Experience',
    components: {
      ContentBlock,
      SoftwareTable,
      LocalizationTable
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
        tableToggle: true, // true means software experience is shown
        blockHeight: -1,
      }
    },

    mounted: function() {

    },
    methods: {
      toggleTables: function() {
        this.tableToggle = !this.tableToggle;
      },
      handleHeight(newHeight) {
        if (this.tableToggle) {
          this.blockHeight = newHeight + this.$refs.softwareText.clientHeight + this.$refs.buttonRow.clientHeight;
        }
        else {
          this.blockHeight = newHeight + this.$refs.localizationText.clientHeight + this.$refs.buttonRow.clientHeight;
        }
      },
      onNewHeight(newHeight) {
        this.blockHeight = newHeight;
      }
    }
  }
</script>

<style scoped>
  button[disabled] { 
    pointer-events: none;
  }
</style>