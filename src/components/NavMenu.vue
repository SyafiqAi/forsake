<template>
  <nav>
    <router-link to='/'>Home</router-link >
    <div>|</div>
    <router-link to='/about'>About</router-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>

nav {
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
</style>