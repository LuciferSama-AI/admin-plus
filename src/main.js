import { createApp } from "vue";
import "./style.css";
import "virtual:uno.css";
import App from "./App.vue";
import { setupRouter, setupStore } from "./utils/setup.js";

const bootstrap = () => {
  const app = createApp(App);

  setupStore(app);
  setupRouter(app);

  app.mount("#app");
};

bootstrap();
