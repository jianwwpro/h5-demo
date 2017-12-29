import Vue from 'vue'
import Router from 'vue-router'
import InitPage from '@/components/InitPage'
import IndexPage from '@/components/IndexPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InitPage',
      component: InitPage
    },
    {
      path: '/IndexPage',
      name: 'IndexPage',
      component: IndexPage
    }
  ]
})
