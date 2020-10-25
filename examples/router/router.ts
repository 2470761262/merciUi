import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent} from 'vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: defineAsyncComponent(() => import("../mdir/button/buttonTest.vue")),
    }
  ],
});

export { router };
