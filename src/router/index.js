import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import home from '../components/home.vue'
import sort from '../components/sort.vue'
import benefits from '../components/benefits.vue'
import mine from '../components/mine.vue'
import cart from '../components/cart.vue'
import search from '../components/search.vue'
import goods from '../components/goods.vue'
import detail from '../components/detail.vue'
import login from '../components/Login.vue'
import reg from '../components/Reg.vue'
let router = new VueRouter({
  routes: [{
      name: 'home',
      path: '/home',
      component: home,
    },
    {
      path: '/',
      redirect: '/home'

    },
    {
      name: 'sort',
      path: '/sort',
      component: sort

    },
    {
      name: 'benefits',
      path: '/benefits',
      component: benefits

    },
    {
      name: 'mine',
      path: '/mine',
      component: mine

    },
    {
      name: 'cart',
      path: '/cart',
      component: cart

    },
    {
      name: 'login',
      path: '/login',
      component: login

    },
    {
      name: 'reg',
      path: '/reg',
      component: reg
    },
    {
      name: 'search',
      path: '/search',
      component: search,
    }, {
      name: 'goods',
      path: '/goods/:name',
      component: goods,
    }, {
      name: 'detail',
      path: '/detail/:name',
      component: detail,
    }
  ]
})
export default router