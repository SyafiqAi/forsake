<template>
  <math-jax :latex="formula" :block="true"/>
</template>

<script>
export default {
    props: ['formula'],
}
</script>