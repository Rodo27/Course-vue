import { createStore } from 'vuex'

export default createStore({
  state: {
    cont: 100
  },
  getters: {
  },
  mutations: {
    add(state, payload){
      state.cont += payload
    },
    remove(state, payload){
      state.cont -= payload
    }
  },
  actions: {
    actionAdd({commit}){
      commit('add', 50)
    },
    actionRemove({commit}, num){
      commit('remove', num)
    },
    actionButton({commit}, object){
      object.status ? commit('add', object.num) : commit('remove', object.num)

    }
  },
  modules: {
  }
})
