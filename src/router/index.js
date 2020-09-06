import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home';
import portfolio from '@/components/portfolio/portfolio';
import stocks from '@/components/stocks/stocks';


Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path:'/', 
      name : home,
      component: home 

    },
    {path:'/portfolio',
    name:portfolio,
     component:portfolio},

     {path:'/stocks',
     name:stocks,
      component:stocks}
  ]
})

