import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI, {
  size: 'small'
})

Vue.config.productionTip = false
Vue.prototype.$http =  axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
