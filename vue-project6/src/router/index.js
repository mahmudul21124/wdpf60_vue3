import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FoodItems from '@/components/FoodItems.vue'
import FruitPage from '@/views/FruitPage.vue'
import TodoList from '@/views/TodoList.vue'
import FlowerItems from '@/views/FlowerItems.vue'
import FlowerList from '@/views/FlowerList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/food',
      name: 'food',
      component: FoodItems,
    },
    {
      path: '/fruit',
      name: 'fruit',
      component: FruitPage,
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoList,
    },
    {
      path: '/flower',
      name: 'flower',
      component: FlowerItems,
    },
    {
      path: '/flowerlist',
      name: 'flowerlist',
      component: FlowerList,
    },
    
  ],
})

export default router
