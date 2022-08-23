<template>
  <button @click="actionButton({status, num:50})">{{setTitle}}</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        status: Boolean,
    },
    computed: {
        setTitle() {
            return this.status ? 'Add Cash' : 'Remove Cash' 
        }
    },
    methods: {
        ...mapActions(['actionButton']),
        name() {
            
        }
    },
}
</script>

<style>

</style>