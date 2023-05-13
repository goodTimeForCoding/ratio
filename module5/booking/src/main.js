import { createApp } from "vue";
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

const app = createApp(App);
//глобальные UI компоненты
components.forEach((component) => {
  app.component(component.name, component);
});

const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
};

app
  .component("v-select", vSelect)
  .component("VueDatePicker", VueDatePicker)
  .use(router)
  .use(store)
  .use(Toast, options)
  .use(VueGoogleMaps, {
    load: {
      key: "",
    },
  })
  .mount("#app");
