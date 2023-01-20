<template>
    <div id="quadratic-equation-main">
        <h1>Quadratic Equation</h1>
        <!-- <TextArea /> -->
        <div class="user-input-container">
            <div class="user-input-item">
                <MathInput :invalidValues="[0,'-','']" v-model="a" ref="a" tabindex="1"/> <Math formula='x^2' /><Math formula=' + ' />
                <MathInput :invalidValues="['-']" v-model="b" tabindex="2"/> <Math formula='x' /><Math formula=' + ' />
                <MathInput :invalidValues="['-']" v-model="c" tabindex="3"/> <Math formula=' =  0' />
            </div>
            <div class="solution">
                <Math :formula='solution' />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 1,
            b: 4,
            c: 6,
        }
    },
    mounted() {
        this.$refs.a.$el.focus();
    },
    methods: {
        convertFracToKatex(frac) {
            // accepts a fraction in the form of a / b and returns \frac {a} {b}
            frac = frac.toString();
            if(!frac.includes('/')) {
                return frac;
            }
            frac = frac.split('/');
            let katexFrac = `\\frac {${frac[0]}} {${frac[1]}}`
            return katexFrac;
        },
        convertSqrtToKatex(sqrt) {
            if(sqrt.in === 1) 
                return sqrt.out;
            else if(sqrt.out === 1) 
                return `\\sqrt{${sqrt.in}}`;
            else return `${sqrt.out} \\sqrt{${sqrt.in}}`
            
        },
        sqrt(val) {

            
            let insideRoot = val;
            let outsideRoot = 1;
            let d = 2;
            
            let isNegative = insideRoot < 0;
            if(isNegative) 
                insideRoot = -insideRoot;
            
            while (d * d <= insideRoot) {
                if(insideRoot % (d * d) === 0) {
                    insideRoot /= d * d;
                    outsideRoot *= d;
                } else {
                    d++;
                }
            }
            if(isNegative)
                insideRoot = -insideRoot;
            return {
                'in': insideRoot,
                'out': outsideRoot,
            }
        }
    },
    computed: {
        solution() {
            let a = parseFloat(this.a);
            let b = parseFloat(this.b);
            let c = parseFloat(this.c);

            let negativeB = b < 0;
            
            let ans1 = (-b + Math.sqrt(this.determinant)) / (2 * a);
            let ans2 = (-b - Math.sqrt(this.determinant)) / (2 * a);

            let secondLineP1 = this.$math.simplify(`-${b} / (2 * ${a})`);

            let sqrtDeterminant = this.sqrt(this.determinant);
            let secondLineP2 = this.$math.simplify(`(${sqrtDeterminant.out} ${(sqrtDeterminant.in === 1 ? '' : '*d')}) / (2 * ${a})`)
            
            let sol = `\\begin{align*}
                x &= \\frac {-${negativeB ? '(' : ''}${this.b} ${negativeB ? ')' : ''} \\pm \\sqrt {${negativeB ? '(' : ''}${this.b} ${negativeB ? ')' : ''}^2 - 4(${this.a})(${this.c})}} {2(${this.a})} \\\\
                &= \\frac {${this.b*-1} \\pm \\sqrt {${this.determinant}}} {2(${this.a})} \\\\
                &= \\frac{${this.b*-1}} {2(${this.a})} \\pm \\frac {${this.convertSqrtToKatex(sqrtDeterminant)}} {2(${this.a})} \\\\
                &= ${this.convertFracToKatex(secondLineP1)} \\pm ${this.convertFracToKatex(secondLineP2).replace('*','').replace("d", `\\sqrt{${sqrtDeterminant.in > 0 ? sqrtDeterminant.in : -sqrtDeterminant.in}}`)} ${sqrtDeterminant.in < 0 ? 'i' : ''}  \\\\
                ${isNaN(ans1) || !Number.isInteger(ans1) ? '' : '&=' + ans1 + ',' + ans2}
                \\end{align*}
            `

            return sol;
        },
        ans () {
            console.log('determinant', this.determinant);
            console.log('iscomplex: ', this.isComplex);
            console.log('st of determinant = ', this.sqrt(-this.determinant));
        },
        determinant () {
            return this.b * this.b - 4 * this.a * this.c
        },
        isComplex() {
            return this.determinant < 0;
        }
    },
}
</script>

<style lang="scss" scoped>

#quadratic-equation-main {
    h1 {
        text-align: center;
    }
    .user-input-container {
        font-size: 1.5em;
        // display: flex;
        // justify-content: center;
        > .user-input-item {
            > input {
                font-size: 1em;
                margin: 10px;
            }
            // width: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

</style>