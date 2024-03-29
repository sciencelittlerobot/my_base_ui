import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import FormList from './views/FormList.vue';
import CommonCss from './views/CommonCss.vue';
import DragSortPage from './views/DragSortPage.vue';
import CategoryScrollPage from './views/CategoryScrollPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  base: './', // 与vue.config.js中的publicPath保持一致
  routes: [
    {
      path: '/',
      name: 'formlist',
      component: FormList
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    // {
    //   path: '/formlist',
    //   name: 'formlist',
    //   component: FormList
    // },
    {
      path: '/commoncss',
      name: 'commoncss',
      component: CommonCss
    },
    {
      path: '/dragSortPage',
      alias: '/test1', // 路由别名
      name: 'DragSortPage',
      component: DragSortPage,
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path: '/categoryScrollPage',
      name: 'CategoryScrollPage',
      component: CategoryScrollPage
    }
  ]
});
