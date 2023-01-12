<template>
    <div 
        class='burger' 
        @click="show=!show" 
        :style="`transform: rotate(${burgerAngle}deg);`"
    >
        &#9776;
    </div>
    <div 
        class="sidemenu-main"
        :style="'width:' + width + ';' + 'visibility:' + visibility"
    >
    </div>
</template>

<script>
export default {
    data() {
        return {
            width: '0',
            show: false,
            burgerIconColor: '#2c3e50',
            visibility: 'hidden',
            burgerAngle: 0,
        }
    },
    methods: {
        isSmallScreen() {
            const small = 600;
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            
            if(vw < small)
                return true;
                
            return false;
        },

        openMenu() {
            const sidemenuWidth = this.isSmallScreen() ? '100vw' : '30vw';
            
            this.width = sidemenuWidth;
            this.burgerIconColor = 'white';
            this.visibility = 'visible';
        },

        closeMenu() {
            this.width = '0';
            this.burgerIconColor = '#2c3e50';
            this.visibility = 'hidden';
        }
        
    },
    watch: {
        show() {
            this.show ? this.openMenu() : this.closeMenu();
            this.burgerAngle = this.burgerAngle > 0 ? 0 : 360;
        },

    }
}
</script>

<style lang="scss" scoped>
.burger {
    position: absolute;
    font-size: 2em;
    margin-left: 1vw;
    z-index: 999;
    transition: 0.5s;
    cursor: pointer;

    color: v-bind(burgerIconColor);
}
.sidemenu-main {
    position: fixed;
    height: 100%;
    background-color: #2c3e50;
    font-size: 3em;
    color: white;
    transition: 0.5s;
    z-index: 998;
    overflow-x: hidden;
    border-radius: 0 5px 5px 0;
    box-shadow: 0px 0px 10px #000000;
}

</style>