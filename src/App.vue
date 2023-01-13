<template>
  <div id="app-main">
    <NavMenu @toggle="sidemenuToggled"/>
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
  methods: {
    sidemenuToggled() {
      this.preventScroll = !this.preventScroll;
      let body = document.getElementsByTagName("BODY")[0];
      if(this.preventScroll){
        body.classList.add('noScroll');
      } else {
        body.classList.remove('noScroll');
      }
    }
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
  min-height: /*100vh;*/ calc(100vh);
  background-color: v-bind('$darkBlue');
  background-image: linear-gradient(to bottom right, v-bind('$darkBlue'), v-bind('$darkDarkBlue'));
  color: v-bind('$grey');
}

.noScroll {
  overflow: hidden;
}

body {
  margin: 0;
}

#MathJax_Message {
  display: none !important;
}
</style>
