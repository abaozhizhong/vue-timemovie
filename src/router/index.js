import Vue from 'vue'
import Router from 'vue-router'
import area from '../pages/area/area'
import home from '../pages/home/home'
import detail from '../pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/area',
      name: 'area',
      component: area
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
