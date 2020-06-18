import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import x5GMaps from 'x5-gmaps';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import './assets/sass/custom.scss';
import router from './router';

Sentry.init({
  dsn: 'https://d4074e0eeaa24acfa0188ffee2a4b293@o409346.ingest.sentry.io/5281652',
  integrations: [new VueIntegration({ Vue, attachProps: true, logErrors: true })],
});

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(x5GMaps, 'AIzaSyDwlJcLKu_UlWCVNJbYm-QAlSjFHQLdzOQ');
Vue.use(BootstrapVue);


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
