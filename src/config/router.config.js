// eslint-disable-next-line
import { UserLayout } from '@/layouts'
/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题,此名称与页面name一致
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标
  }
 */
/**
 * 需在侧栏展示的，如需一级展示请参考首页实现
 * 需要注意为了缓存正常,所有父级需为RouteView
 */
export const indexRouterMap = [
  {
    path: '/',
    name: 'Index',
    component: 'RouteView',
    hidden: false,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: 'Index',
        hidden: false,
        meta: { title: '首页', noCache: false, hidden: true, icon: 'dashboard', hiddenHeaderContent: true }
      }
    ]
  }
]
/**
 * 在侧栏不会显示
 */
export const otherRouterMap = [
  {
    path: '/account/center',
    name: 'Center',
    component: 'AccountCenter',
    meta: { title: '个人中心', noCache: true },
    hidden: true
  },
  {
    path: '/account/settings',
    name: 'Settings',
    component: 'AccountSettings',
    meta: { title: '个人设置', hideHeader: true },
    redirect: '/account/settings/base',
    hidden: true,
    children: [
      {
        path: '/account/settings/base',
        name: 'BaseSettings',
        component: 'BaseSettings',
        hidden: true,
        meta: { title: '基本设置', hidden: true, noCache: true }
      },
      {
        path: '/account/settings/security',
        name: 'SecuritySettings',
        component: 'SecuritySettings',
        meta: { title: '安全设置', hidden: true, noCache: true }
      }
    ]
  },
  {
    path: '/monitor/job/log',
    name: 'JobLog',
    component: 'JobLog',
    meta: { title: '调度日志', noCache: true },
    hidden: true
  },
  {
    path: '/system/role/authUser',
    name: 'AuthUser',
    component: 'AuthUser',
    meta: { title: '分配用户', noCache: true },
    hidden: true
  },
  {
    path: '/system/notice/form',
    name: 'NoticeForm',
    component: 'NoticeForm',
    meta: { title: '公告编辑', noCache: true },
    hidden: true
  },
  {
    path: '/gen/edit',
    name: 'GenEdit',
    component: 'GenEdit',
    meta: { title: '修改生成配置', noCache: true },
    hidden: true
  }
]
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'cas',
        name: 'cas',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/CasRedirect')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
