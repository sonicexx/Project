import { createRouter, createWebHistory } from 'vue-router';
import Index from 'views/Index';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
