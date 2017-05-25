import * as types from './mutationtype'

export default {
  [types.SETLOCATION] (state, playload) {
    state.locationid = playload.id
    state.locationtext = playload.text
  }
}