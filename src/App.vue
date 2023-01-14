<template>
  <div id="app-main">
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
      preventScroll: false,
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.name || 'Forsake';
      }
    },
  },
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
  // min-height: /*100vh;*/ calc(100vh);
  background-color: v-bind('$darkBlue');
  background-image: linear-gradient(to bottom right, v-bind('$darkBlue'), v-bind('$darkDarkBlue'));
  color: v-bind('$grey');
  overflow: auto;
  height: 100vh;

}

::-webkit-scrollbar {
  width: 10px;
  }

  /* Track */
::-webkit-scrollbar-track {
  background: #242424; 
  }
  
  /* Handle */
::-webkit-scrollbar-thumb {
  background: v-bind('$darkDarkBlue'); 
    // background: rgb(0, 0, 0); 
  }

  /* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(71, 71, 71); 
}

body {
  margin: 0;
  overflow: hidden;
}

#MathJax_Message {
  display: none !important;
}
</style>
