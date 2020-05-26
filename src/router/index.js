import Vue from 'vue';
import VueRouter from 'vue-router';
import AddressLookup from '../views/AddressLookup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AddressLookup',
    component: AddressLookup,
  },
  {
    path: '/about',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
