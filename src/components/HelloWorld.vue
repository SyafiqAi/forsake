<template>
  <div id="hello-world-main">

    <textarea id="tarea" v-model="formula"/>
    <br />
    <br />

    <vue-mathjax :formula="formula" />
    <br />
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#hello-world-main {
  text-align: center;
}

#tarea {
  padding: 10px;
  height: 100px;
  width: 500px;
}

@media only screen and (max-width: 600px) {
  #tarea {
    width: 80vw;
  }
}

</style>
