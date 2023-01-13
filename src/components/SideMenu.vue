<template>
    <div>
        <div 
            class='burger' 
            @click="toggleShow()" 
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
        <div 
            class="sidemenu-background-overlay"
            :style="'visibility:' + visibility"
            @click="show=false"
        >
        </div>
    </div>
</template>

<script>
export default {
    props: ['close'],
    data() {
        return {
            width: '0',
            show: false,
            burgerIconColor: this.$grey,
            visibility: 'hidden',
            opacity: 0,
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
            this.burgerIconColor = this.$boldGreen;
            this.visibility = 'visible';
            this.opacity = 0.5;
        },

        closeMenu() {
            this.width = '0';
            this.burgerIconColor = this.$grey;
            this.visibility = 'hidden';
            this.opacity = 0;
        },

        toggleShow() {
            this.show=!this.show;
        }

        //#endregion
        
    },
    watch: {
        close() {
            this.show = false;
        },
        show() {
            this.show ? this.openMenu() : this.closeMenu();
            // this.burgerAngle = this.burgerAngle > 0 ? 0 : 360;
        },

    }
}
</script>

<style lang="scss" scoped>
.burger {
    position: absolute;
    font-size: 2em;
    z-index: 999;
    transition: 0.3s;
    cursor: pointer;
    display: block;


    margin-top: 12.5px;
    margin-left: 12.5px;

    > .burger-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 25px;
        width: 30px;
        > div {
            height: 0.8px;
            width: 100%;
            background-color: v-bind(burgerIconColor);
            transition: 0.3s;
        }
        &:hover div {
            background-color: v-bind('$lightGreen');
        }
    }


}
.sidemenu-main {
    position: fixed;
    height: calc(100% - 50px);
    bottom: 0;
    background-color: v-bind('$darkBlue');
    font-size: 3em;
    color: white;
    transition: 0.3s;
    z-index: 998;
    overflow-x: hidden;
    border-radius: 0 5px 5px 0;
    box-shadow: 0px 0px 40px #000000;
    // background-image: linear-gradient(to top left, v-bind('$darkBlue'), #090d11);
}
.sidemenu-background-overlay {
    position: fixed;
    height: calc(100% - 50px);
    width: 100%;
    bottom: 0;
    z-index: 997;
    background-color: black;
    transition: 0.3s;
    opacity: v-bind('opacity');
}

</style>