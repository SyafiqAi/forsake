<template>
  <div id="app-main">
    <NavMenu @burgerclick="toggle=!toggle"/>
    <Sidemenu :toggle="toggle"/>
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
      toggle: false,
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;700&display=swap');

.red{
  border: 1px solid red;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
#app-main {
  display: flex;
  flex-direction: column;
  // min-height: /*100vh;*/ calc(100vh);
  // background-color: white;
  // background-color: v-bind('$grey');
  // background-image: linear-gradient(to bottom right, v-bind('$darkBlue'), v-bind('$darkDarkBlue'));
  background-image: linear-gradient(to bottom right, hsl(198deg 37% 9%), hsl(0deg 0% 0%));
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
  // overflow: hidden;
}

#MathJax_Message {
  display: none !important;
}
</style>
