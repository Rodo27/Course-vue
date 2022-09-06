import { createStore } from 'vuex'
import router from '@/router'

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
    loadLocalStorage(state, payload){
      state.tasks = payload
    },
    setTask(state, payload){
      state.tasks.push(payload)
      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    },
    removeTask(state, payload){
      state.tasks = state.tasks.filter(task => task.id !== payload)
      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    },
    getTask(state, payload){

      if(!state.tasks.find(task => task.id === payload)){
        router.push('/')
        localStorage.setItem('tasks',JSON.stringify(state.tasks))
        return
      }

      state.task = state.tasks.find(task => task.id === payload)
    },
    updateTask(state, payload){
      state.tasks = state.tasks.map(task => task.id === payload.id ? payload : task)
      router.push('/')
    }

  },
  actions: {
    loadLocalStorage({commit}){
      if(localStorage.getItem('tasks')){
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        commit('loadLocalStorage', tasks)
        return
      }

      localStorage.setItem('tasks',JSON.stringify([]))
    },
    setTasks({commit}, task){
      commit('setTask', task)
    },
    removeTask({commit}, idTask){
      commit('removeTask', idTask)
    },
    getTask({commit}, idTask){
      commit('getTask', idTask)
    },
    updateTask({commit}, task){
      commit('updateTask', task)
    }
  },
  modules: {
  }
})
