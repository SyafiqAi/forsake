<template>
  <nav>
    <router-link to='/'>Home</router-link > | 
    <router-link to='/about'>About</router-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>

nav {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > .burger {
    font-size: 2em;
    margin-right: auto;
    cursor: pointer;
    z-index: 999;
    transition: 0.5s;
  }

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

  .divider {
    background-color: #2c3e50;
    width: 1px;
    height: 1em;
  }
}
</style>