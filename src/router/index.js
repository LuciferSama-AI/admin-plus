import { createRouter, createWebHistory } from "vue-router";
import { constantRoutes } from "./routes.js";

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});
