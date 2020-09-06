<template>
    <div>
        <stock  v-for="stock in stocks" :stock="stock" :key="stock.id"/>
    </div>
</template>
<script>
import stock from  './stock.vue';
export default {
   
    components:{
        stock
    },
    computed :{
        stocks(){
            return this.$store.getters.stocks;
        }
    }
}
</script>