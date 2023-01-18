<template>
  <div id="aboutview-main">
    <h1>This is an about page</h1>
    
    <div class="math">
      <Math :formula="formula" />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      formula: 'e^x = \\sum\\limits_{n=0}^{\\infty} \\frac{x^n}{n!}'
    }
  }
}
</script>

<style scoped>

  #aboutview-main {
    text-align: center;
  }
  
  .math {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 5em;
    background-color: v-bind('$boldGreen');
    padding: 20px;
    height: 3.5em;
  }
  
  @media only screen and (max-width: 600px) {
    .math {
      font-size: initial;
      font-size: 2em;
    }
  }
</style>
