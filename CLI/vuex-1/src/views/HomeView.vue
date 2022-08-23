<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 :style="colorCont">{{title}}: {{cont}}</h1>
    <button @click="actionAdd">Add Cash</button>
    <BtnRemove  />

    <hr>
    <ButtonAction :status="true" />
    <ButtonAction :status="false" />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapMutations, mapActions} from 'vuex'
import BtnRemove from '../components/BtnRemove'
import ButtonAction from '../components/ButtonAction'
export default {
  name: 'HomeView',
  components: {
    BtnRemove,
    ButtonAction
  },
  data() {
    return {
      title: 'My Count Vuex'
    }
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['actionAdd']),
    name() {
      
    }
  },
  computed:{
    ...mapState(['cont']),
    colorCont(){
      return [this.cont > 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
}
</script>
