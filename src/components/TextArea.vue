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
    color: v-bind('$grey');
    font-weight: bold;
    background-color: v-bind('$darkBlue');
    border: 1px solid v-bind('$grey');


    

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border: 1px solid #ffffff00;
      outline: 1px solid v-bind('$lightGreen');

    }
}
</style>