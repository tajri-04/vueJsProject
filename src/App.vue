<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header.vue'
export default {
    components:{
      'app-header':Header
    },
  data () {
    return {
    }
    }
}
</script>

<style scoped>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
