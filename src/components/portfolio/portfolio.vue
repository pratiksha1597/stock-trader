<template>
    <div>
        <stock v-for="stock in stocks" :stock="stock" :key="stock.id"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import  stock from './stock';
export default {
    computed :{
        ...mapGetters({
            stocks :'stockPortfolio'
        })

    },
    components:{
         stock
    }
    
}
</script>

