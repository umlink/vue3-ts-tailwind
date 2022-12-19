import { createRouter, createWebHistory } from 'vue-router'
import BeforeEach from '@/router/before-each'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach(BeforeEach)

export default router
