import './assets/styles/general.scss'
import { router } from './route';
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
