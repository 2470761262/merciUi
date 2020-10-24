
import { createApp } from 'vue'
import App from './app.vue'
import {router} from './router/router';
import "../assets/init.css";
import "./compoentsLess/index.less";
import "../assets/fontIcon.css";
const app =   createApp(App);

app.use(router);

app.mount('#app')