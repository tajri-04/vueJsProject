import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


import Routes from './routes'



export const bus =new Vue();
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
routes:Routes,
  mode:'history'
});
/*
custom directives*/
/*Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color ="#"+Math.random().toString().slice(2,8);
  }
});*/
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth="1200px";
    }
    else if(binding.value == 'narrow'){
      el.style.maxWidth="560px";
    }
  }
});

/*filters*/
/*Vue.filter('to-uppercase',(value)=> {
  return value.toUpperCase();
  });*/
/*Vue.filter('snippet',(value)=> {
 return value.slice(10,100)+'....';
})*/

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
