<template>
  <div ref="localizationTable">
    <div id="buttons-row">
      <button class="btn btn-primary" @click="toggleBookList()">List of Credits</button>
    </div>
    <div id="bookList" :style="bookListStyle">
      <BookList ref="bookList" />
    </div>
    <div ref="experience" class="container" v-for="company in localizationExperienceData" :key="company.id">
      <div class="row paper">

        <div class="col-sm-4 col-lg-3">
          <div class="workplace">
            {{ company.name }}
          </div>
          <div class="location">
            &#128205; {{ company.location }}
          </div>
        </div>

        <div class="col-sm">
          <div class="subpaper" v-for="role in company.roles" :key="role.id">
            <div class="job">
              {{role.title}}
            </div>
            <div class="dates">
              {{role.dates}}
            </div>
            <div class="desc" v-for="ind in role.desc.length" :key="ind.id">
              <li>{{ role.desc[ind-1] }}</li>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import resumeData from './JSON/resumeData.json'
  import BookList from './BookList.vue'

  export default {
  components: { BookList },
    name: 'LocalizationTable',
    props: {
      handleHeight: {
        type: Function,
        required: true,
      }
    },
    data: function() {
      return { 
        localizationExperienceData: JSON,
        tableHeight: -1,
        showBookList: false,
        bookListStyle: {},
        bookListHeight: 0,
      }
    },

    mounted: function() {
      this.localizationExperienceData = resumeData.experienceData.localization;
      this.bookListHeight = this.$refs.bookList.$el.clientHeight;
      this.bookListStyle = { height: '0px', overflow: 'hidden' }
      window.addEventListener("resize", this.updateHeight);
    },

    updated: function() {
      setTimeout(() => { this.updateHeight(); }, 200); // Apparently animations don't play nice with fetching clientHeight.
    },

    created () { 
      window.addEventListener('load', this.updateHeight);
    },

    methods: {
      toggleBookList() {
        this.showBookList = !this.showBookList;
        if (this.bookListHeight !== this.$refs.bookList.$el.clientHeight) { this.bookListHeight = this.$refs.bookList.$el.clientHeight; }

        if (this.showBookList) {
          this.bookListStyle = { height: this.bookListHeight+'px', margin: '0 0 10px 0' };
        }
        else {
          this.bookListStyle = { height: '0px', margin: '0 0 0 0', overflow: 'hidden' };
        }
      },
      updateHeight() {
        if (this.showBookList && this.bookListHeight !== this.$refs.bookList.$el.clientHeight) {
          this.bookListHeight = this.$refs.bookList.$el.clientHeight;
          this.bookListStyle = { height: this.bookListHeight+'px', margin: '0 0 10px 0' };
        }
        this.tableHeight = this.$refs.localizationTable.clientHeight;
        this.handleHeight(this.tableHeight);
      }
    },
  }
</script>

<style scoped>
  .paper {
    margin-bottom: 8px;
  }
  .subpaper {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  button {
    margin: auto;
  }
  #buttons-row {
    padding-top: -50px;
  }
  #bookList {
    transition: 0.2s;
  }
  #credit {
    margin: 5px;
  }
  #credit a {
    font-size: 0.9em;
    font-style: italic;
  }
  #credit p {
    font-style: italic;
  }

  @media (max-width: 565px) {
    #credit {
      margin-top: 0px;
    }
  }
</style>