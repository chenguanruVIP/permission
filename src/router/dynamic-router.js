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
const studentMent1 = ()=> import('../views/studentManage/studentMent1')
const studentMent2 = ()=> import('../views/studentManage/studentMent2')
const studentMent3 = ()=> import('../views/studentManage/studentMent3')


//导出路由
const dynamicRouter = [
    {
        path:'/schoolManage',
        name:'schoolManage',
        component:schoolManage
    },
    {
        path:'/teacherManage',
        name:'teacherManage',
        component:teacherManage,
        children:[
            {
                path:'/teacherMent1',
                name:'teacherMent1',
                component:teacherMent1
            },
            {
                path:'/teacherMent2',
                name:'teacherMent2',
                component:teacherMent2
            }
        ]
    },
    {
        path:'/studentManage',
        name:'studentManage',
        component:studentManage,
        children:[
            {
                path:'/studentMent1',
                name:'studentMent1',
                component:studentMent1
            },
            {
                path:'/studentMent2',
                name:'studentMent2',
                component:studentMent2
            },
            {
                path:'/studentMent3',
                name:'studentMent3',
                component:studentMent3
            }
        ]
    }
]

export default dynamicRouter