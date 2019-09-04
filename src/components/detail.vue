<template>
  <div class="detail">
    <div class="top">
      <div class="serc">
        <div class="back" @click="tobacktarget">
          <i class="el-icon-s el-icon-arrow-left"></i>
        </div>
        <div class="title">53度 茅台飞天 （ 2019年产 ）200ml</div>
      </div>
      <ul class="tabs">
        <li>
          <span>商品</span>
        </li>
        <li>
          <span>详情</span>
        </li>
        <li>
          <span>评论</span>
        </li>
      </ul>
      <el-carousel trigger="click" height="370px" arrow="never" class="banner">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            src="http://img0.gjw.com/product/2017/0930/325f9fb461b249c0bf8be061b009f169_4.jpg"
            alt
          />
        </el-carousel-item>
      </el-carousel>
      <div class="info">
        <div class="goodname">
          <p>53度 茅台飞天 （ 2019年产 ）200ml</p>
          <span>
            <i class="el-icon-star-off"></i> 关注
          </span>
        </div>
        <div class="price">
          <span class="nowprice">￥998</span>
          <span class="depreciate">降价通知</span>
        </div>
        <div class="getcoupon">
          领券
          <span>满200-10</span>
          <span>满600-50</span>
        </div>
        <div class="count">
          <span>数量</span>
          <el-input-number size="mini" v-model="num" class="count_1"></el-input-number>
        </div>
        <div class="delivery">
          送至&nbsp;&nbsp;上海市
          <i class="el-icon-arrow-right"></i>
          <p>有货</p>
        </div>
        <div class="hint">
          提示
          <span>每购买1瓶，即赠送原厂手提袋1个</span>
          <p>此商品不支持货到付款</p>
        </div>
      </div>
      <ul class="server">
        <li>
          <i class="el-icon-circle-check"></i>购酒发货&售后
        </li>
        <li>
          <i class="el-icon-circle-check"></i>正品保障
        </li>
        <li>
          <i class="el-icon-circle-check"></i>满100包邮
        </li>
        <li>
          <i class="el-icon-circle-check"></i>七天退货
        </li>
      </ul>
      <div class="discuss">
        <div class="discusstitle">
          <span>评论(13)</span>
          <span>
            好评度
            <i>92%</i>
            <b class="el-icon-arrow-right"></b>
          </span>
        </div>
        <ul class="discusslist">
          <li>
            <el-avatar icon="el-icon-user" class="dis_el-icon-user"></el-avatar>
            <div class="discontent">
              <div class="user">
                152*****860
                <span>铜牌酒友</span>
              </div>
              <div class="description">
                <span class="start">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="time">2019-05-15 08:23:52</span>
              </div>
              <div class="content">
                <p>正品，值得买。赶快收藏</p>
                <img
                  src="http://img0.gjw.com/show/2019/0515/26e77d70d8844f818e46fbec204a8749.png"
                  alt
                />
              </div>
            </div>
          </li>
          <li>
            <el-avatar icon="el-icon-user" class="dis_el-icon-user"></el-avatar>
            <div class="discontent">
              <div class="user">
                152*****860
                <span>铜牌酒友</span>
              </div>
              <div class="description">
                <span class="start">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="time">2019-05-15 08:23:52</span>
              </div>
              <div class="content">
                <p>正品，值得买。赶快收藏</p>
                <img
                  src="http://img0.gjw.com/show/2019/0515/26e77d70d8844f818e46fbec204a8749.png"
                  alt
                />
              </div>
            </div>
          </li>
          <li>
            <el-avatar icon="el-icon-user" class="dis_el-icon-user"></el-avatar>
            <div class="discontent">
              <div class="user">
                152*****860
                <span>铜牌酒友</span>
              </div>
              <div class="description">
                <span class="start">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="time">2019-05-15 08:23:52</span>
              </div>
              <div class="content">
                <p>正品，值得买。赶快收藏</p>
                <img
                  src="http://img0.gjw.com/show/2019/0515/26e77d70d8844f818e46fbec204a8749.png"
                  alt
                />
              </div>
            </div>
          </li>
        </ul>
        <el-button plain class="lookall">
          查看全部评论
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
      <div class="detail">
        <ul class="nav nav-tabs">
          <li class="nav-item" v-for="(ele,i) in tabs" :key="ele.name">
            <span
              class="nav-link"
              :class="{active:i===activeIdx}"
              href="#"
              @click="changi(i,$event)"
            >{{ele.name}}</span>
          </li>
        </ul>
        <div v-for="(ele,i) in tabs" v-show="i===activeIdx" :key="ele.name" class="listpro active">
          <div v-if="ele.imgurl">
            <img v-for="e in ele.imgurl" :src="e" :key="e" />
          </div>
        </div>
      </div>
    </div>
    <div class="navigation">
      <el-row class="nav_item">
        <el-col :span="8">
          <el-col :span="11" class="nav_home">
            <div class="bottom_left">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="bottom_left">
              <i class="el-icon-shopping-cart-2">
                <el-badge :value="3" class="item badge_item"></el-badge>
              </i>
              <span>购物车</span>
            </div>
          </el-col>
        </el-col>
        <el-col :span="16">
          <el-col :span="12">
            <div class="joincart">加入购物车</div>
          </el-col>
          <el-col :span="12">
            <div class="nowbuy">立即购买</div>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      activeIdx: 0,
      tabs: [
        {
          name: "商品介绍",
          imgurl: [
            "http://img0.gjw.com/Minisite/2019/LY/1/1-10/1/lp_01.jpg",
            "http://img0.gjw.com/Minisite/2019/LY/1/1-10/1/lp_02.jpg",
            "http://img0.gjw.com/Minisite/2019/LY/1/1-10/1/lp_03.jpg",
            "http://img0.gjw.com/Minisite/2019/LY/1/1-10/1/lp_04.jpg"
          ]
        },
        {
          name: "规格介绍",text:["aa","bb","cc"]
        },
        {
          name: "包装售后",
          p:"hahahahhaahh"
        }
      ]
    };
  },
  methods: {
    tobacktarget() {
      console.log(this.tabs[0].imgurl);

      console.log(this.$route);
      if (this.$route.query.target) {
        this.$router.push(target);
      } else {
        this.$router.push("/goods");
      }
    },
    changi(i, e) {
      this.activeIdx = i;
    }
  }
};
</script>
<style  scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body,
.detail {
  height: 100%;
}
.detail .top {
  height: calc(100% - 50px);
  overflow: auto;
  font-size: 14px;
}
.detail .top .serc {
  width: 100%;
  height: 45px;
  color: #949494;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #faf3f3;
}
.detail .top .serc .back {
  width: 38px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}
