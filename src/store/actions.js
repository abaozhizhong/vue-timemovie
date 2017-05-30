import * as types from './mutationtype'
export default {
  setlocation ({commit}, playload) {
    commit(types.SETLOCATION, playload)
  },
  setonlist ({commit}, playload) {
    commit(types.SETONLIST, playload)
  },
  setsoonlist ({commit}, playload) {
    commit(types.SETSOONLIST, playload)
  },
  setattention ({commit}, playload) {
    commit(types.SETATTENTION, playload)
  },
  setdetail ({commit}, playload) {
    commit(types.SETDETAIL, playload)
  },
  setcommentsplus ({commit}, playload) {
    commit(types.SETCOMMENTSLPUS, playload)
  },
  setbanner ({commit}, playload) {
    commit(types.SETBANNER, playload)
  },
  setcommentsmini ({commit}, playload) {
    commit(types.SETCOMMENTSMINI, playload)
  }
}