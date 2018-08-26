import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyTable from '@/components/MyTable'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home,
    },
    {
      path: '/table',
      name: 'MyTable',
      component: MyTable
    },
  ]
})
