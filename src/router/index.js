import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Forsake',
    menuName: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/basic-equations',
    name: 'Basic Equations',
    redirect: '/basic-equations',
    // component: () => import('../views/BasicEquationsView.vue'),
    children: [
      {
        path: '',
        name: 'Basic Equations',
        component: () => import('../views/BasicEquationsView.vue'),
      },
      {
        path: '/basic-equations/quadratic-equation',
        name: 'Quadratic Equation',
        component: () => import('../views/QuadraticEquationView.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
