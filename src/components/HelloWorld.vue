<template>
  <div class="hello">

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

body {
  text-align: center;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
