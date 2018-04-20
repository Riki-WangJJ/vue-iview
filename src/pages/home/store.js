import fetch from '@/store/fetch.js'

export default {
  state: {
    myHome: 'home'
  },
  actions: {
    home_fetchSomething (ctx, data) {
      fetch({url: 'common/mis/menus', data})
      .then(res => {
        console.log(res)
      })
    }
  }
}