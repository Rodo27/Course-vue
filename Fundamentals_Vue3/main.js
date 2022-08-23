const app = Vue.createApp({
    data(){
        return {
            message : 'My Bank Vue 2!',
            amount: 0,
            link :  'https://youtube.com/bluuweb',
            status: !true,
            services : ['tranfers', 'pays', 'deposit'],
            disabled : false

        }
    },
    methods: {
        addCash(){
            this.disabled = false
            this.amount += 100
        },
        removeCash(value){
            if(this.amount === 0){
                alert("No Cash")
                this.disabled = true
                return 
            }

            this.amount -= value
        }

    },
    computed:{
        colorAmount(){
            return this.amount > 500 ? 'text-success' : 'text-danger'
        }
    }
})