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
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
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
    background-color: rgb(7, 194, 201);
    padding: 50px;
  }
  
  @media only screen and (max-width: 600px) {
    :deep(.MathJax)  {
      color: white;
      font-size: initial;
    }
  }
</style>
