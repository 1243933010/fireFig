import Vue from 'vue'
import Router from 'vue-router'

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
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
    // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  {
    path: '/',
    component: Layout,
    redirect: '/projectManagement',
    // name: 'projectManagement',
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
    {
    path: '/thirdProjects',
    component: Layout,
    redirect: '/thirdProjects',
    children: [{
      path: 'thirdProjects',
      name: 'thirdProjects',
      component: () => import('@/views/thirdProjects/index'),
      meta: { title: '三方项目列表', icon: 'dashboard' }
    }]
  },
  {
    path: '/contractManagement',
    component: Layout,
    redirect: '/contractManagement',
    children: [{
      path: 'contractManagement',
      name: 'contractManagement',
      component: () => import('@/views/contractManagement/index'),
      meta: { title: '合同管理', icon: 'dashboard' }
    }]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics',
    children: [{
      path: 'statistics',
      name: 'statistics',
      component: () => import('@/views/statistics/index'),
      meta: { title: '统计分析', icon: 'dashboard' }
    }]
  },
  {
    path: '/systemManagement',
    component: Layout,
    redirect: '/systemManagement/user',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [{
      path: 'user',
      name: 'user',
      component: () => import('@/views/systemManagement/user/index'),
      meta: { title: '用户管理', icon: 'dashboard' }
    },
    {
      path: 'department',
      name: 'department',
      component: () => import('@/views/systemManagement/department/index'),
      meta: { title: '部门管理', icon: 'dashboard' }
    },
    {
      path: 'roles',
      name: 'roles',
      component: () => import('@/views/systemManagement/roles/index'),
      meta: { title: '角色管理', icon: 'dashboard' }
    },
    {
      path: 'messageNotification',
      name: 'messageNotification',
      component: () => import('@/views/systemManagement/messageNotification/index'),
      meta: { title: '消息通知管理', icon: 'dashboard' }
    },
    {
      path: 'messageNotification/edit',
      name: 'messageNotificationEdit',
      component: () => import('@/views/systemManagement/messageNotification/add'),
      meta: { title: '消息通知编辑', icon: 'dashboard' },
      hidden: true
    },
    {
      path: 'log',
      name: 'log',
      component: () => import('@/views/systemManagement/log/index'),
      meta: { title: '日志管理', icon: 'dashboard' }
    },
  ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
