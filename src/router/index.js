// this is the router file
import BagsView from '@/views/BagsView.vue'
import FavoriteView from '@/views/FavoriteView.vue'
import HomeView from '@/views/HomeView.vue'
import MenView from '@/views/menView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
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
  {
    path: '/bags',
    name: 'Bags',
    component: BagsView,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoriteView,
  },
  // * Dynamic route
  {
    path: '/product/:slug',
    name: 'Product',
    component: ProductDetailsView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
