<template>
  <nav>
    <router-link to='/'>Home</router-link> | 
    <router-link to='/about'>About</router-link>
  </nav>
  <router-view  />
  <Footer />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  margin: 0;
}

nav {
  padding: 30px;
  text-align: center;
  > a {
    font-weight: bold;
    color: #2c3e50;
    
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#MathJax_Message {
  display: none !important;
}
</style>
