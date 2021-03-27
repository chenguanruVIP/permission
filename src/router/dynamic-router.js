/**
 * 这里面的路由是需要和后台返回来的路由进行匹配和过滤
 */

// 学校管理
const schoolManage = ()=> import('../views/schoolManage/schoolManage.vue')

//老师管理
const teacherManage = ()=> import('../views/teacherManage/teacherManage.vue')
const teacherMent1 = ()=> import('../views/teacherManage/children/teacherMent1')
const teacherMent2 = ()=> import('../views/teacherManage/children/teacherMent2')

//学生管理
const studentManage = ()=> import('../views/studentManage/studentManage')
const studentMent1 = ()=> import('../views/studentManage/children/studentMent1')
const studentMent2 = ()=> import('../views/studentManage/children/studentMent2')
const studentMent3 = ()=> import('../views/studentManage/children/studentMent3')


/**
 * 导出路由
 * meta里面需要配置meta里面的name和icon
 */
const dynamicRouter = [
    {
        path:'/schoolManage',
        name:'schoolManage',
        component:schoolManage,
        meta:{
            name:'学校管理',
            icon:'el-icon-bell'
        }
    },
    {
        path:'/teacherManage',
        name:'teacherManage',
        component:teacherManage,
        meta:{
            name:'老师管理',
            icon:'el-icon-s-custom'
        },
        children:[
            {
                path:'/teacherMent1',
                name:'teacherMent1',
                component:teacherMent1,
                meta:{
                    name:'老师菜单1',
                    icon:''
                }
            },
            {
                path:'/teacherMent2',
                name:'teacherMent2',
                component:teacherMent2,
                meta:{
                    name:'老师菜单2',
                    icon:''
                },
            }
        ]
    },
    {
        path:'/studentManage',
        name:'studentManage',
        component:studentManage,
        meta:{
            name:'学生菜单',
            icon:'el-icon-user-solid'
        },
        children:[
            {
                path:'/studentMent1',
                name:'studentMent1',
                component:studentMent1,
                meta:{
                    name:'学生菜单1',
                    icon:''
                }
            },
            {
                path:'/studentMent2',
                name:'studentMent2',
                component:studentMent2,
                meta:{
                    name:'学生菜单2',
                    icon:''
                }
            },
            {
                path:'/studentMent3',
                name:'studentMent3',
                component:studentMent3,
                meta:{
                    name:'学生菜单3',
                    icon:''
                }
            }
        ]
    }
]

export default dynamicRouter