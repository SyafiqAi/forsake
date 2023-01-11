<template>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
    props: ["modelValue"],
    emits: ["update:modelValue"],
};
</script>

<style lang="scss" scoped>
textarea {
    resize: none;
    display: block;
    padding: 10px;
    border-radius: 10px;
    height: 100%;
    width: 100%;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:focus {
    outline-color: #42b983;
    }
}
</style>