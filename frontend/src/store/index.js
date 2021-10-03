import { createStore } from "vuex";
import { login, userInfo } from "@/apis/user";
import router from "@/router";

const store = createStore({
  //  数据 store.state.token
  state: {
    token: "",
    nickname: "",
  },
  // 计算属性的作用 store.getters.title
  getters: {
    title: (state) => {
      return state.nickname + "'s";
    },
  },
  //  要变动数据需要调用 context.commit('increment')
  mutations: {
    changeToken(state, payload) {
      state.token = payload;
    },
    changeNickname(state, payload) {
      state.nickname = payload;
    },
  },
  actions: {
    //  动作 可通过  store.dispatch('asyncIncrement') 访问该方法
    //  login
    async userLoginAction({ commit }, payload) {
      //    1. 调用登录接口
      const resLogin = await login(payload);
      //    2. 获取到token
      const token = resLogin.token;
      //    3. token 存到 vuex & 浏览器缓存中
      commit("changeToken", token);
      window.localStorage.setItem("token", token);
      //    4. 请求用户信息接口
      const resUser = await userInfo();
      const nickname = resUser.nickname;
      //    5. username 存到 vuex 和 浏览器缓存中
      commit("changeNickname", nickname);
      window.localStorage.setItem("nickname", nickname);
      //    6. 跳转到首页
      await router.push("/");
    },

    /**
     * @desc 该方法解决页面刷新vuex 中数据丢失问题
     * @param state
     */
    loadLocalStorage({ commit }) {
      const token = window.localStorage.getItem("token");
      if (token) {
        commit("changeToken", token);
      }
      const nickname = window.localStorage.getItem("nickname");
      if (nickname) {
        commit("changeNickname", nickname);
      }
    },
  },
  // 多个模块之前可以通过这里管理
  modules: {},
});

export default store;
