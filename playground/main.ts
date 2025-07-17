import { createApp } from 'vue'
import Provider from './AppProvider.vue'

// TODO: integrate styles into src/SaForm
import './styles/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(Provider)

app.mount('#app')
