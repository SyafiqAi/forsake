<template>
  <div id="app-main">
    <SideMenu />
    <NavMenu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bg: this.$darkBlue,
      rcolor: 'red',
    }
  },
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
}

#app-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: v-bind('$darkBlue');
  background-image: linear-gradient(to bottom right, v-bind('$darkBlue'), #090d11);
  color: v-bind('$grey');
}

body {
  margin: 0;
}

#MathJax_Message {
  display: none !important;
}
</style>
