<template>
  <form @submit.prevent="processForm">
    <Inputs :task="task" />
  </form>     
  <hr>
  <TasksList />
</template>

<script>
import Inputs from '../components/Inputs.vue'
import TasksList from '../components/TasksList.vue'
import {mapActions, mapState} from 'vuex'
const shorid = require('shortid')

export default {
  name: 'HomeView',
  components: {
    Inputs,
    TasksList
  },
  data() {
    return {
      task:{
        id: '',
        name: '',
        courses: [],
        status: '',
        number: 0
      },
    }
  },
  methods: {
    ...mapActions(['setTasks']),
    processForm() {
      console.log(this.task)
      if(this.task.name.trim() === ""){
        alert("Name is empty")
        return
      }

      console.log('Fields Form are not empty')

      //generate ID

      this.task.id = shorid.generate()
      //console.log(this.task.id)
      
      this.setTasks(this.task)

      this.task = {
        id: '',
        name: '',
        courses: [],
        status: '',
        number: 0
      }
        
    }
  },
  computed: {
    ...mapState(['tasks']),
    name() {
      return this.data 
    }
  },
  
}
</script>
