import Vue from 'vue'
import Router from 'vue-router'
import {routesList} from '@/utils/routeList'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/projectManagement',
    meta: { title: '项目管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'projectManagement',
        name: 'projectManagement',
        component: () => import('@/views/projectManagement/index'),
        meta: { title: '项目管理列表', icon: 'table' }
      },
      {
        hidden: true,
        path: 'projectManagementAdd',
        name: 'projectManagementAdd',
        component: () => import('@/views/projectManagement/add'),
        meta: { title: '项目新增', icon: 'table' }
      },
      {
        path: 'ImplementationCommission',
        name: 'ImplementationCommission',
        component: () => import('@/views/ImplementationCommission/index'),
        meta: { title: '实施委托列表', icon: 'tree' }
      },
      {
        path: 'evaluation',
        name: 'evaluation',
        component: () => import('@/views/evaluation/index'),
        meta: { title: '开评标', icon: 'tree' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
// setTimeout(() => {
  // routesList.forEach(element => {
  //   constantRoutes.push(element)
  // });
// }, 1000);

const createRouter = (list) => {
  
  let routeArr =  list&&list.length>0?list:constantRoutes
  console.log(routeArr,'{{{{')
  return new Router({
  
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes:routeArr
  })
}

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter(list=[]) {
 
  const newRouter = createRouter(list)
  router.matcher = newRouter.matcher // reset router
}

export default router
