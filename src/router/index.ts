// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import MoviesList from '../views/MoviesList.vue';

const routes = [
  {
    path: '/',
    name: 'MoviesList',
    component: MoviesList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
