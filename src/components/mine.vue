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
      <span style="margin-left:-85px" @click="gotor">注册/</span>
      <span @click="gotol">登录 <i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="mine-a">
      <span style="margin-left:10px">我的订单</span>
      <span style="margin-right:10px">全部订单 <i class="el-icon-arrow-right"></i></span>
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
        <span style="margin-right:10px">零钱明细 <i class="el-icon-arrow-right"></i></span>
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
      <div class="mine-e2">
        <ul>
          <li style='margin-left:0;'>
            <img src="../assets/1cf950b6d2a24c19995c6fc7ad965038_1.jpg" />
            <p>￥588</p>
          </li>
          <li>
            <img src="../assets/28fae5969a2047698e149c4c8058ccd9_1.jpg" />
            <p>￥328</p>
          </li>
          <li>
            <img src="../assets/130aae1e17a84b66af3592e04b7bbc71_1.jpg" />
            <p>￥438</p>
          </li>
          <li>
            <img src="../assets/472d0547a9c44a4488d04dc5eabbf2e1_1.jpg" />
            <p>￥238</p>
          </li>
          <li>
            <img src="../assets/062060dbf7eb4a559cb4b246c2d8c72e_1.jpg" />
            <p>￥118</p>
          </li>
          <li>
            <img src="../assets/66076ce9709a47cdaaef0c8128c6d392_1.jpg" />
            <p>￥888</p>
          </li>
          <li>
            <img src="../assets/226326af03f04bac8421669afccac597_1.jpg" />
            <p>￥348</p>
          </li>
          <li>
            <img src="../assets/8223430ac116464b8dc4d82f81bd3cfb_1.jpg" />
            <p>￥328</p>
          </li>
          <li>
            <img src="../assets/a139ef060f8043a5aea12fa5a55f3680_1.jpg" />
            <p>￥388</p>
          </li>
          <li>
            <img src="../assets/cb2a83e93b5a46c493d01aceb5f3c4ab_1.jpg" />
            <p>￥398</p>
          </li>
          <li>
            <img src="../assets/e32fb10d420d443688d028f00be09c78_1.jpg" />
            <p>￥343</p>
          </li>
          <li>
            <img src="../assets/68f97f4619a94834b0d10b92d1db37d5_1.jpg" />
            <p>￥133</p>
          </li>
        </ul>
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
  },
  methods:{
     gotol(){
       this.$router.push('/login')
     },
       gotor(){
       this.$router.push('/reg')
     }
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
  height: 260px;
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
  height: 20px;
  width: 76px;
  margin-left: -50px;
  line-height: 20px;
  position: relative;
  left: 50%;
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
.mine-e2 {
  margin-top: 10px;
  overflow-x: auto;
}
.mine-e2 ul {
  display: flex;
  align-items: center;
}
.mine-e2 li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 10px;
}
.mine-e2 p{
  width: 100%;
  height: 25px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color:#fff;
  text-align: center;
  line-height:25px
}
</style>