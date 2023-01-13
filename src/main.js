import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMathjax from 'vue-mathjax-next';

const app = createApp(App);
app.use(router);
app.use(VueMathjax);

//#region Globally register components

import HelloWorld from './components/HelloWorld.vue';
app.component('HelloWorld', HelloWorld);

import Footer from './components/Footer.vue';
app.component('Footer', Footer);

import TextArea from './components/TextArea.vue';
app.component('TextArea', TextArea);

import SideMenu from './components/SideMenu.vue';
app.component('SideMenu', SideMenu);

import NavMenu from './components/NavMenu.vue';
app.component('NavMenu', NavMenu);

//#endregion

//#region Colors

app.config.globalProperties.$white = '#FFFFFF';
app.config.globalProperties.$darkBlue = '#17222DFF';
app.config.globalProperties.$darkDarkBlue = '#090D11';
app.config.globalProperties.$boldBlue = '#1DCDFEFF';
app.config.globalProperties.$lightBlue = '#34F0F5FF';
app.config.globalProperties.$boldGreen = '#21D0B3FF';
app.config.globalProperties.$lightGreen = '#34F5C6FF';
app.config.globalProperties.$altRed = '#E64242FF';
app.config.globalProperties.$red = '#E84F4FFF';
app.config.globalProperties.$grey = '#D9D9D9';

//#endregion

app.mount('#app');
