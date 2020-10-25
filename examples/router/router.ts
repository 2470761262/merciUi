import { createRouter, createWebHashHistory } from "vue-router";
import { defineAsyncComponent} from 'vue';


const router = createRouter({
  history: createWebHashHistory (),
  routes: [
    {
      path: "/",
      component: defineAsyncComponent(() => import("../mdir/button/buttonTest.vue")),
    },
    {
      path: "/nofity",
      component:  defineAsyncComponent(() => import("../mdir/notify/notificationTest.vue")),
    }
  ],
});

export { router };
