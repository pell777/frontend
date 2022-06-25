import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "vuesax/dist/vuesax.css";
import Vuesax from "vuesax";



Vue.config.productionTip = false;
Vue.use(Vuesax);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
