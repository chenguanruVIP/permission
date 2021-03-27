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
    // 没有登陆,注意to.matched的判断，不然会死循环
    if(to.matched.length){
      next()
    }else{
      next({ path: '/login' })
    }
  }else{
    //已经登陆

    // 如果权限列表是空的就去获取
    if(!store.state.permission.permissionList){
      //这里的目的是获取菜单并调用router.addRoutes添加路径==>解决刷新参数丢失问题
      store.dispatch('permission/MERAGE_ROUTER').then(()=>{
        next({ path: to.path })
      })
    }else{
      if (to.path !== '/login') {
        next()
      }else{
        next(from.fullPath)
      }
    }
  }
})

router.afterEach((to) => {
  // var routerList = to.matched
  // store.commit('setCrumbList', routerList)
  store.commit('permission/SET_CURRENTMENU', to.name)
})


 
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
