import { RouteRecordRaw } from 'vue-router'

export const rootRoute: RouteRecordRaw = {
  name: 'root',
  path: '/',
  component: () => import('./AppRoot.vue'),
}
