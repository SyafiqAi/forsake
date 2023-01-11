// Home.vue

<template>
  <h1>Home</h1>
  <img alt="Vue logo" src="../assets/logo.png" />
  <div><strong>Vue3 Mathjax</strong></div>
  <div>Made by Syafiq 2023</div>
  <br />
  <br />
  <HelloWorld msg="hellow"/>
  
</template>

<script>
  import HelloWorld from '../components/HelloWorld.vue'
  export default {
    components:{
      HelloWorld,
    }
  }
</script>