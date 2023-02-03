<template>
  <span ref="katex"></span>
</template>

<script>
export default {
    props: ['formula', 'displayMode'],
    mounted() {
      this.renderFormula();
    },
    methods: {
      renderFormula() {
        let element = this.$refs.katex;
        katex.render(this.formula, element, {
          throwOnError: false,
          displayMode: this.displayMode || true,
          strict: false,
        });
      }
    },
    watch: {
      formula() {
        this.renderFormula();
      }
    }
}
</script>
<style lang="scss" scoped>
:deep(.katex-display) {
  margin: 0;
}
</style>