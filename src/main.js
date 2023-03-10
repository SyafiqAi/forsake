import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);

//#region Mathjs
import { create, all } from 'mathjs'
const config = { }
const math = create(all, config)
app.config.globalProperties.$math = math;
//#endregion

//#region Globally register components

import HelloWorld from './components/HelloWorld.vue';
app.component('HelloWorld', HelloWorld);

import Footer from './components/Footer.vue';
app.component('Footer', Footer);

import TextArea from './components/TextArea.vue';
app.component('TextArea', TextArea);

import NavMenu from './components/NavMenu.vue';
app.component('NavMenu', NavMenu);

import SidemenuV2 from './components/SidemenuV2.vue';
app.component('SidemenuV2', SidemenuV2);

import SidemenuList from './components/SidemenuList.vue';
app.component('SidemenuList', SidemenuList);

import BurgerIcon from './components/BurgerIcon.vue';
app.component('BurgerIcon', BurgerIcon);

import Math from './components/Math.vue';
app.component('Math', Math);

import MathInput from './components/MathInput.vue';
app.component('MathInput', MathInput);

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
