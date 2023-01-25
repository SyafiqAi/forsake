<template>
  <input
    :value="modelValue"
    @input="input"
  />
</template>

<script>
export default {
    props: ['modelValue','invalidValues'],
    emits: ['update:modelValue'],
    data() {
        return {
            isValid: this.checkValid(),
        }
    },
    mounted() {
        
    },
    methods: {
        checkValid() {
            if(this.invalidValues){
                if(!Array.isArray(this.invalidValues)){
                    this.invalidValues = [this.invalidValues];
                }
                for(let i = 0 ; i < this.invalidValues.length ; i++) {
                    let invalid = this.invalidValues[i].toString();
                    let thisVal = this.modelValue.toString();
                    if(thisVal === invalid) {
                        return false;
                    }
                }
            }
            return true;
        },
        input(e) {
            this.$emit('update:modelValue', e.target.value);
        },
    },
    computed: {
        width() {
            let defaultWidth = '1ch';
            if(!this.modelValue)
                return defaultWidth;
            
            let strLength = this.modelValue.toString().length;
            let unit = 'ch';
            return strLength + unit;
        },
        inputOutline() {
            let validOutline = 'none';
            let invalidOutline = '1px solid '+ this.$altRed;
            if(this.isValid){
                return validOutline;
            } else {
                return invalidOutline;
            }
        },
        inputFocusOutline() {
            let validOutline = '1px solid' + this.$boldGreen;
            let invalidOutline = '1px solid' + this.$altRed;
            if(this.isValid){
                return validOutline;
            } else {
                return invalidOutline;
            }
        }
    },
    watch: {
        modelValue() {
            this.isValid = this.checkValid();
        }
    }
}
</script>

<style lang="scss" scoped>
    input {
        font-family:'Courier New', Courier, monospace;
        font-weight: bold;
        width: v-bind('width');
        // min-width: 20px;
        text-align: center;
        background-color: v-bind('$darkBlue');
        color: v-bind('$grey');
        border: none;
        outline: v-bind('inputOutline');
        &:focus {
            border: none;
            outline: v-bind('inputFocusOutline');
        }
    }
</style>