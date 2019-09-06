<template>
  <div id="app">
    <div
      v-if="this.$route.name=='home'|this.$route.name=='sort'|this.$route.name=='benefits' | this.$route.name=='mine'| this.$route.name=='cart'"
    >
      <ul>
        <li
          class="tabbar"
          v-for="(ele,i) in tabs"
          :key="ele.name"
          :class="{active:i===activeIdxq}"
          @click="changq(i)"
        >
          <router-link :to="{name:ele.to}" tag="span" class="t">
            <i :class="ele.icon"></i>
            <span class="kind">{{ele.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";

import ElementUI from "element-ui";

Vue.use(ElementUI);

import "element-ui/lib/theme-chalk/index.css";
export default {
  data() {
    return {
      activeIdxq: 0,
      active: "/home",
      tabs: [
        {
          name: "首页",
          icon: "el-icon-s-home",
          to: "home"
        },
        {
          name: "分类",
          icon: "el-icon-menu",
          to: "sort"
        },
        {
          name: "专享福利",
          icon: "el-icon-s-home",
          to: "benefits"
        },
        {
          name: "购物车",
          icon: "el-icon-shopping-cart-2",
          to: "cart"
        },
        {
          name: "我的",
          icon: "el-icon-s-custom",
          to: "mine"
        }
      ]
    };
  },
  name: "app",
  methods: {
    changq(i) {
      this.activeIdxq = i;
      // this.active = i;
    }
  },
  created() {
    // console.log(this.$route);
    this.active = this.$route.path;
    // console.log(this.active);
    let path;
    this.tabs.forEach((element, i) => {
      // 遍历看下当前的路径和数据中的哪一组的to一致，一致的话就设置高亮为那一组的索引值，得到刷新高亮存在
      path = `/${element.to}`;
      // console.log(element.to, i);
      // console.log(this.active);
      // console.log(path);
      if (this.active == path) {
        // console.log(this.active);
        // console.log(path);
        this.activeIdxq = i;
      }
    });
  }
};
</script>
<style >
#app {
  max-width: 640px;
  margin: auto;
  min-width: 320px;
}
</style>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  max-width: 640px;
  margin: auto;
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: 100;
}

ul .tabbar {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
}

ul .tabbar .t {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
}
.t3 {
  color: #f44;
}
.kind {
  font-size: 14px;
}
.active {
  color: #f44;
}
</style>
