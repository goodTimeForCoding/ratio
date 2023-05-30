import { createApp } from "vue";
import { toastOptions } from "./configs/toast-options.js";
import { spritePluginOptions } from "./configs/sprite-plugin-options.js";
import { mapOptions } from "./configs/map-options.js";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/index.js";
import components from "@/components/UI";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import {svgSpritePlugin} from 'vue-svg-sprite';

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

app
  .component("v-select", vSelect)
  .component("VueDatePicker", VueDatePicker)
  .use(router)
  .use(store)
  .use(Toast, toastOptions)
  .use(svgSpritePlugin, spritePluginOptions)
  .use(VueGoogleMaps, mapOptions)
  .mount("#app");
