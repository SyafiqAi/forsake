<template>
  <div id="hello-world-main">

    <TextArea v-model="formula" height='100px' width='500px' />
    <br />
    <br />

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#hello-world-main {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  #tarea {
    width: 80vw;
  }
}

</style>
