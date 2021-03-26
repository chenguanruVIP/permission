import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';


Vue.config.productionTip = false

// 全局路由守卫
router.beforeEach((to,from,next)=>{
  //根据用户token判断是否登陆
  if(!store.state.UserToken){
    // 没有登陆
    next({ path: '/login' })
  }else{
    //已经登陆
  }
})


 
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
