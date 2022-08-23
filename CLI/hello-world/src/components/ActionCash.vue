<template>
    <button @click="action" :disabled="disabled">{{text}}</button>
</template>

<script>
export default {
    props:{
        text : String,
        disabled : {
            type: Boolean,
            default: false
        }
    },
    methods: {
        action(){
            this.$emit('action')
        }
    }
}
</script>

<style>

</style>