<template>
  <div class="top-navbar">
    <nav>
      <router-link @click="close=!close" to='/'>Home</router-link>
      <div>|</div>
      <router-link @click="close=!close" to='/about'>About</router-link>
    </nav>
    <SideMenu :close="close" @toggle="$emit('toggle')"/>
  </div>
</template>

<script>
export default {
  emits: ['toggle'],
  data() {
    return {
      close: false,
    }
  }
}
</script>

<style lang='scss' scoped>


.top-navbar {
  height: 50px;
  width: 100vw;
  position: relative;
  background-color: v-bind('$darkDarkBlue');

  > nav {
    color: v-bind('$grey');
    width: 100vw;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    
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
</style>