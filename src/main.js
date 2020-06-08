import Vue from 'vue';
import x5GMaps from 'x5-gmaps';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import './assets/sass/custom.scss';
import router from './router';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(x5GMaps, 'AIzaSyDwlJcLKu_UlWCVNJbYm-QAlSjFHQLdzOQ');
Vue.use(BootstrapVue);


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
