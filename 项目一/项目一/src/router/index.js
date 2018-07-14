import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerReceive from '@/components/routerReceive'
import Filter from '@/components/Filter'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Info from '@/components/Info'
import Content from '@/components/Content'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/detail',
      name: 'detail',
      component: Header,
      children:[]
    },
    {
      path: '/cultivate',
      name: 'cultivate',
      component: Info,
      children:[]
    },{
      path: '/test',
      name: 'test',
      component: Test,
      children:[]
    },
    {
      path: '/article',
      name: 'article',
      component: Content,
      children:[]
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[]
    },
    {
      path: '/dev/:idObj',
      name: 'dev',
      component: routerReceive
    },
    {
      path: '/filter',
      name: 'filter',
      component: Filter
    }
  ]
})
