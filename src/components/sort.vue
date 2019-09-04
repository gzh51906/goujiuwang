<template>
  <div class="sort">
    <div class="search-s1">
      <router-link :to="{name:'search'}" tag="span" class="t">
        <input type="text" placeholder=" 请输入商品名称" />
        <i icon="el-icon-search" class="el-icon-search"></i>
      </router-link>
    </div>
    <div class="content">
      <ul class="uilist1">
        <li class="title">
          <span class="kind">白酒</span>
          <span class="checkall">查看全部></span>
        </li>
        <li class="list_1" @click="gotolist">茅台</li>
        <li class="list_1" @click="gotolist">五粮液</li>
        <li class="list_1" @click="gotolist">剑南春</li>
        <li class="list_1" @click="gotolist">汾酒</li>
        <li class="list_1" @click="gotolist">郎酒</li>
        <li class="list_1" @click="gotolist">古井贡酒</li>
      </ul>
      <ul class="uilist1">
        <li class="title">
          <span class="kind">白酒</span>
          <span class="checkall">查看全部></span>
        </li>
        <li class="list_1" @click="gotolist">茅台</li>
        <li class="list_1" @click="gotolist">五粮液</li>
        <li class="list_1" @click="gotolist">剑南春</li>
        <li class="list_1" @click="gotolist">汾酒</li>
        <li class="list_1" @click="gotolist">郎酒</li>
        <li class="list_1" @click="gotolist">古井贡酒</li>
      </ul>
      <ul class="uilist1">
        <li class="title">
          <span class="kind">白酒</span>
          <span class="checkall">查看全部></span>
        </li>
        <li class="list_1" @click="gotolist">茅台</li>
        <li class="list_1" @click="gotolist">五粮液</li>
        <li class="list_1" @click="gotolist">剑南春</li>
        <li class="list_1" @click="gotolist">汾酒</li>
        <li class="list_1" @click="gotolist">郎酒</li>
        <li class="list_1" @click="gotolist">古井贡酒</li>
      </ul>
      <ul class="uilist1">
        <li class="title">
          <span class="kind">白酒</span>
          <span class="checkall">查看全部></span>
        </li>
        <li class="list_1" @click="gotolist">茅台</li>
        <li class="list_1" @click="gotolist">五粮液</li>
        <li class="list_1" @click="gotolist">剑南春</li>
        <li class="list_1" @click="gotolist">汾酒</li>
        <li class="list_1" @click="gotolist">郎酒</li>
        <li class="list_1" @click="gotolist">古井贡酒</li>
      </ul>
      <ul class="uilist1">
        <li class="title">
          <span class="kind">白酒</span>
          <span class="checkall">查看全部></span>
        </li>
        <li class="list_1">茅台</li>
        <li class="list_1">五粮液</li>
        <li class="list_1">剑南春</li>
        <li class="list_1">汾酒</li>
        <li class="list_1">郎酒</li>
        <li class="list_1">古井贡酒</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotolist() {
      this.$router.push("/goods");
    }
  }
};
</script>
<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
body {
  margin: 0px;
}
</style>
<style scoped>
html,body{
  height: 100%;
}
* {
  box-sizing: border-box;
  list-style: none;
}
.sort {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 50px);
}
.search-s1 {
  width: 100%;
  height: 45px;
  position: relative;
  padding: 5px 10px 5px 20px;
  color: #ccc;
  border-bottom: 1px solid #eee;
}
.search-s1 input {
  height: 35px;
  width: 95%;
  text-indent: 40px;
  border-radius: 5px;
  background-color: #ececec;
  border: none;
}
input::-webkit-input-placeholder {
  color: #ccc;
  letter-spacing: 1px;
}
.el-icon-search {
  width: 20px;
  position: absolute;
  left: 36px;
  top: 13px;
}
.content {
  flex: 1;
  width: 100%;
  height: 100%;
}
.uilist1 {
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px;
}
.uilist1 li:nth-child(1) {
  width: 100%;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #525252;
  padding: 3px 8px 0px 3px;
  height: 35px;
}
.kind {
  font-size: 18px;
  display: inline-block;
  font-weight: 100;
}
.checkall {
  color: #999;
  font-size: 13px;
}
.list_1 {
  width: 49%;
  height: 35px;
  line-height: 35px;
  color: #333;
  font-size: 12px;
  background-color: #f3f3f3;
  padding-left: 5px;
  margin-top: 5px;
}
</style>