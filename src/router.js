// 页面组件引入
import Home from './pages/home/route.js'
import About from './pages/about/route.js'

export default{
	mode: 'history',
  routes: [
		...Home,
		About
  ]
}
