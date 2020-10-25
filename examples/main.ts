import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./router/router";
import "../assets/init.css";
import "./compoentsLess/index.less";
import "../assets/fontIcon.css";
import "../assets/mdColor.css";
import demoBlock from "./component/demoBlock.vue";
import * as merci from "../src/index";
import notify from '../src/notify/notification.js';


const app = createApp(App);

app.use(router);

app.config.globalProperties.$notify = notify;
app.component("demo-block", demoBlock);


Object.keys(merci).forEach((key) => {
  app.component(merci[key].name, merci[key]);
});

app.mount("#app");
