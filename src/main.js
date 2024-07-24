// import './input.css'
import './output.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import store from './store';


const app = createApp(App);

app.use(router, store);
app.use(VueCookies);
app.mount('#app');
