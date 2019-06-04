import Vue from 'vue'
import Router from 'vue-router'
const error = ()=> import('@/components/404')
const menu = ()=> import('@/components/menu')
const fa = ()=> import('@/components/fa')
const filter = ()=> import('@/components/filter')
const ifelse = ()=> import('@/components/if-else')
const vuex = ()=> import('@/components/vuex')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu,
      alias:'/home'
    },
    {
      path:'*',
      name:'error',
      component:error
    },
    {
      path: '/fa',
      name: 'fa',
      component: fa
    },
    {
      path: '/filter',
      name: 'filter',
      component: filter
    },
    {
      path: '/if-else',
      name: 'ifelse',
      component: ifelse
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
  ]
})
