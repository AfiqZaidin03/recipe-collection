import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';

createApp(App).mount('#app')
createApp(App).use(createPinia());
