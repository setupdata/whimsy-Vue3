import { createStore } from "vuex"

export default createStore({
  state: {
    // 全局数据
    isLogin: false,
    nowRouter: "home"
  },
  getters: {},
  mutations: {
    changeRouter(state, payload) {
      state.nowRouter = payload
    }
  },
  actions: {},
  modules: {}
})
