<template>
  <Navbar />
  <div class="container">
    <h1 class="my-5">Form CRUD</h1>
    <router-view/>
  </div>
  
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['loadLocalStorage'])
  },
  created () {
    this.loadLocalStorage()
  },
}
</script>