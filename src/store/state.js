import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutation'
Vue.use(Vuex)

const state = {
  locationid: '290',
  locationtext: '北京',
  onlist: [],  // 正在热映的数组
  soonlist: [] // 即将上映的数组
}

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state
})