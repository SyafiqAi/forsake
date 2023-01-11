<template>
    <div 
        class="sidemenu-main"
        :style="'width:' + width"
    >
    </div>
</template>

<script>
export default {
    props: ['show'],
    data() {
        return {
            width: '0',
        }
    },
    methods: {
        isSmallScreen() {
            const small = 600;
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            
            if(vw < small)
                return true;
                
            return false;
        }
    },
    watch: {
        show() {
            const sidemenuWidth = this.isSmallScreen() ? '100vw' : '30vw';
            
            this.width = this.show ? sidemenuWidth : '0';
        }

    }
}
</script>

<style lang="scss" scoped>

.sidemenu-main {
    position: fixed;
    height: 100%;
    background-color: black;
    font-size: 3em;
    color: white;
    transition: 0.5s;
    z-index: 998;
}

</style>