import { defineNuxtPlugin } from "#app";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    // Customize your toast options here
  };

  nuxtApp.vueApp.use(Toast, options);
});
