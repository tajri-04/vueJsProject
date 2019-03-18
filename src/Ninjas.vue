<template>
  <div>
    <h1>tessssssssssst</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ninja}}</li>
    </ul>
  </div>

</template>
<script>
  export default {
    data (){
      return {
      ninjas:["Youshi","Mario","Ryo"]
      }
    }
  }
</script>
<style scoped>
  h1{
    color:red;
  }
</style>
