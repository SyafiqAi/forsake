<template>
  <nav>
    <div class="burger">
        &#9776;
    </div>
    <router-link to='/'>Home</router-link > | 
    <router-link to='/about'>About</router-link>
    <div style="visibility: hidden; margin-left: auto;">
        &#9776;
    </div>
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
  }

  > a {
    margin: auto 10px;
    font-weight: bold;
    color: #2c3e50;
    
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .divider {
    background-color: #2c3e50;
    width: 1px;
    height: 1em;
  }
}
</style>