<template>
<div>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :style="
        (width ? 'width:' + width + ';': '') + 
        (height ? 'height:' + height + ';' : '')
    "
  />
 </div>
</template>

<script>
export default {
  props: [
    'modelValue', 
    'height',
    'width'
    ],
  emits: ['update:modelValue'],
}
</script>

<style lang="scss" scoped>

textarea {
  padding: 10px;
  resize: none;
  border-radius: 10px;

  &:focus {
    outline-color: #42b983;
  }
  
}

</style>