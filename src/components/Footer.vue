<template>
<footer>
  <p>{{copyright}} {{title}}</p>
</footer>
</template>
<script>
  import {bus} from '../main';
  export default{
    props :{
      title :{
        type:String
      }
    },
    data(){
      return{
        copyright:"Copyright 2019"
      }
    },
    created(){
      bus.$on('changeTitle',(data)=>{
        this.title = data;
      })
    }
  }
</script>
<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }

</style>
