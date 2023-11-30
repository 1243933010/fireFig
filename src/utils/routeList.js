import Layout from '@/layout'
export const  routesList = [
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
      ], },
      {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
      },
      // 404 page must be placed at the end !!!
      { path: '*', redirect: '/404', hidden: true }
    ]
