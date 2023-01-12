<template>
    <div 
        class='burger' 
        @click="show=!show" 
        :style="`transform: rotate(${burgerAngle}deg);`"
    >
        <div class="burger-icon">
            <div></div>
            <div></div>
            <div></div>
        </div>

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

        //#region open / close menu functions

        openMenu() {
            const sidemenuWidth = this.isSmallScreen() ? '100vw' : '500px';
            
            this.width = sidemenuWidth;
            this.burgerIconColor = 'white';
            this.visibility = 'visible';
        },

        closeMenu() {
            this.width = '0';
            this.burgerIconColor = '#2c3e50';
            this.visibility = 'hidden';
        },

        //#endregion
        
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
    z-index: 999;
    transition: 0.5s;
    cursor: pointer;
    display: block;


    margin-top: 2vh;
    margin-left: 2vh;
    color: v-bind(burgerIconColor);

    > .burger-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > div {
            height: 4px;
            width: 100%;
            background-color: v-bind(burgerIconColor);
            transition: 0.5s;
        }
        height: 30px;
        width: 30px;
    }


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