<template lang="">
    <div>
        <Title text="Route with params" />
        <h2>{{article.title}}</h2>
        <p>{{article.id}}.{{article.body}}</p>
        
    </div>
</template>
<script>
import Title from '@/components/Title' 
export default {
  name: 'Article',
  components: {
   Title
  },
  data() {
    return {
        article: {}
    }
  },
  methods: {
    async getArticle() {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
            const object = await data.json()
            this.article = object
        } catch (error) {
            console.log()
        }
    }
  },
  created () {
    this.getArticle()
  },
}
</script>
<style lang="">
    
</style>