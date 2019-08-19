import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index'
import flower from '../views/flower'
import detail from '../views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/flower',
      name: 'flower',
      component: flower
    },
    {
      path:'/detail',
      name:'detail',
      component:detail
    }
  ]
})
