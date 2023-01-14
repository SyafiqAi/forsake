<template>
  <div class="top-navbar">
    <div class="nav-container">
      <nav>
        <router-link to='/'>Home</router-link>
        <div>|</div>
        <router-link to='/about'>About</router-link>
      </nav>
    </div>
    <div class="burger-icon-container">
      <BurgerIcon @click="$emit('burgerclick')" />
    </div>
  </div>
</template>

<script>
import {isMobile} from '@/modules/utilities.js';
export default {
  emits: ['burgerclick'],
  computed: {
    justifyBurger() {
      if(isMobile()) {
        return 'right';
      } else {
        return 'left';
      }
    }
  }
}
</script>

<style lang='scss' scoped>


.top-navbar {
  min-height: 50px;
  max-height: 50px;
  width: 100%;
  position: relative;
  background-color: v-bind('$darkDarkBlue');
  > .nav-container {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    > nav {
      z-index: 10;
      color: v-bind('$grey');
      
      display: flex;
      justify-content: center;
      align-items: center;
      
      > a {
        margin: auto 10px;
        font-weight: bold;
        color: v-bind('$grey');
        
        &.router-link-exact-active {
          color: v-bind('$boldGreen');
        }
        &:hover {
          color: v-bind('$lightGreen');
        }
      }
    }
  }
  > .burger-icon-container {
    display: flex;
    justify-content: v-bind('justifyBurger');
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
:deep(.burger-icon) {
  padding: 12.5px;
}
</style>