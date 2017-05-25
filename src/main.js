// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/rem'
import Fastclick from 'fastclick'

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
  template: '<App/>',
  components: { App }
})