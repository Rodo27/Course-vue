<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Title text="Home Page" />
  </div>
</template>

<script>
// @ is an alias to /src/* 

//import HelloWorld from '@/components/HelloWorld.vue' 
import Title from '@/components/Title' 


export default {
  name: 'Home',
  components: {
    //HelloWorld
    Title
  }
}
</script>
