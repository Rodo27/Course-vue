<template>
  {{$route.params.id}} --- {{task}}
  
  <form @submit.prevent="updateTask(task)">
    <Inputs :task="task" />
  </form>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Inputs from '../components/Inputs.vue'
export default {

    computed: {
        ...mapState(['task']),
    },
    methods: {
        ...mapActions(['getTask', 'updateTask']),
    },
    created () {
        this.getTask(this.$route.params.id)
    },
    components: {
        Inputs
    },

}
</script>

<style>

</style>