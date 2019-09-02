<template>
  <div>
    <div class="header">
      <el-col :span="12" style="margin-left:10px;">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="80" :src="circleUrl"></el-avatar>
          </div>
          <div class="block" v-for="size in sizeList" :key="size"></div>
        </div>
      </el-col>
      <span style="margin-left:-85px">注册/</span>
      <span>登录&gt;</span>
    </div>
    <div class="mine-a">
      <span style="margin-left:10px">我的订单</span>
      <span style="margin-right:10px">全部订单&gt;</span>
    </div>
    <div class="mine-b">
      <ul>
        <li>
          <img src="../assets/wd_01dfk.png" alt />待付款
        </li>
        <li>
          <img src="../assets/wd_02dfh.png" alt />待发货
        </li>
        <li>
          <img src="../assets/wd_03dsh.png" alt />待收货
        </li>
        <li>
          <img src="../assets/wd_04dpj.png" alt />待评价
        </li>
      </ul>
    </div>
    <div class="mine-c">
      <div class="mine-c1">
        <span style="margin-left:10px">我的钱包</span>
        <span style="margin-right:10px">零钱明细&gt;</span>
      </div>
      <div class="mine-c2">
        <ul>
          <li>
            <i>0</i>账户余额
          </li>
          <li>
            <i>0</i>优惠卷
          </li>
          <li>
            <i>0</i>积分
          </li>
        </ul>
      </div>
    </div>
    <div class="mine-d">
      <ul>
        <li>
          <img src="../assets/icon_collection.png" alt />商品收藏
        </li>
        <li>
          <img src="../assets/icon_foot_print.png" alt />浏览足迹
        </li>
        <li style="color:red">
          <img src="../assets/kfrx.png" alt />400-722-1919
        </li>
        <li>
          <img src="../assets/bag.png" alt />领券福利
        </li>
      </ul>
    </div>
    <div class="mine-e">
      <div class="mine-e1">
        <h2>推荐商品</h2>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      sizeList: ["large"]
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
li,
ul {
  list-style: none;
}
i {
  font-style: normal;
}
</style>
<style scoped>
.header {
  width: 100%;
  height: 160px;
  background: #2e313a;
  display: flex;
  align-items: center;
}
.header span {
  color: #fff;
  font-size: 14px;
}
.mine-a { 
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
}
.mine-b {
  height: 93px;
  border-bottom: 1px solid #eeeeee;
}
.mine-b ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
}
.mine-b ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mine-b img {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
}
.mine-c {
  height: 125px;
  border-bottom: 1px solid #eeeeee;
  margin-top: 10px;
}
.mine-c1 {
  height: 44px;
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
}
.mine-c2 {
  height: 81px;
}
.mine-c2 ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
}
.mine-c2 ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mine-c2 i {
  margin-bottom: 10px;
}
.mine-d {
  height: 104px;
  border-top: 1px solid #eeeeee;
  margin-top: 10px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 10px;
}
.mine-d ul {
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
.mine-d ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mine-d img {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
}
.mine-e {
  height: 200px;
 
}
.mine-e1 {
  width: 80%;
  color: #eeaa22;
  margin: 5px auto;
   position: relative;
}
.mine-e1 h2 {
  background-color: #f4f5f7;
  font-weight: normal;
  font-size: 14px;
  padding: 0 10px;
  height:20px;
  width:76px;
  margin-left:-50px;
  line-height: 20px;
  position: relative;
  left:50%;
  z-index: 3;
  text-align: center;
}
 .mine-e1 .line {
  border-bottom: #eeaa22 1px solid;
  height: 0;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
}
</style>