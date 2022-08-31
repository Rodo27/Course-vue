<template>
    {{tasks}}
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">status</th>
        <th scope="col">Number</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <th >{{task.id}}</th>
        <td>{{task.name}}</td>
        <td>{{task.courses.join(', ')}}</td>
        <td>{{task.status}}</td>
        <td>{{task.number}}</td>
        <td>
            <button class="btn btn-danger" @click="removeTask(task.id)">Delete</button>
            <button class="ml-1 btn btn-primary">Edit</button>
        </td>
      </tr>

    </tbody>
  </table>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    components: {

    },
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
        ...mapActions(['removeTask'])
    },
}
</script>

<style></style>
