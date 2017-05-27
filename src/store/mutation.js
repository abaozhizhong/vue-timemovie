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
        state.attention = res.data.attention
        // console.log(res.data.attention)
      })
  },
  [types.SETATTENTION] (state, playload) {
    state.attention = playload
  },
  [types.SETDETAIL] (state, playload) {
    api.getdetail(playload.locationid, playload.moviesid)
      .then(res => {
        state.detail = res.data
        console.log(res.data)
      })
  }
}