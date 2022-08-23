app.component('footer-bank', {
    props:['amount'],
    template :  /*html*/
        `<div class="bg-dark py-3 mt-2 text-white">
            <h3>{{text}} --- {{amount}}</h3>
        </div>`
    ,
    data(){
        return {
            text: 'Footer in my component'
        }
    }

})