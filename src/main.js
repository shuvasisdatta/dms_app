import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

require("bootstrap");
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/src/jquery.js";
// import "popper.js/dist/popper.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

// vForm
import { Form, HasError, AlertError } from "vform";
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// axios
import axios from "axios";
window.axios = axios;

// VueProgressBar
import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
  color: "rgb(143, 255, 199)",
  failedColor: "red",
  height: "2px"
});

// sweetAlart2
// import Swal from "sweetalert2";
// window.Swal = Swal;
const Swal = require("sweetalert2");
window.Swal = require("sweetalert2");

const toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;

// Filters
Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("substr", function(value, start, end) {
  if (!value) return "";
  value = value.substr(start, end);
  return value;
});

// Global variables
Vue.prototype.$appName = process.env.VUE_APP_TITLE;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
