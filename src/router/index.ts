import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import TransmissionView from '@/views/TransmissionView.vue'
import ProfileView from '@/views/ProfileView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/transmission/:id',
      name: 'TransmissionView',
      component: TransmissionView
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView
    }
  ]
})

export default router
