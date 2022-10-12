
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'
import userManagement from '@/pages/userManagement'
import ruleManagement from '@/pages/ruleManagement'
import menuManagement from '@/pages/menuManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children: [
        {
          path: '/userManagement',
          name: '用户管理',
          component: userManagement
        },
        {
          path: '/menuManagement',
          name: '菜单管理',
          component: menuManagement
        },
        {
          path: '/ruleManagement',
          name: '角色管理',
          component: ruleManagement
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ]
})
