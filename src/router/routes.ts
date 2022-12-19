export const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
]

export default [
  {
    path: '/',
    // redirect: { name: 'stuffApart' },
    component: () => import('@/layout/index.vue'),
    children: routes,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
]
