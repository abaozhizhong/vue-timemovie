// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/rem'
import Fastclick from 'fastclick'
import store from './store/state'
import Animate from 'animate.css'
import * as filters from './common/filters.js'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        Fastclick.attach(document.body)
    }, false)
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
