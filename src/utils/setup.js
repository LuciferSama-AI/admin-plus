import { createPinia } from "pinia";
import { router } from "../router/index.js";

export const setupStore = (vueInstance) => {
  const pinia = createPinia();

  vueInstance.use(pinia);
};

export const setupRouter = (vueInstance) => {
  router.beforeEach((to, from) => {});

  router.afterEach((to, from) => {});

  vueInstance.use(router);
};
