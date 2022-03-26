<template>
  <content-block header="Experience" :updatedHeight="blockHeight">
    <template v-slot:preamble>
      <div id="buttons-row" ref="buttonRow">
        <button class="btn btn-primary" id="software-btn" :disabled="tableToggle" @click="toggleTables()">Software</button>
        <button class="btn btn-primary" id="localization-btn" :disabled="!tableToggle" @click="toggleTables()">Localization</button>
      </div>
      <div id="softwareText" ref="softwareText" v-show="tableToggle">
        Five years experience working in software companies, with a combined 2 years in development, 3.5 years in QA, and 2 years in technical writing.
      </div>
      <div id="localizationText" ref="localizationText" v-show="!tableToggle"></div>
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
    }
  }
</script>

<style scoped>
  #softwareText {
    padding-bottom: 10px;
  }
  #localizationText {
    padding-bottom: 10px;
  }
  button[disabled] { 
    pointer-events: none;
  }
</style>