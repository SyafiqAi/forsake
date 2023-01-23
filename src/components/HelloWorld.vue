<template>
  <div id="hello-world-main">

    <div class="tarea-container">
      <TextArea v-model="formula" />
    </div>

    <div class="maths-container prevent-select">
      <div class="maths" @click="changeFormula()">
        <Math :formula="formula" />
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      formulaList: [''],
      formula: '',
      index: 0,
    }
  },
  mounted() {
    this.addFormulae();
    this.changeFormula();
  },
  methods: {
    addFormulae() {
      this.formulaList = [
        'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}',
        'e^x = \\sum\\limits_{n=0}^{\\infty} \\frac{x^n}{n!}',
        '\\sin^2(\\theta)+\\cos^2(\\theta) = 1',
        'f\'(x) = \\lim_{h \\rightarrow 0 } \\frac{f(x+h)-f(x)}{h}',
        '\\det \\left( \\begin{bmatrix}\na & b \\\\\nc & d \\\\\n\\end{bmatrix} \\right)\n= ad - bc',
      ];
    },
    changeFormula() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * this.formulaList.length);
      } while (this.index === randomIndex); 
      this.index = randomIndex;
      this.formula = this.formulaList[this.index];
    }
  },
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

  > .maths-container{
    display: flex;
    justify-content: center;
    align-items: center;
    > .maths {
      font-size: 1.15em;
      margin: 5px 30px;
      padding: 30px;
      // border: 1px solid red;
      border-radius: 10px;
      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.02);
        transition: 0.2s;
      }
    }
  }
  
}


</style>
