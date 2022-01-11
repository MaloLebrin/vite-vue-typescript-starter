import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import './assets/tailwind.css'

const app = createApp(App)
const store = createPinia()
app.use(router)
app.use(store)
app.mount('#app')
