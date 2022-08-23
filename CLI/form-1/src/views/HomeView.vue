<template>
  <form @submit.prevent="processForm">
    <input type="text" class="form-control my-2" placeholder="Introduce your name" v-model.trim="task.name">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="checkbox1" value="javascript" v-model="task.courses">
      <label class="form-check-label" for="checkbox1">JavaScript</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="checkbox1" value="node.js" v-model="task.courses">
      <label class="form-check-label" for="checkbox1">Node.js</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="checkbox1" value="vue.js" v-model="task.courses">
      <label class="form-check-label" for="checkbox1">Vue.js</label>
    </div>

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input type="radio" id="radio_1" class="form-check-input" value="urgent" v-model="task.status">
        <label for="radio_1" class="form-check-label" >Urgent</label>
      </div>
      <div class="form-check form-check-inline">
        <input type="radio" id="radio_2" class="form-check-input" value="relax" v-model="task.status">
        <label for="radio_2" class="form-check-label" >Relax</label>
      </div>
    </div>

    <div class="mt-2">
      <input type="number" class="form-control" v-model="task.number">
    </div>
 
    <button class="btn btn-primary mt-5 btn-block" :disabled="disabledButton">Process</button>
  </form>     
  <hr>
  <h3>{{task}}</h3>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
   
  },
  data() {
    return {
      task:{
        name: '',
        courses: [],
        status: '',
        number: 0
      },
    }
  },
  methods: {
    processForm() {
      console.log(this.task)
      if(this.task.name.trim() === ""){
        alert("Name is empty")
        return
      }

      console.log('Fields Form are not empty')

      this.task = {
        name: '',
        courses: [],
        status: '',
        number: 0
      }
        
    }
  },
  computed: {
    disabledButton() {
      return this.task.name.trim() === "" ? true : false 
    }
  },
}
</script>