.detail .top .serc .title {
  font-size: 16px;
  color: #000;
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
}
.tabs {
  display: flex;
  height: 45px;
  margin-top: 30px;
}
.tabs li {
  width: 33.3%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
  color: #333;
  border-bottom: 2px solid transparent;
}
.tabs li:nth-child(1) {
  border-bottom-color: #f44;
  color: #f44;
}
.banner img {
  width: 100%;
}
.info {
  padding: 0px 20px;
  font-size: 14px;
}
.info .goodname {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #faf3f3;
  padding: 10px 0px;
}
.info .goodname p {
  font-size: 14px;
  color: #333;
}
.info .goodname span {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  margin-right: 10px;
  color: #333;
}
.info .price {
  border-bottom: 1px solid #faf3f3;
  padding: 10px 0px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.info .price .nowprice {
  color: #fb223e;
}
.info .price .depreciate {
  border: 1px solid #e5e5e5;
  font: inherit;
}
.getcoupon {
  padding: 8px 0px;
}
.getcoupon span:nth-child(1) {
  margin-right: 5px;
  margin-left: 10px;
}
.getcoupon span {
  padding: 7px;
  background: url(http://m.gjw.com/images/product_coupon_can_use.png) no-repeat;
  background-size: 100% 100%;
}
.info .count {
  border-bottom: 1px solid #faf3f3;
  padding: 10px 0px;
  font-size: 14px;
}
.info .count .count_1 {
  margin-left: 20px;
}
.info .delivery {
  font-size: 14px;
  color: #333;
}
.info .delivery i {
  float: right;
  color: #333;
}
.info .delivery p {
  color: rgb(251, 34, 62);
  margin-top: 20px;
}
.navigation {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  padding-left: 10px;
}
.navigation .nav_item {
  padding-top: 5px;
}
.navigation .bottom_left {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  margin-right: 10px;
  color: #333;
}
.nav_home {
  margin-right: 5px;
  border-right: 1px solid #faf3f3;
}
.navigation .bottom_left span {
  font-size: 14px;
}
.navigation .bottom_left i .badge_item {
  position: absolute;
  left: 90px;
}
.nowbuy,
.joincart {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
.joincart {
  background-color: #f85;
}
.nowbuy {
  background-color: #f44;
}
.hint {
  padding: 10px 0px;
  border-top: 1px solid #faf3f3;
  p {
    margin-top: 10px;
    color: #999;
  }
}
.server {
  font-size: 14px;
  display: flex;
  background-color: #f8f8f8;
  li {
    color: #666;
    padding: 8px 5px;
    i {
      color: #f44;
    }
  }
}
.discuss {
  .discusstitle {
    display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    span {
      width: 49%;
      i {
        font-style: normal;
        color: #fb223e;
      }
    }
  }
  .discusslist {
    padding-top: 8px;
    li {
      padding: 13px 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
      display: flex;
      .dis_el-icon-user {
        font-size: 28px;
        color: pink;
        background-color: rgba(255, 192, 203, 0.432);
        margin-right: 15px;
      }
      .discontent {
        color: #666;
        width: 100%;
        .user {
          span {
            padding: 2px 3px;
            font-size: 12px;
            border-radius: 5px;
            color: #fff;
            background-color: #ff7f00;
          }
        }
        .description {
          display: flex;
          justify-content: space-between;
          margin: 10px 0px;
          color: #999;
          .start {
            width: 90px;
            display: flex;
            i {
              width: 15px;
              height: 15px;
              background-image: url(http://m.gjw.com/images/comment_good.png);
              background-size: 100% 100%;
            }
          }
        }
        .content {
          p {
            margin-bottom: 10px;
          }
          img {
            width: 50%;
          }
        }
      }
    }
  }

  .discusslist li:last-child {
    border-bottom: none;
  }
  .lookall {
    outline: none;
    width: 97%;
    padding: 18px;
    font-size: 16px;
    margin-left: 5px;
  }
}
.discuss span:nth-child(2) {
  text-align: right;
}
.detail {
  .nav-tabs {
    display: flex;
    font-size: 14px;
    padding: 5px 0px;
    li {
      width: 33%;
      padding: 20px;
      text-align: center;
    }
  }
  .nav-tabs li:nth-child(2) {
    border-left: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
  }
  .listpro {
    img {
      width: 100%;
    }
  }
}
</style>
<style >
.el-carousel__indicator .el-carousel__button {
  background-color: #999;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.el-carousel__indicator.is-active button {
  background-color: #ff6600;
}
.el-input-number--mini {
  width: 100px;
}
</style>