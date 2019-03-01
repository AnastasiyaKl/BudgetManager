/*eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/Authentication'

import Authentication from '@/components/pages/Authentication/Authentication'
import Home from '@/components/pages/Home'

import Header from '@/components/Header'
import BudgetList from '@/components/Budget/BudgetList'

Vue.component('app-header', Header)
Vue.component('budget-list', BudgetList)

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: {
        default: Home,
        header: Header,
        budgetList: BudgetList
      } ,
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (Auth.default.user.authentication) {
      next()
    } else {
      router.push('login')
    }
  } else {
    next()
  }
})

export default router

//   export default new Router({
//     routes: [
//     {
//       path: '/login',
//       name: 'Authentication',
//       component: Authentication
//     },
//     {
//       path: '/home',
//       name: 'Home',
//       component: Home
//     }
//   ]
// })
