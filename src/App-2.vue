<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header-1.vue';
  import Footer from './components/Footer.vue';
  import Ninjas from './components/Ninjas.vue';
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas
  },
  data () {
    return {
      ninjas:[
        {name:'Ryo',speciality:'Vue Componenets',show:false},
        {name:'Crystal',speciality:'HTML wyzardy',show:false},
        {name:'Hitoshi',speciality:'click events',show:false},
        {name:'Tango',speciality:'conditionnals',show:false},
        {name:'Kimi',speciality:'Webpack',show:false},
        {name:'yoshi',speciality:'Data Diggin',show:false},
      ],
      title:'Vue ninjas'
    }
  },
  methods:{
    updateTitle(updatedTitle){
     this.title =updatedTitle;
    }
  }
}
</script>

<style scoped>
</style>
