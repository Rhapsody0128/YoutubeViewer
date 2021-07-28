import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import dotenv from 'dotenv'
import YoutubeCard from './components/YoutubeCard.vue'

dotenv.config()
require('dotenv').config()

Vue.use(ViewUI)

Vue.component('YoutubeCard', YoutubeCard)

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
