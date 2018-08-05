import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Question from '@/components/Question'
import Introduce from '@/components/Introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/question',
      name: 'question',
      component: Question
    }, {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    }
  ]
})
