<template>
  <div id="add-blog">
<h2>Add a new blog Post</h2>
    <form v-if="!submitted">
      <label>Blog title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label >Blog content:</label>
      <textarea v-model.lazy="blog.content" ></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <label >Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
       thanks for adding your post
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author : {{blog.author}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
      blog:{
        title:'',
        content:'',
        categories:[],
        author:''
      },
      authors:['the net Ninja','The angular avenger','the vue vincator'],
        submitted : false
      }
    },
    methods:{
      post(){
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
          title : this.blog.title,
          body : this.blog.content,
          uderId : 1
        }).then((data)=>{
          console.log(data);
          this.submitted = true;
        })
      }
    }
  }
</script>
<style scoped>
  #add-blog *{
     box-sizing: border-box;
  }
  #add-blog{
    margin : 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea{
    display: block;
    width: 100%;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin :30px 0;
  }
  h3{
    margin-top: 10px;
  }
  #checkboxes input {
    display: inline-block;
    margin-right: 10px ;
  }
  #checkboxes label {
    display: inline-block;
  }


</style>
