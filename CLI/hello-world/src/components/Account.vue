<template>
    <div>
        <h2>Account Type : {{ type}}</h2>
        <h2>Cash : {{cash}}</h2>
        <h2>Account {{ status ? 'Active' : 'Inactive'}}</h2>
        <div v-for="(service, index) in services" :key="index">
            {{index + 1 }} ---{{ service }}
        </div>

        <hr>

        <ActionCash  text="Add Cash" @action="add"  />
        <ActionCash text="Remove Cash" @action="remove" :disabled="disabled" />
    </div>
</template>

<script>

import ActionCash from './ActionCash.vue'
export default {
    data() {
        return {
            cash: 1000,
            type: 'Visa',
            status: true,
            services : ['tranfers', 'pays', 'deposit'],
            disabled : false
        }
    },
    components:{
        ActionCash,
    },
    methods:{
        add(){
            this.disabled = false
            this.cash += 100
        },
        remove(){
           
            if(this.cash === 0){
                this.disabled = true
                return 
            }
            this.cash -= 100

        }
    }
}
</script>

<style>

</style>