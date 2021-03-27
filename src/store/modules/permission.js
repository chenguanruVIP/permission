// 做权限验证的模块
import router,{ dynamicRoutes } from '../../router/index'//导入在index里面配置的动态路由的父节点
import dymaicList from '../../router/dynamic-router'//需要对比的列表
import axiosMenuList from './menuList'//模拟后台返回的数据配置

/**
 * 这里是请求后台的菜单方法，现在是写成前端配置演示的
 * 返回一个promise
 */
function axiosPermission(){
    return new Promise((resolve)=>{
        let list = axiosMenuList['superAdmin']
        resolve(list)
    })
}
/**
 * 后台返回的菜单和前端配置好的菜单进行匹配
 * @param {Array} axiosRouter 后台返回用户的菜单列表
 */
function filterRouter(axiosResult){
    let returnList = []
    axiosResult.forEach((v)=>{
        dymaicList.forEach((item)=>{
            if(item.meta.name == v.menuName){
                if(v.childRen && v.childRen.length>0){
                    // 递归
                    item.children = filterRouter(v.children, item.children)
                }
                returnList.push(item)
            }
        })
    })
    return returnList
}


export default {
    namespaced: true,//开启命名空间
    state: {
        permissionList: null /** 所有路由,前端与后台匹配之后的路由 */,
        sidebarMenu: [] /** 导航菜单 */,
        currentMenu: '' /** 当前active导航菜单 */
    },
    mutations:{
        // 设置所有路由
        SER_PERMISSION(state,list){
            state.permissionList = list
        },
        //清空所有路由
        CLEAR_PERMISSION(state){
            state.permissionList = null
        },
        //设置侧边菜单
        SET_SILDBARMENU(state,list){
            state.sidebarMenu = list
        },
        //清空侧边菜单
        CLEAR_SIDEBARMENU(state){
            state.sidebarMenu = []
        },
        //设置当前菜单
        SET_CURRENTMENU(state,content){
            state.currentMenu = content
        }
    },
    actions:{
        /**
         * 合并路由
         */
        async MERAGE_ROUTER({ commit }){
            // 获取后端返回来的菜单
            let axiosResult = await axiosPermission()
            // 前后端的路由进行匹配
            let finishRouter = filterRouter(axiosResult)
            //在主路由中的children中添加上过滤后的路由\
            let children = dynamicRoutes[0].children//直接获取到
            
            children.push(...finishRouter)
            // 生成侧边菜单
            commit('SET_SILDBARMENU',children)

            /*  初始路由 ==>就是登陆的页面*/
            let initialRoutes = router.options.routes
            //调用方法添加动态的路由,addRoute和addRoutes的用法查看文档
            router.addRoute('/',...dynamicRoutes)
            // router.addRoutes(dynamicRoutes)//旧版的这样用
            //记录所有的路由、初始化的路由+动态路由
            commit('SER_PERMISSION',[...dynamicRoutes,...initialRoutes])
        }
    }
}