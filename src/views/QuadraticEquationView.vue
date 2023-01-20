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
            <!-- <div>
                {{ altSol }}
            </div> -->
            <div class="solution">
                <Math :formula='altSol' />
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
            solution: [],
        }
    },
    mounted() {
        this.$refs.a.$el.focus();
        let s = this.$math.simplify('2a * sqrt(a)');
        s = s.toString({implicit: 'hide'});
        // s = s.toTex();
        // console.log("iscoprime: ", this.isCoprime(6,4));
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
        },
        isPerfectSquare(n) {
            return Number.isInteger(Math.sqrt(n));
        },
        isCoprime(m,n) {
            let simplify = this.$math.simplify(`${m} / ${n}`).toString();
            let original = `${m} / ${n}`
            return simplify === original;
        },
        determinantZero() {
            this.solution.push(`
                &= \\frac {${-this.b}} {${2 * this.a}} \\\\
            `)
            let final = this.$math.simplify(`${-this.b} / (2 * ${this.a})`)
            final = final.toTex();
            this.solution.push(`&= ${final}`);
        },
        determinantPositive() {
            this.solution.push(`
                &= \\frac {${-this.b} \\pm \\sqrt{${this.determinant}}} {${2 * this.a}} \\\\
            `)
            if(this.isPerfectSquare(this.determinant)){
                this.solution.push(`
                    &= \\frac {${-this.b} \\pm ${Math.sqrt(this.determinant)}} {${2 * this.a}} \\\\
                `)
                this.solution.push(`
                    &= ${this.$math.simplify(`(${-this.b} + ${Math.sqrt(this.determinant)}) / ${2 * this.a}`)},
                    ${this.$math.simplify(`(${-this.b} - ${Math.sqrt(this.determinant)}) / ${2 * this.a}`)}
                `)
            } else {
                let sqrtDet = this.sqrt(this.determinant);
                let x = `\\sqrt{${sqrtDet.in}}`;
                let right = this.$math.simplify(`(${sqrtDet.out} * x )`);
                right = right.toTex();
                right = right.replace('x', x);
                this.solution.push(`
                    &= \\frac {${-this.b}} {${2 * this.a}} \\pm \\frac {${right}} {${2 * this.a}} \\\\
                `)

                if(sqrtDet.out > 1 && !this.isCoprime(sqrtDet.out, (2 * this.a))) {
                    let left = this.$math.simplify(`${-this.b} / (2 * ${this.a})`).toTex();
    
                    right = this.$math.simplify(`(${sqrtDet.out} * x ) / (${this.a} * 2)`);
                    right = right.toTex();
                    if(sqrtDet.in < 1) {
                        x = `\\sqrt{${-sqrtDet.in}}`;
                        right = right.replace('x', x);
                        right += 'i'
                    } else {
                        right = right.replace('x', x);
                    }
                    this.solution.push(`
                        &= ${left} \\pm ${right} \\\\
                    `)
                } else if(sqrtDet.in < 1) {
                    this.solution.push(`
                        &= \\frac {${-this.b}} {${2 * this.a}} \\pm \\frac {${right.replace('-','')}} {${2 * this.a}} i \\\\
                    `)
                }
        
            }
        },
        determinantNegative() {

        }
    },
    computed: {
        altSol() {
            this.solution = [];
            let a = parseFloat(this.a);
            let b = parseFloat(this.b);
            let c = parseFloat(this.c);

            let negativeB = b < 0;
            
            let ans1 = (-b + Math.sqrt(this.determinant)) / (2 * a);
            let ans2 = (-b - Math.sqrt(this.determinant)) / (2 * a);

            let secondLineP1 = this.$math.simplify(`-${b} / (2 * ${a})`);

            let sqrtDeterminant = this.sqrt(this.determinant);
            let secondLineP2 = this.$math.simplify(`(${sqrtDeterminant.out} ${(sqrtDeterminant.in === 1 ? '' : '*d')}) / (2 * ${a})`)

            this.solution.push(`
                x &= \\frac {-${negativeB ? `(${this.b})` : this.b} \\pm 
                \\sqrt {${negativeB ? `(${this.b})` : this.b}^2 - 4 (${this.a}) (${this.c})}} 
                {2(${this.a})} \\\\
            `)
            if(this.determinant === 0) {
                this.determinantZero();
            } else if (this.determinant > 0) {
                this.determinantPositive();
            } else {
                this.determinantPositive();
            }
            
            let altSol = '\\begin{align*}';
            this.solution.forEach(line => {
                altSol += line + ' ';
            })
            altSol += ('\\end{align*}');
            return altSol;
        },
        determinant () {
            return this.b * this.b - 4 * this.a * this.c
        },
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