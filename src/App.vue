<template>
  <div id="app">
    <ul v-if="this.$route.name=='home'|this.$route.name=='sort'|this.$route.name=='benefits' | this.$route.name=='mine'| this.$route.name=='cart'">
      <li class="tabbar">
        <router-link :to="{name:'home'}" tag="span" class="t">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li class="tabbar">
        <router-link :to="{name:'sort'}" tag="span" class="t">
          <i class="el-icon-menu"></i>
          <span>分类</span>
        </router-link>
      </li>
      <li class="tabbar">
        <router-link :to="{name:'benefits'}" tag="span" class="t">
          <i class="el-icon-present"></i>
          <span>专享福利</span>
        </router-link>
      </li>
      <li class="tabbar">
        <router-link :to="{name:'cart'}" tag="span" class="t">
          <i class="el-icon-shopping-cart-2"></i>
          <span>购物车</span>
        </router-link>
      </li>
      <li class="tabbar">
        <router-link :to="{name:'mine'}" tag="span" class="t">
          <i class="el-icon-s-custom"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";

import ElementUI from "element-ui";

Vue.use(ElementUI);

import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "app"
};
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  
  ul {
    width: 100%;
    height: 50px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    z-index:100;
  }
  
  ul .tabbar {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: pink;
  }
  
  ul .tabbar .t {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
</style>
