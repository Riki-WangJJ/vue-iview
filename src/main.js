
import Vue from 'vue'
import Router from 'vue-router'
import Vuex, {Store} from 'vuex'
import App from './App'
import routers from './router'

// 引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// 引入store
import store from './store/index.js'

// 挂载
Vue.use(Router)
Vue.use(Vuex)
Vue.use(iView)


Vue.config.productionTip = false


new Vue({
  el: '#app',
  store: new Store(store),
  router: new Router(routers),
  render: h => h(App)
})
