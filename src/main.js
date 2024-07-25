// import './input.css'
import './output.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
// TODO TO add store as well
// import store from './store';


const app = createApp(App);

// NEED TO ADD STORE TO app.use(router) in order to use the Store configuration TODO
app.use(router);
app.use(VueCookies);
app.mount('#app');
