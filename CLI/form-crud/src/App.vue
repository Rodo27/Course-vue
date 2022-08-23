<template>
  <Navbar />
  <div class="container">
    <h1 class="my-5">Form CRUD</h1>
    <router-view/>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>