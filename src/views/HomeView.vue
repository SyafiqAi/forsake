// Home.vue

<template>
<div id="homeview-main">
    <h1>
      <img alt="Bolt logo" src="../assets/bolt.svg" /> 
      FORSAKE 
    </h1>

  <img alt="Bolt logo" src="../assets/bolt.svg" />
  <!-- <div><strong>Vue3 Mathjax</strong></div> -->
  <!-- <div>Made by Syafiq 2023</div> -->
  <br />
  <br />
  <HelloWorld />
</div>
  
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>

#homeview-main {
  text-align: center;
    h1 {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 0.7em;
      }
    }
  > img {
    margin: 20px;
  }
}

</style>