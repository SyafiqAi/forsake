<template>
  <div class="top-navbar">
    <div class="nav-container">
      <nav>
        <router-link @click="close=!close" to='/'>Home</router-link>
        <div>|</div>
        <router-link @click="close=!close" to='/about'>About</router-link>
      </nav>
    </div>
    <div class="sidemenu-container">
      <SideMenu :close="close" @toggle="$emit('toggle')"/>
    </div>
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
  width: 100%;
  position: relative;
  background-color: v-bind('$darkDarkBlue');
  display: flex;
  justify-content: center;
  > .nav-container {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    > nav {
      color: v-bind('$grey');
      // width: 100vw;
      // height: 100%;
      
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
  > .sidemenu-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>