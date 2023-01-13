<template>
  <div id="app-main">
  <div class="top-navbar">
    <NavMenu />
  </div>
    <SideMenu />
    <!-- <NavMenu /> -->
    <router-view />
    <Footer />
  </div>
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
}

.top-navbar {
  height: 50px;
  width: 100vw;
  position: relative;
  background-color: v-bind('$darkDarkBlue');
  > button {
    position: absolute;
    right: 0;
  }
}

#app-main {
  display: flex;
  flex-direction: column;
  min-height: /*100vh;*/ calc(100vh);
  background-color: v-bind('$darkBlue');
  background-image: linear-gradient(to bottom right, v-bind('$darkBlue'), v-bind('$darkDarkBlue'));
  color: v-bind('$grey');
}

body {
  margin: 0;
}

#MathJax_Message {
  display: none !important;
}
</style>
