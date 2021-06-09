import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '@c/HelloWorld.vue';
import Home from '@views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '@c/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'mui-active'
});

export default router;
