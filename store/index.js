
import Vuex from 'vuex'

let store = () => new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    changeCount(state, data) {
        state.count = data
    }
  },
//   getters: {
//     getCount(state) {
//         return state.count
//     }
//   },
//   actions: {
//     fetchCount({commit, state}) {
//         commit('changeCount')
//     }
//   }
})

export default store
