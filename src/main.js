
// Plugins
import { registerPlugins } from '@/plugins'
import AosVue from "aos-vue";
// Components
import App from './App.vue'
import 'aos/dist/aos.css';
import './css/style.css'
// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(AosVue)
app.mount('#app')
