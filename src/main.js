import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.searchApiUrl = process.env.SEARCH_API_URL;


new Vue({
  render: h => h(App),
}).$mount('#app')
