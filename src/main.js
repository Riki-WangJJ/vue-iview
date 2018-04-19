
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routers from './router'
Vue.use(Router)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router: new Router(routers),
  render: h => h(App)
})
