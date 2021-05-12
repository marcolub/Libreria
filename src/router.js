import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Books from '@/components/Books'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    }
  ]
})
