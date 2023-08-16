import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
// import router from './router'

// import "./mock/index.js"
import 'animate.css/animate.min.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import axios from "axios";

const getCsfrKey = () => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, 10) === ('csrftoken' + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(10));
        break;
      }
    }
  }
  return cookieValue;
}
axios.defaults.xsrfCookieName = 'csrfmiddlewaretoken'
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'
//重点！！！设置请求获取cookie
axios.defaults.withCredentials = true

axios.get('/login', { withCredentials: true })
  .then((response) => {
    console.log(response)
    axios.defaults.headers['X-CSRFToken'] = getCsfrKey()
  })

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app');