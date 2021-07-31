import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import dotenv from 'dotenv'
import YoutubeCard from './components/YoutubeCard.vue'

import VueYoutube from 'vue-youtube'
import VueGoogleApi from 'vue-google-api'

import Vuex from 'vuex'

dotenv.config()
require('dotenv').config()

Vue.use(ViewUI)
Vue.use(VueYoutube)
Vue.use(Vuex)
Vue.use(VueGoogleApi, {
  apiKey: process.env.VUE_APP_YOUTUBE_API,
  clientId: process.env.VUE_APP_CLIENT_ID,
  scope: 'https://apis.google.com/js/client.js',
  discoveryDocs: ['https://apis.google.com/js/client.js']
})

Vue.component('YoutubeCard', YoutubeCard)

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
