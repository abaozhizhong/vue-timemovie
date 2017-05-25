import Vue from 'vue'
import Router from 'vue-router'
import area from '../pages/area/area'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: area,
      component: area
    }
  ]
})
