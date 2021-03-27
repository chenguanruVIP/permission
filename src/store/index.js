import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        get UserToken() {
            return localStorage.getItem('access_token')
        },
        set UserToken(value) {
            localStorage.setItem('access_token', value)
        }
    },
    mutations: {
        loginSuccess(state, token) {
            state.UserToken = token
            console.log("登陆成功设置之后的token",state.UserToken)
        }
    },
    actions: {
    },
    modules: {
        permission
    }
})
