import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { store } from './store'
import axios from 'axios'
import VueRouter from 'vue-router'
import {router} from './routes'
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate'
import {authService} from './services/authServices';


Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.use(BootstrapVue);
Vue.mixin(authService);


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
