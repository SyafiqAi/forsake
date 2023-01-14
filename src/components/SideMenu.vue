<template>
    <div>
        <div 
            class="sidemenu-main"
        >
            <div class="burger-icon-container"><BurgerIcon @click="show=false"/></div>
            <div class="list">
                <div class="item">Item</div>
                <div class="item">Item</div>
                <div class="item">Item</div>
                <div class="item">Item</div>
                <div class="item">Item</div>
                <div class="item">Item</div>
                <div class="item">Item</div>
                <div class="item">Item3</div>
                <div class="item">Item 2</div>
                <div class="item">Item1</div>
                <div class="item">Item</div>
                <div class="item">Item3</div>
                <div class="item">Item 2</div>
                <div class="item">Item1</div>
            </div>
            
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
    data() {
        return {
            width: '100%',
            show: false,
            visibility: 'hidden',
            opacity: 0,
            burgerAngle: 0,
            hidePosition: '0',
            transform: '-100%',
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
            const sidemenuWidth = this.isSmallScreen() ? '100vw' : '500px';
            
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
        },

    },
}
</script>

<style lang="scss" scoped>
.sidemenu-main {
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

    > .list {
        overflow: auto;
        height: 100%;
        > .item {
            padding: 20px;
            border: 1px solid v-bind('$darkDarkBlue');
            &:hover {
                color: v-bind('$darkBlue');
                background-color: v-bind('$boldGreen');
                cursor: pointer;
            }
        }
    }

    
}
.sidemenu-background-overlay {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    z-index: 998;
    background-color: black;
    transition: 0.3s;
    visibility: v-bind('visibility');
    opacity: v-bind('opacity');
}
:deep(.burger-icon) {
    padding: 12.5px;
}
</style>