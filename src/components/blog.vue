<template>
<div>
  <router-link v-bind:to="'/blog/'+blog.id" >
    <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
  </router-link>
  <article >{{blog.body | snippet}}</article>
</div>
</template>
<script>
  export default{
    props:{
      blog : {
        required : true
      }
    },
  filters :{
    toUppercase : (value)=> value.toUpperCase(),
    'snippet':(value)=> value.slice(10,100)+'....'

  },
    directives:{
      'rainbow':{
      bind(el,binding,vnode){
       // el.style.color ="#"+Math.random().toString().slice(2,8);
        el.style.color = 'red';
      }
    }
    }
  }

</script>
<style>

</style>
