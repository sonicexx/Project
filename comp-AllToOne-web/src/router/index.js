import { createRouter, createWebHistory } from 'vue-router';
import Index from 'views/Index';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('views/Detail.vue'),
  },
  {
    path: '/list/:category',
    name: 'list',
    component: () => import('views/List.vue'),
    props: true,
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('views/Search.vue'),
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('views/City.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
