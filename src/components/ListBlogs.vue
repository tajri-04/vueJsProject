<template>
  <div v-theme="'narrow'" id="show-blogs">
    <h1> list blog titles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <blog v-bind:blog="blog"></blog>
    </div>
  </div>
</template>
<script>
  import Blog from './blog.vue';
  import SearchMixing from '../mixins/searchMixing';
  export default{
    components:{
      'blog':Blog
    },
    data(){
      return {
        blogs : [],
        search :''
      }
    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
        (data) => {
          this.blogs = data.body.slice(0,10);
        }
      )
    },
    computed:{
    },
    mixins:[SearchMixing]
  }
</script>
<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

</style>
