import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App).use(store).use(router, axios).mount('#app')
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import axios from 'axios'

// axios.defaults.baseURL = "http://127.0.0.1:8000"
// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   axios,
//   render: h => h(App)
// }).$mount('#app')
