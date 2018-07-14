import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/bootstrap/css/bootstrap.min.css'
import axios from 'axios'
import "./mock/mock";
import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
