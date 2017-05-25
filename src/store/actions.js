import * as types from './mutationtype'
export default {
  setlocation ({commit}, playload) {
    commit(types.SETLOCATION, playload)
  }
}