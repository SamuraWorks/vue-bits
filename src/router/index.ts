import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: LandingPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 88, behavior: 'smooth' };
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
