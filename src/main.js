import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue3'


// Rewrite pageReady method, optimizing MathJax as required rendering and render to avoid them
// ❗️❗️ For example '<span>$$Not a formula$$</span>' is not going to render, but in fact will be rendered into formula， As below is not the el

function onMathJaxReady() {
  // The parent node of need to be rendered into the formula node set
  const el = document.getElementById('app')
  // ❗️❗️ When there is no el will begin to render the default root node
  renderByMathjax(el)
}
initMathJax({}, onMathJaxReady)


const app = createApp(App);
app.use(router);
app.use(MathJax);

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
