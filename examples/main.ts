
import { createApp } from 'vue'
import App from './app.vue'
import {router} from './router/router';
import "../assets/init.css";
import "./compoentsLess/index.less";
import "../assets/fontIcon.css";
import "../assets/mdColor.css";
import demoBlock from './component/demoBlock.vue';
import {button,buttonGroup} from '../src/index';
const app =   createApp(App);

app.component("demo-block",demoBlock);
app.component(button.name,button);
app.component(buttonGroup.name,buttonGroup);

app.use(router);

app.mount('#app')