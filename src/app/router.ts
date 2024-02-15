import { createRouter, createWebHistory } from 'vue-router'

import { rootRoute } from '@/pages/root'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    rootRoute,

    // unfamiliar path
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'root' },
    },
  ],
})
