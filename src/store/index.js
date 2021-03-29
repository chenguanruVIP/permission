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
        },
        get UserRoleCode(){
            return localStorage.getItem('user_role_code')||'other'
        },
        set UserRoleCode(value){
            localStorage.setItem('user_role_code',value)
        }
    },
    mutations: {
        loginSuccess(state, token) {
            state.UserToken = token
            console.log("登陆成功设置之后的token",state.UserToken)
        },
        userRoleCode(state,role){
            localStorage.setItem('user_role_code', role)
            state.userRoleCode = role
        },
        logOut(state){
            state.UserToken = ''
            state.UserRoleCode = ''
            localStorage.clear()
            // 刷新页面,清除vuex里面的数据
            window.location.reload()
        }
    },
    actions: {
    },
    modules: {
        permission
    }
})
