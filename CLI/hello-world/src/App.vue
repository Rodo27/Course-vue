<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Title text="My Bank 2.0"></Title>
    <Account></Account>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Title from './components/Title'
import Account from './components/Account'

export default {
  name: 'App',
  components: {
    //HelloWorld
    Title,
    Account
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
