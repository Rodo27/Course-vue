<template lang="">
    <div>
        <Title text="My Blog" />
        <!-- <button @click="consumeAPI">Consume API</button> -->
        <div>
            <ul>
                <li v-for="(item) in arrayBlog" :key="item.id">
                    <router-link :to="`/blog/${item.id}`">{{item.id}}---{{item.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

import Title from '../components/Title'
export default {
    components:{
        Title
    },
    data() {
        return {
            arrayBlog: []
        }
    },
    methods: {
        async consumeAPI(){
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                this.arrayBlog = array
            } catch (error) {
                console.log()
            }
        }
    },
    created () {
        this.consumeAPI()
    },
}
</script>
<style lang="">
    
</style>