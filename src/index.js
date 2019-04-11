import Vue from 'vue'
import App from './pages/app.vue'
import store from './store'

import './styles/global.scss'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})
