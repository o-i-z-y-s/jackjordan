import './styles/styles.css'
import Vue from 'vue'
import AllContent from './AllContent.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AllContent), 
}).$mount('#all-content')
