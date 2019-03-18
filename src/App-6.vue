<template>
  <div>
   <add-blog></add-blog>
  </div>
</template>

<script>
  import AddBlog from './components/AddBlog.vue';
  import ShowBlogs from './components/ShowBlogs.vue';
export default {
  components :{
    'add-blog':AddBlog,
    'show-blogs':ShowBlogs
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
