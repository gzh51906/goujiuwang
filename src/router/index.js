import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import axios from 'axios';
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
      component: mine,
      meta: { requiresAuth: true }

    },
    {
      name: 'cart',
      path: '/cart',
      component: cart,
      meta: { requiresAuth: true }

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


// 路由拦截
router.beforeEach(function(to,from,next){
  if(to.matched.some(item=>item.meta.requiresAuth)){
      // 判断是否已登录
      let authorization = localStorage.getItem('Authorization');
      if(authorization){
          // 发起校验
          axios.get('http://localhost:1906/verify',{
              headers:{
                  Authorization:authorization
              }
          }).then(res=>{
              window.console.log('then',res)
          })
          next();
      }else{
          next({
              path:'/login',
              query:{targetUrl:to.fullPath}
          })
      }
  }else{
      next();
  }
})


export default router