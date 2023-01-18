<template>
    <div id="quadratic-equation-main">
        <h1>Quadratic Equation</h1>
        <!-- <TextArea /> -->
        <div class="user-input-container" :key="key">
            <div class="user-input-item">
                <input v-model="a" ref="a" tabindex="1"/> <Math formula='x^2' /><Math formula='\quad + \quad' />
                <input v-model="b" tabindex="2"/> <Math formula='x' /><Math formula='\quad + \quad' />
                <input v-model="c" tabindex="3"/> <Math formula='\quad = \quad 0' />
            </div>
            <div class="answer">
                <Math :formula='formula' />
            </div>
            <div class="answer">
                <Math :formula='formula' />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 1,
            b: 1,
            c: 1,

            key: 0,
        }
    },
    mounted() {
        this.$refs.a.focus();
    },
    computed: {
        formula() {
            let ans = parseInt(this.a) + parseInt(this.b) + parseInt(this.c);
            return `x = {-${this.b} \\pm \\sqrt{${this.b}^2-4(${this.a})(${this.c})} \\over 2(${this.a})} \\\\ = ${ans}`;
        }
    }
}
</script>

<style lang="scss" scoped>

#quadratic-equation-main {
    h1 {
        text-align: center;
    }
    input {
        font-family:'Courier New', Courier, monospace;
        font-weight: bold;
        width: 60px;
        text-align: center;
        background-color: v-bind('$darkBlue');
        color: v-bind('$grey');
        border: none;
        &:focus {
            outline: none;
            border: none;
            outline: 1px solid v-bind('$lightGreen');
        }
    }
    .user-input-container {
        // display: flex;
        // justify-content: center;
        > .user-input-item {
            > input {
                font-size: 1em;
                margin: 10px;
            }
            font-size: 1.5em;
            // width: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        > .answer {
            font-size: 1.5em;
        }
    }
}

</style>