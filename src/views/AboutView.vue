<template>
  <div id="aboutview-main">
    <h1>About Forsake</h1>

    <div class="content">
      <div class="math">
        <Math :formula="formula" />
      </div>

      <div class="info">
          Made with Vue.js <img class="" style="height: 1em" src="../assets/vue_logo.png" /> <br />
        Math displayed with <span ref="katex"></span> <br />
        Hosted on Vercel
      </div>
    </div>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      formula: '\\mathcal{L} \\{f(t)\\} = \\int_{0^-}^\\infty e^{-st}f(t)\\ dt'
    }
  },
  mounted() {
    let formula = '\\KaTeX'
    let element = this.$refs.katex;
    katex.render(formula, element, {
      throwOnError: false,
      displayMode: false,
    });

  }
}
</script>

<style lang="scss" scoped>

  #aboutview-main {
    > h1 {
      text-align: center;
    }

    > .content {
      
      .math {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 3em;
        background-color: v-bind('$boldGreen');
        padding: 20px;
        height: 3.5em;
      }

      > .info {
        text-align: center;
        margin: 50px;
      }
      
      @media only screen and (max-width: 600px) {
        flex-direction: column;
        .math {
          font-size: initial;
          font-size: 1.5em;
        }
      }
    }
  }
  
</style>
