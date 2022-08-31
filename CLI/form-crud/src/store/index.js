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
    },
    removeTask(state, payload){
      state.tasks = state.tasks.filter(task => task.id !== payload)
    }
  },
  actions: {
    setTasks({commit}, task){
      commit('setTask', task)
    },
    removeTask({commit}, idTask){
      commit('removeTask', idTask)
    }
  },
  modules: {
  }
})
