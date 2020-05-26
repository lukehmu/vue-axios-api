import Vue from 'vue';
import VueRouter from 'vue-router';
import Locations from '@/views/Locations.vue';
import AddressLookup from '@/views/AddressLookup.vue';
import CadetEOI from '@/views/CadetEOI.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AddressLookup',
    component: AddressLookup,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
    props: true,
  },
  {
    path: '/cadeteoi/:locationId?',
    name: 'CadetEOI',
    component: CadetEOI,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
