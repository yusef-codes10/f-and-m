// this is the router file
import HomeView from '@/views/HomeView.vue'
import MenView from '@/views/menView.vue'
import WomenView from '@/views/WomenView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/women',
    name: 'Women',
    component: WomenView,
  },
  {
    path: '/men',
    name: 'Men',
    component: MenView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
