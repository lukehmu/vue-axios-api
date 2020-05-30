import Vue from 'vue';
import VueRouter from 'vue-router';
import MapLocations from '@/views/MapLocations.vue';
import AddressLookup from '@/views/AddressLookup.vue';
import UserEOI from '@/views/UserEOI.vue';
import UserApplication from '@/views/UserApplication.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AddressLookup',
    component: AddressLookup,
  },
  {
    path: '/locations',
    name: 'MapLocations',
    component: MapLocations,
    props: true,
  },
  {
    path: '/cadeteoi/:locationId?',
    name: 'UserEOI',
    component: UserEOI,
    props: true,
  },
  {
    path: '/userapp/:locationId?',
    name: 'UserApplication',
    component: UserApplication,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
