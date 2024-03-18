import { registerPlugins } from '@/plugins'
import router from '@/router'
import App from './App.vue'
import { createApp } from 'vue'
import '@/assets/styles/main.css'

const app = createApp(App)

app.use(router)

registerPlugins(app)

app.mount('#app')
