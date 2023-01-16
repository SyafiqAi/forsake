<template>
    <NavMenu @burgerclick="toggle=!toggle"/>
    <SidemenuV2 :toggle="toggle" @toggle="toggled"/>
    <router-view />
    <Footer />
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
  methods: {
    toggled(menuIsOpen) {
      let body = document.getElementById('app');
      // let body = document.getElementsByTagName('body')[0];
      if(menuIsOpen) {
        body.classList.add('noscroll');
      } else {
        body.classList.remove('noscroll');
      }
    }
  }
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

  display: flex;
  flex-direction: column;
  // background-color: red;
  background-image: linear-gradient(to bottom right, hsl(198deg 37% 9%), hsl(0deg 0% 0%));
  // color: v-bind('$grey');
  color: #D9D9D9;
  min-height: 100vh;

  overflow-x: hidden;
}

body {
  margin: 0;
  // overflow: overlay;
}

.noscroll {
  height: 100vh;
  // overflow: hidden;
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
    background: #090D11; 
  }

  /* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(71, 71, 71); 
}

#MathJax_Message {
  display: none !important;
}
</style>
