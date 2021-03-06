// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App'
import router from './router'
//import {routes} from './routes';
import store  from './store/store';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root ='https://vuejs-stock-tradar-ae93d.firebaseio.com/';

Vue.filter('currency' , (value) =>{
  return '$' + value.toLocaleString();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
