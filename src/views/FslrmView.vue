<template>
  <div class="fslrm-main">
    <h1>Fitted Simple Linear Regression Model</h1>
    <div class="input-area">
        <div class="input-x">
            <Math :displayMode="false" formula="x =" /> 
            <MathInput v-model="xInput"/>
        </div>
        <div class="input-y">
            <Math :displayMode="false" formula="y =" /> 
            <MathInput v-model="yInput"/>
        </div>
        <br />
        <div class="table-container">
            <table class="values-table">
                <tr>
                    <th></th>
                    <th><Math formula="x" /></th>
                    <th><Math formula="y" /></th>
                    <th><Math formula="x^2" /></th>
                    <th><Math formula="y^2" /></th>
                    <th><Math formula="xy" /></th>
                </tr>
                <tr v-for="(x, index) in xData" :key="index">
                    <td></td>
                    <td> {{ x }} </td>
                    <td> {{ yData[index] }} </td>
                    <td> {{ xSquaredData[index] }} </td>
                    <td> {{ ySquaredData[index] }} </td>
                    <td> {{ xyData[index] }} </td>
                </tr>
                <tr>
                    <td><Math formula="\Sigma" /></td>
                    <td> {{ sum(xData) }} </td>
                    <td> {{ sum(yData) }} </td>
                    <td> {{ sum(xSquaredData) }} </td>
                    <td> {{ sum(ySquaredData) }} </td>
                    <td> {{ sum(xyData) }} </td>
                </tr>
            </table>
        </div>
        <br />
        <div class="equations-container">
            <div class="eq">
                <Math :formula="betaHat1Equation" />
            </div>
            <br />
            <div class="eq">
                <Math :formula="betaHat0Equation" />
            </div>
            <br />
            <div class="eq">
                
            </div>
            <div class="final-answer">
                <Math :formula="yhat" :displayMode="true"/> 
                <img src="@/assets/bolt.svg" alt="" style="max-height:1.5em; padding-left: 1em;" />
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import {create, all} from 'mathjs';

const config = {}
const math = create(all, config);

const xInput = ref('1 2 3 4 5');
const yInput = ref('1 1 2 2 4');

const xData = computed(() => {
    return xInput.value.split(' ')
        .filter(data => {return data !== ''})
        .map(parseFloat);
});
const xSquaredData = computed( () => {
    return xData.value.map(data => { return data * data})
})
const yData = computed(() => {
    return yInput.value.split(' ')
        .filter(data => {return data !== ''})
        .map(parseFloat);
});
const ySquaredData = computed( () => {
    return yData.value.map(data => { return data * data})
})
const xyData = computed( () => {
    let arr = [];
    xData.value.forEach((data,index) => {
        arr.push(data * yData.value[index]);
    });
    return arr;
})

function sum(arr) {
    return arr.reduce((x,y) => {return x+y})
}

const betaHat1 = computed(() => {
    let num = xData.value.length * sum(xyData.value) - sum(yData.value) * sum(xData.value);
    let den = xData.value.length * sum(xSquaredData.value) - Math.pow(sum(xData.value),2);
    let ans = num / den;
    ans = toFixedIfNecessary(ans, 4)
    return ans;
})

const betaHat1Equation = computed(() => {
    return `
\\begin{align*}
\\hat \\beta_1 &= \\frac{n\\sum xy - \\sum y \\sum x}{n \\sum x^2 - (\\sum x)^2} \\\\
&= \\frac{${xData.value.length} (${sum(xyData.value)}) - ${sum(yData.value)} (${sum(xData.value)})}
{${xData.value.length} (${sum(xSquaredData.value)}) - (${sum(xData.value)})^2} \\\\
&= ${betaHat1.value}
\\end{align*}
`
})

const betaHat0 = computed(() => {
    let ybar = average(yData.value)
    let xbar = average(xData.value)
    let bhat1 = betaHat1.value
    let ans = math.evaluate(`${ybar} - ${xbar} * ${bhat1}`)
    ans = toFixedIfNecessary(ans, 4)
    return ans;
})

const betaHat0Equation = computed(() => {
    return `
\\begin{align*}
\\hat \\beta_0 &= \\bar y - \\hat \\beta_1 \\bar x \\\\
&= ${average(yData.value)} - ${betaHat1.value} (${average(xData.value)}) \\\\
&= ${betaHat0.value}
\\end{align*}
`
})

const yhat = computed(() => {
    return `\\therefore \\hat y = ${betaHat0.value} + ${betaHat1.value}x`
})

function average(arr) {
    let sum = arr.reduce((x,y) => { return x + y});
    let avg = math.evaluate(`${sum} /${arr.length}`)
    return toFixedIfNecessary(avg,4);
}

function toFixedIfNecessary( value, dp ){
  return +parseFloat(value).toFixed( dp );
}

</script>

<style lang="scss" scoped>
.fslrm-main {
    padding: 30px;
}
.input-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    > *{
        display: flex;
        align-items: center;
        justify-content: center;
        > * {
            margin: 0 5px;
        }
    }
    > .equations-container {
        // display: initial;
        flex-direction: column;
        width: fit-content;
        align-items: flex-start;
        > .final-answer {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    > .table-container {
        > .values-table {
            text-align: center;
            > tr {
                > * {
                    padding: 7px 14px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.37);
                    border-right: 1px solid rgba(255, 255, 255, 0.37);
                }
            }
        }
    }
}
</style>