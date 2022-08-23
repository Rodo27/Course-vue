<template>
  <button @click="actionRemove(50)">Remove Cash</button>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    methods: {
        ...mapMutations(['remove']),
        ...mapActions(['actionRemove']),
        name() {
            
        }
    },
    computed: {
        name() {
            return this.data 
        }
    },
}
</script>

<style>

</style>