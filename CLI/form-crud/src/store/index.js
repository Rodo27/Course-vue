import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    task:{
      id: '',
      name: '',
      courses: [],
      status: '',
      number: 0
    }
  },
  getters: {
  },
  mutations: {
    setTask(state, payload){
      state.tasks.push(payload)
    }
  },
  actions: {
    setTasks({commit}, task){
      commit('setTask', task)
    }
  },
  modules: {
  }
})
