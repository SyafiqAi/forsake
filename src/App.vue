<template>
  <SideMenu />
  <NavMenu />
  <router-view />
  <Footer />
</template>

<script>
export default {
  name: "App",    
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.name || 'Forsake';
      }
    },
    }

};
</script>

<style lang="scss">
.red{
  border: 1px solid red;
}

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

#MathJax_Message {
  display: none !important;
}
</style>
