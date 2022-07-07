import { createApp } from 'vue'
import App from './App.vue'
import router from'./routes'
import axios from 'axios'
  
axios.defaults.baseURL = 'https://dummyjson.com/'

createApp(App).use(router).mount('#app')
