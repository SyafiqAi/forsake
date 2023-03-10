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
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/basic-equations',
    name: 'Basic',
    menuName: 'Basic Equations',
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
        name: 'Roots of a Quadratic Equation',
        component: () => import('../views/QuadraticEquationView.vue'),
      }
    ]
  },
  {
    path: '/applied-regression-analysis',
    name: 'Test',
    menuName: 'Applied Regression Analysis',
    redirect: '/applied-regression-analysis',
    // component: () => import('../views/BasicEquationsView.vue'),
    children: [
      {
        path: '',
        name: 'Applied Regression Analysis',
        component: () => import('../views/AppliedRegressionAnalysisView.vue'),
      },
      {
        path: '/applied-regression-analysis/fitted-simple-linear-regression-model',
        name: 'Fitted Simple Linear Regression Model',
        component: () => import('../views/FslrmView.vue'),
      }
    ]
  },
  {
    path: '/send-feedback',
    name: 'Send Feedback',
    component: () => import('../views/SendFeedback.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
