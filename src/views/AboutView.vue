<template>
  <div class="about">
    <h1>This is an about page</h1>
    
    <div class="math">
      <vue-mathjax :formula="formula" />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      formula: '$$e^x = \\sum\\limits_{n=0}^{\\infty} \\frac{x^n}{n!}$$'
    }
  }
}
</script>

<style scoped>
  :deep(.MathJax)  {
    color: white;
    font-size: 10em;
  }
  .math {
    background-color: #42b983;
    padding: 50px;
  }
  
  @media only screen and (max-width: 600px) {
    :deep(.MathJax)  {
      color: white;
      font-size: initial;
    }
  }
</style>
