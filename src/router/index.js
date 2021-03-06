/**
 * Created by zzmhot on 2017/3/23.
 *
 * 路由Map
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/23 18:30
 * @Copyright(©) 2017 by zzmhot.
 *
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//import components
//layout page warp component
import LayoutComponent from 'pages/App'

//home
import homeComponent from 'pages/home'
import logDoComponent from 'pages/log/do'
import logLoginComponent from 'pages/log/login'

//404
import noPageComponent from 'pages/error/404'
//login
import loginComponent from 'pages/user/login'
//base table
import baseTableComponent from 'pages/table/base'

import stockinComponent from 'pages/stockin/list'

import stockinSaveComponent from 'pages/stockin/save'

//sort table
import sortTableComponent from 'pages/table/sort'
//save table
import saveTableComponent from 'pages/table/save'
//bar charts
import barChartsComponent from 'pages/charts/bar'

import memberComponent from 'pages/member/index'
import memberSaveComponent from 'pages/member/save'

//parts
import partsComponent from 'pages/parts/index'
import partsCategoryComponent from 'pages/parts/category'
import partsCreateComponent from 'pages/parts/create'

import serviceComponent from 'pages/service/index'
import serviceSaveComponent from 'pages/service/save'
import serviceCategoryComponent from 'pages/service/category/index'
import serviceCategoryCreateComponent from 'pages/service/category/create'

//插件
import myPluginsComponent from 'pages/plugins/my'
import pluginsMallComponent from 'pages/plugins/mall'

//setting
import importMemberComponent from 'pages/setting/import/member'
import importServiceComponent from 'pages/setting/import/service'
import importPartsComponent from 'pages/setting/import/parts'

Vue.use(VueRouter)

//使用AMD方式加载
// component: resolve => require(['pages/home'], resolve),
const routes = [{
  path: '/404',
  name: 'notPage',
  component: noPageComponent
}, {
  path: '*',
  redirect: '/404'
}, {
  path: '/user/login',
  name: 'login',
  component: loginComponent
}, {
  path: '/',
  redirect: '/home',
  component: LayoutComponent,
  children: [{
    path: '/home',
    name: 'home',
    component: homeComponent,
    meta: {
      title: "主页",
      auth: true
    }
  }, {
    path: '/log/do',
    name: 'logDo',
    component: logDoComponent,
    meta: {
      title: "操作日志",
      auth: true
    }
  }, {
    path: '/log/login',
    name: 'logLogin',
    component: logLoginComponent,
    meta: {
      title: "登录日志",
      auth: true
    }
  }]
}, {
  path: '/offline_service',
  redirect: '/offline_service',
  component: LayoutComponent,
  meta: {
    title: "维修开单",
    auth: true
  },
  children: [{
    path: '/offline_service',
    name: 'offline_service',
    component: baseTableComponent,
    meta: {
      title: "维修开单",
      auth: true
    },
  }]
}, {
  path: '/member',
  redirect: '/member',
  component: LayoutComponent,
  meta: {
    title: "客户档案",
    auth: true
  },
  children: [{
    path: '/member',
    name: 'member',
    component: memberComponent,
    meta: {
      title: "客户档案",
      auth: true
    },
  }, {
    path: '/member/create',
    name: 'memberCreate',
    component: memberSaveComponent,
    meta: {
      title: "新建客户",
      auth: true
    }
  }, {
    path: '/member/update/:id',
    name: 'memberUpdate',
    component: memberSaveComponent,
    meta: {
      title: "更新客户",
      auth: true
    }
  }
  ]
}, {
  path: '/parts',
  redirect: '/parts',
  component: LayoutComponent,
  meta: {
    title: "配件库存",
    auth: true
  },
  children: [
    {
      path: '/parts',
      name: 'parts',
      component: partsComponent,
      meta: {
        title: "配件库存",
        auth: true
      }
    }, {
      path: '/category',
      name: 'category',
      component: partsCategoryComponent,
      meta: {
        title: "维修开单",
        auth: true
      },
    }, {
      path: '/category/create',
      name: 'categoryCreate',
      component: partsCreateComponent,
      meta: {
        title: "维修开单",
        auth: true
      },
    }, {
      path: '/parts/stock_in',
      component: stockinComponent
    }, {
      path: '/parts/stock_in/create',
      component: stockinSaveComponent
    }, {
      path: '/parts/stock_in/import',
      component: sortTableComponent
    }
  ]
}, {
  path: '/wechat',
  redirect: '/wechat',
  component: LayoutComponent,
  meta: {
    title: "微信管理",
    auth: true
  },
  children: [{
    path: '/wechat',
    name: 'wechat',
    component: barChartsComponent,
    meta: {
      title: "微信管理",
      auth: true
    },
  }]
}, {
  path: '/scheme',
  redirect: '/scheme',
  component: LayoutComponent,
  meta: {
    title: "拓客方案",
    auth: true
  },
  children: [{
    path: '/scheme',
    name: 'scheme',
    component: saveTableComponent,
    meta: {
      title: "拓客方案",
      auth: true
    },
  }]
}, {
  path: '/finance',
  redirect: '/finance',
  component: LayoutComponent,
  meta: {
    title: "财务管理",
    auth: true
  },
  children: [{
    path: '/finance',
    name: 'finance',
    component: saveTableComponent,
    meta: {
      title: "财务管理",
      auth: true
    },
  }]
}, {
  path: '/staff',
  redirect: '/staff',
  component: LayoutComponent,
  meta: {
    title: "员工绩效",
    auth: true
  },
  children: [{
    path: '/staff',
    name: 'staff',
    component: sortTableComponent,
    meta: {
      title: "员工绩效",
      auth: true
    },
  }]
}, {
  path: '/report',
  redirect: '/report',
  component: LayoutComponent,
  meta: {
    title: "决策报表",
    auth: true
  },
  children: [{
    path: '/report',
    name: 'report',
    component: barChartsComponent,
    meta: {
      title: "决策报表",
      auth: true
    },
  }]
}, {
  path: '/setting',
  redirect: '/setting',
  component: LayoutComponent,
  meta: {
    title: "系统设置",
    auth: true
  },
  children: [
    {path: '/setting', component: sortTableComponent, meta: {title: "系统设置", auth: true}},
    {path: '/conf/service', component: serviceComponent, meta: {title: "服务项目", auth: true}},
    {path: '/conf/service/create', name: 'serviceCreate', component: serviceSaveComponent, meta: {title: "创建工时项目", auth: true}},
    {path: '/conf/service/update/:id', name: 'serviceUpdate', component: serviceSaveComponent, meta: {title: "更新工时项目", auth: true}},
    {path: '/conf/service/cat', component: serviceCategoryComponent, meta: {title: "工时分类", auth: true}},
    {path: '/conf/service/cat/create', name: 'serviceCatCreate', component: serviceCategoryCreateComponent, meta: {title: "创建工时类别", auth: true}},
    {path: '/conf/service/cat/update/:id', name: 'serviceCatUpdate', component: serviceCategoryCreateComponent, meta: {title: "更新工时类别", auth: true}},
    {path: '/conf/import/member', component: importMemberComponent, meta: {title: "导入客户", auth: true}},
    {path: '/conf/import/service', component: importServiceComponent, meta: {title: "导入工时项", auth: true}},
    {path: '/conf/import/parts', component: importPartsComponent, meta: {title: "导入配件", auth: true}},
  ]
}, {
  path: '/plugins/my',
  redirect: '/plugins/my',
  component: LayoutComponent,
  meta: {
    title: "已安装插件",
    auth: true
  },
  children: [
    {
      path: '/plugins/my',
      name: 'myPlugins',
      component: myPluginsComponent,
      meta: {
        title: "已安装插件",
        auth: true
      },
    },
    {
      path: '/plugins/mall',
      name: 'allPlugins',
      component: pluginsMallComponent,
      meta: {
        title: "插件商城",
        auth: true
      }
    }
  ]
}
]
const router = new VueRouter({
  routes,
  mode: 'hash', //default: hash ,history
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

//全局路由配置
//路由开始之前的操作
router.beforeEach((to, from, next) => {
  NProgress.done().start()
  let toName = to.name
  // let fromName = from.name
  let is_login = store.state.user_info.login

  if (!is_login && toName !== 'login') {
    next({
      name: 'login'
    })
  } else {
    if (is_login && toName === 'login') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

//路由完成之后的操作
router.afterEach(route => {
  NProgress.done()
})

export default router
