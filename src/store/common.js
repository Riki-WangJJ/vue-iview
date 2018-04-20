export default {
  state: {
    userInfo: '用户信息'
  },
  mutations: {
    common_setUserInfo (state) {
      state.userInfo = '更新的用户信息'
    }
  },
  actions: {
    common_fetchUserInfo (ctx, parms) {
      console.log('common下的action触发了')
      ctx.commit('common_setUserInfo')
    }
  }
}