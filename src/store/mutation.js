import * as types from './mutationtype'
import api from './api'
export default {
  [types.SETLOCATION] (state, playload) {
    state.locationid = playload.id
    state.locationtext = playload.text
  },
  [types.SETONLIST] (state, playload) {
    api.getonlist(playload)
      .then(res => {
        state.onlist = res.data.ms
      })
  },
  [types.SETSOONLIST] (state, playload) {
    api.getsoonlist(playload)
      .then(res => {
        state.soonlist = res.data
      })
  }
}