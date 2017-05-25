import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutation'
Vue.use(Vuex)

const state = {
  locationid: '',
  locationtext: '请选择'
}

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state
})