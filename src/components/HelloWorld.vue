<template>
  <div id="hello-world-main">

    <div class="tarea-container">
      <TextArea v-model="formula" />
    </div>

    <br /><br />
    
    <vue-mathjax :formula="formula" />
    <br />
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
    }
  }
};
</script>

<style lang="scss" scoped>

#hello-world-main {
  text-align: center;

  > .tarea-container {
    margin: auto;
    justify-content: center;
    height: 100px;
    width: 500px;
  }

  @media only screen and (max-width: 600px) {
    .tarea-container {
      width: 80vw;
    }
  }
  
}


</style>
