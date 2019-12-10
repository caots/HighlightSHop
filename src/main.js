import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js'
import store from '../src/store/store.js'
import VueToastr from "vue-toastr";
import './util/permision.js'
export const eventBus = new Vue();

Vue.use(VueToastr);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
