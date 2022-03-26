<template>
  <div id="booklist">
    <div v-for="type in bookList" :key="type.id">
      <p>As {{ type.role }}:</p>
      <ul>
        <li v-for="book in type.series" :key="book.id">
          {{ book }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import bookListJSON from './JSON/bookList.json';

  export default {
    name: 'BookList',
      props: {
        
      },
      data: function() {
        return { 
          bookList: bookListJSON,
        }
      },

      mounted: function() {
        
      },
  }
</script>

<style scoped>
  #booklist {
    background: rgba(1, 0, 70, 0.3);
    border: 1px solid white;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  #booklist li {
    font-style: italic;
    padding-right: 10px;
  }
  ul {
    margin: 0;
    padding-bottom: 6px;
  }
  p {
    margin: 0;
    padding-top: 6px;
    padding-left: 10px;
  }
</style>