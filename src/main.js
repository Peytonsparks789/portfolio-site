import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routerindex'
import './assets/normalize.css'
import './assets/styles.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
