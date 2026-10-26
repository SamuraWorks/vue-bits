import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import LoginPage from '@/pages/LoginPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: LandingPage },
  { path: '/login', name: 'login', component: LoginPage, meta: { title: 'Login | Xkul-Salone' } },
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

router.afterEach((to) => {
  document.title = typeof to.meta.title === 'string' ? to.meta.title : 'Xkul-Salone — School Management for Sierra Leone';
});

export default router;
