<template>
  <nav>
    <div class="burger" @click="toggleSideMenu" :style="'color:' + this.burgerColor">
        <span v-html="sideMenuIcon"></span>
    </div>
    <router-link to='/'>Home</router-link > | 
    <router-link to='/about'>About</router-link>
    <div style="visibility: hidden; margin-left: auto;">
        &#9776;
    </div>
  </nav>
    <SideMenu :show="showSideMenu"/>
</template>

<script>
export default {
    data() {
        return {
            showSideMenu: false,
            burgerColor: '#2c3e50',
            sideMenuIcon: '&#9776;',
        }
    },
    methods: {
        toggleSideMenu() {
            this.toggleBurgerColor();
            this.showSideMenu = !this.showSideMenu;
        },

        toggleBurgerColor() {
            const activeBurgerColor = 'white';
            const inactiveBurgerColor = '#2c3e50';

            this.burgerColor = this.showSideMenu ? inactiveBurgerColor : activeBurgerColor;
        }
    }
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