import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutation'
Vue.use(Vuex)

const state = {
  locationid: '323',
  locationtext: '厦门',
  onlist: [],  // 正在热映的数组
  soonlist: [], // 即将上映的数组
  attention: [],
  detail: null,
  commentsplus: [], // 热评
  banner: [], // banner广告图
  commentsmini: [] // 短评
}

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state
})