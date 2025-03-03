import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },

    // Additional routes
    // To be lazy-loaded
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },

    // 404 route
    {
      path: '/:pathMatch(.*)*', // Wildcard route to match any undefined paths
      name: 'notfound',
      component: NotFoundView
    }
  ],
})

export default router
