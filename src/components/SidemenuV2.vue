<template>
    <div class="sidemenu">
        <div 
            class="sidemenu-main"
        >
            <div class="burger-icon-container"><BurgerIcon @click="show=false"/></div>
            <SidemenuList @linkclicked="show=false"/>
        </div>
        <div 
            class="sidemenu-background-overlay"
            @click="show=false"
        >
        </div>
    </div>
</template>

<script>
import {isMobile} from '@/modules/utilities.js';
export default {
    props: ['toggle'],
    emits: ['toggle'],
    data() {
        return {
            width: '100vw',
            show: false,
            visibility: 'hidden',
            opacity: 0,
            burgerAngle: 0,
            hidePosition: '0',
            transform: '0',
            justifyBurger: '',
        }
    },

    mounted() {
        if(isMobile()) {
            this.width = '100vw';
            this.hidePosition = '100%';
            this.transform = this.hidePosition;
            this.justifyBurger = 'right';
        } else {
            this.width = '500px';
            this.hidePosition = '-100%';
            this.transform = this.hidePosition;
            this.justifyBurger = 'left';
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
            this.visibility = 'visible';
            this.opacity = 0.5;
            this.transform = '0%';
        },

        closeMenu() {
            this.visibility = 'hidden';
            this.opacity = 0;
            this.transform = this.hidePosition;
        },

        //#endregion
    },
    watch: {
        toggle() {
            this.show=!this.show;
        },
        show() {
            this.show ? this.openMenu() : this.closeMenu();
            this.$emit('toggle',this.show);
        },

    },
}
</script>

<style lang="scss" scoped>
.sidemenu{
    position: fixed;
    z-index: 999;
    top: 0;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    visibility: v-bind('visibility');
    > .sidemenu-main {
        position: absolute;
        top: 0;
        height: 100vh;
        background-color: v-bind('$darkBlue');
        color: white;
        width: v-bind('width');
        transform: translateX(v-bind('transform'));
        visibility: v-bind('visibility');
        transition: 0.3s;
        z-index: 999;
        overflow: hidden;
        box-shadow: 0px 0px 40px #000000;
        > .burger-icon-container {
            background-color: v-bind('$darkDarkBlue');
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: v-bind('justifyBurger');
        }

        
    }
    > .sidemenu-background-overlay {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 998;
        background-color: black;
        transition: 0.3s;
        visibility: v-bind('visibility');
        opacity: v-bind('opacity');
    }
}
:deep(.burger-icon) {
    padding: 12.5px;
}
</style>