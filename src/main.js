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

//#endregion

app.mount('#app');
