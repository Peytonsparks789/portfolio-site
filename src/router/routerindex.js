import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/404.vue'
//import articlesRoutes from './articlesRoutes'; // Import the modular routes
//import articlesRoutes from './simpleConvRoutes'; // Import the modular routes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },

    // Additional routes
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      //children: [
      //  {
      //    path: '/simpleconv',
      //    name: 'simpleconv',
      //    component: () => import('../views/SimpleConvView.vue'),
      //    children: [
      //      ...simpleConvRoutes
      //    ]
      //  },
      //  {
      //    path: '/articles',
      //    name: 'articles',
      //    component: () => import('../views/articleView.vue'),
      //   children: [
      //      ...articlesRoutes
      //    ]
      //  }
      //]
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
