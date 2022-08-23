<template>
  <div class="about">
    <h1>This is an about page</h1>
     <h1>My Cont: {{$store.state.cont}}</h1>
     <input type="text" v-model="text">
     <h2>{{text}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
}
</script>
