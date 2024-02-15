import { createApp } from 'vue'

import { App, i18n, router } from '@/app'

createApp(App).use(i18n).use(router).mount('#app')
