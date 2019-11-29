import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DragSortPage from './views/DragSortPage.vue'
import CategoryScrollPage from './views/CategoryScrollPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/dragSortPage',
      name: 'DragSortPage',
      component: DragSortPage
    },
    {
      path: '/categoryScrollPage',
      name: 'CategoryScrollPage',
      component: CategoryScrollPage
    }
  ]
});
