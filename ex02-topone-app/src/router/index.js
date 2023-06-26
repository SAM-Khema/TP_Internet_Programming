import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/LoginPage.vue')
},
{
    path: '/category',
    name: 'category',
    component: () => import ('../views/Category.vue')
},
{
    path: '/subcategory',
    name: 'subcategory',
    component: () => import ('../views/SubCategory.vue')
},
{
    path: '/product',
    name: 'product',
    component: () => import ('../views/Product.vue')
},
{
  path: '/admin',
  name: 'admin',
  component: () => import ('../views/AdminView.vue')
}
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
