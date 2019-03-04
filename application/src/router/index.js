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
      path: '/home',
      name: 'Home',
      components: {
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

export default router

