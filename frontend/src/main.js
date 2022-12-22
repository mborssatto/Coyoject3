import Vue from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'bootstrap'
import 'normalize.css'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
