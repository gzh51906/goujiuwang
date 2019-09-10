<template>
  <div class="detail">
    <div class="top" ref="top">
      <div class="serc">
        <div class="back" @click="tobacktarget">
          <i class="el-icon-s el-icon-arrow-left"></i>
        </div>
        <div class="title">{{itemlist.ProductName}}</div>
      </div>
      <ul class="nav nav-tabs tabs box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
        <li class="nav-item" v-for="(ele,i) in list" :key="ele">
          <span
            class="nav-link"
            :class="{active:i===activeIdxq}"
            href="#"
            @click="changq(i)"
          >{{ele}}</span>
        </li>
      </ul>
      <el-carousel trigger="click" height="370px" arrow="always" class="banner">
        <el-carousel-item v-for="item in 4" :key="item">
          <img :src="'http://img0.gjw.com/product/'+itemlist.Pic" alt />
        </el-carousel-item>
      </el-carousel>
      <div class="info">
        <div class="goodname">
          <p>{{itemlist.ProductName}}</p>
          <span class="attention" @click="attention">
            <i class="el-icon-star-off"></i> 关注
          </span>
        </div>
        <div class="price">
          <span class="nowprice">￥{{itemlist.APPPrice}}</span>
          <span class="depreciate">降价通知</span>
        </div>
        <div class="box" v-if="ActivityNamelength">
          <div class="discout">
            <a>促销</a>
            <span v-for="item in itemlist.ActivityName" :key="item.Ativityname">{{item.Ativityname}}</span>
          </div>
        </div>
        <div class="getcoupon">
          领券
          <span>满200-10</span>
          <span>满600-50</span>
        </div>
        <div class="count">
          <span>数量</span>
          <el-input-number
            size="mini"
            v-model="num"
            class="count_1"
            id="count_1"
            @change="changenum"
          ></el-input-number>
        </div>
        <div class="delivery">
          送至&nbsp;&nbsp;上海市
          <i class="el-icon-arrow-right"></i>
          <p>有货</p>
        </div>
        <div class="hint">
          提示
          <span>{{itemlist.BagExplain}}</span>
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
          <span>评论({{itemlist.GoodCommment}})</span>
          <span>
            好评度
            <i>{{(itemlist.GoodCommment/itemlist.SumComment).toFixed(2)*100}}%</i>
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
      <div class="detail_1">
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
          <div v-if="ele.name==='商品介绍'">
            <img v-for="e in ele.imgurl" :src="e" :key="e" />
          </div>
          <div v-else-if="ele.name==='包装售后'">
            <p>{{ele.p}}</p>
          </div>
          <div v-else-if="ele.name==='规格介绍'">
            <el-table
              v-for="item in ele.tableData"
              border
              style="width: 100%"
              :key="item.AttrTitle"
              class="table_pro"
            >
              <el-table-column :label="item.AttrTitle" width="190"></el-table-column>
              <el-table-column :label="item.AttrVal" width="cal(100%-190)"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation">
      <el-row class="nav_item">
        <el-col :span="8">
          <el-col :span="11" class="nav_home" @click.native="goto('home')">
            <div class="bottom_left">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </div>
          </el-col>
          <el-col :span="11" class="nav_cart" @click.native="goto('cart')">
            <div class="bottom_left">
              <i class="el-icon-shopping-cart-2">
                <el-badge :value="cartlenth" class="item badge_item"></el-badge>
              </i>
              <span>购物车</span>
            </div>
          </el-col>
        </el-col>
        <el-col :span="16">
          <el-col :span="12">
            <div class="joincart" @click="add2cart">加入购物车</div>
          </el-col>
          <el-col :span="12">
            <div class="nowbuy" @click="buy">立即购买</div>
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
      activeIdxq: 0,
      isFixed: false,
      offsetTop: 0,
      itemlist: [],
      ActivityNamelength: 0,
      infor: "",
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
          name: "规格介绍",
          tableData: [
            {
              AttrTitle: "品牌",
              AttrVal: "茅台"
            },
            {
              AttrTitle: "商品编号",
              AttrVal: "6902952880065"
            },
            {
              AttrTitle: "净含量",
              AttrVal: "475ML以下"
            },
            {
              AttrTitle: "度数",
              AttrVal: "50度以上"
            },
            {
              AttrTitle: "手提袋",
              AttrVal: "两瓶配一个手提袋"
            },
            {
              AttrTitle: "香型",
              AttrVal: "酱香型"
            },
            {
              AttrTitle: "箱规",
              AttrVal: "1*6"
            },
            {
              AttrTitle: "规格",
              AttrVal: "单瓶"
            }
          ]
        },
        {
          name: "包装售后",
          p: "包装由购酒网专箱及胶带封箱"
        }
      ],
      list: ["商品", "详情", "评论"]
    };
  },
  computed: {
    cartlenth() {
      // return this.$store.state.cartlist.length;
      // 模块化后：
      // console.log(this.$store);
      return this.$store.state.cart.cartlist.length;
    }
  },
  mounted() {
    this.handleScroll();
  },
  created() {
    let path = this.$route.params;
    let item = this.$route.query;
    this.iteminf(path);
    this.add2cart(item);
  },
  methods: {
    async iteminf(path) {
      let ietmid = path.name;
      let { data } = await this.$axios.get(
        "http://47.106.178.206:5050/sort/item",
        {
          params: { id: ietmid }
        }
      );
      this.itemlist = data.data.length ? data.data[0] : [];
      // console.log("this.itemlist", this.itemlist);
      this.ActivityNamelength = this.itemlist.ActivityName.length;
      // console.log(this.ActivityNamelength);
    },
    changenum(e) {
      this.num = e;
    },
    handleScroll() {
      this.$refs.top.addEventListener("scroll", () => {
        var scrollTop = this.$refs.top.scrollTop;
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      });
      this.$nextTick(() => {
        //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
        this.offsetTop = document.querySelector("#boxFixed").offsetTop;
        this.offsetHeight = document.querySelector("#boxFixed").offsetHeight;
      });
    },
    tobacktarget() {
      // if (this.$route.query.target) {
      //   // this.$router.push(target);
      // } else {
      //   this.$router.push("/");
      // }
      this.$router.go("-1");
    },
    changi(i) {
      this.activeIdx = i;
    },
    changq(i) {
      // console.log(this.$refs.top.scrollTop);
      // console.log(i);
      if (i == 0) {
        this.$refs.top.scrollTop = 0;
      } else if (i == 1) {
        this.$refs.top.scrollTop = 1436;
      } else if (i == 2) {
        this.$refs.top.scrollTop = 705;
      }
      this.activeIdxq = i;
    },
    goto(val) {
      this.$router.push({ name: val });
    },
    attention() {
      // console.log("attention");
      // 判断是否是登录状态，是的话直接更换成有颜色的星星，不是的话就跳转到登录页面
    },
    buy() {
      this.add2cart();
      this.$router.push({ name: "cart" });
    },
    async add2cart(val) {
      // console.log("val", val);
      // 输入框的值
      let qty = this.num;

      let { Pic, APPPrice, ProductName, ID } = this.itemlist;
      // console.log(Pic, APPPrice, ProductName, ID, qty);
      let datas;
      if (Pic && APPPrice && ProductName && ID && qty) {
        // 查询指定商品，判断加入购物车的数据是否是已经存在数据库中了
        let { data } = await this.$axios.get(
          "http://47.106.178.206:5050/sort/cartlist",
          {
            params: { id: ID }
          }
        );
        let len = data.data.length;
        datas = data;
        // console.log("length", data.data.length);
        // console.log("qty", data.data[0].qty); //查询数据库得到的原本改条的qty
        // 如果长度不为0，说明存在，那么就修改数据
        if (len != 0) {
          let count = datas.data[0].qty;
          // i 为原本的qty和输入框的值的总和；
          let i = qty + count;
          // console.log("有该商品了");
          // 修改数据
          let { data } = await this.$axios.post(
            "http://47.106.178.206:5050/sort/updata",
            { ID, i }
          );
          let { cartlist } = this.$store.state.cart;
          // 判断当前商品是否已经存在购物车
          // 存在：改变数量
          // 不存在：添加商品
          Pic = `http://img0.gjw.com/product/${Pic}`;
          let hasItem = cartlist.filter(function(item) {
            //得到一个数组或空数组
            return item.ID === ID;
          })[0];
          // console.log("hasItem", hasItem);//判断当前商品是否已经存在购物车
          if (hasItem) {
            this.$store.commit("changeQty", { ID: ID, qty: hasItem.qty + qty });
          } else {
            this.$store.commit("addItem", {
              Pic,
              APPPrice,
              ProductName,
              ID,
              qty: qty
            });
          }
        } else {
          // console.log("没有该商品");
          // 直接添加该商品到数据库
          let { data } = await this.$axios.post(
            "http://47.106.178.206:5050/sort/cart",
            {
              Pic,
              APPPrice,
              ProductName,
              ID,
              qty
            }
          );
          let { cartlist } = this.$store.state.cart;
          // 格式化图片路径
          Pic = `http://img0.gjw.com/product/${Pic}`;
          let hasItem = cartlist.filter(function(item) {
            return item.ID === ID;
          })[0];
          // console.log("hasItem", hasItem); //同样要判断car页面是否含有该商品
          if (hasItem) {
            this.$store.commit("changeQty", { ID: ID, qty: hasItem.qty + qty });
          } else {
            this.$store.commit("addItem", {
              Pic,
              APPPrice,
              ProductName,
              ID,
              qty: qty
            });
          }
        }
      }
    }
  },
  //回调中移除监听
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    // console.log("destroyed");
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
  max-width: 640px;
  margin: auto;
  min-width: 320px;
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
.box_fixed {
  width: 100%;
  height: 55px;
  margin: 0 auto;
  line-height: 55px;
  display: flex;
  // margin-top: 30px;
  background: #fff;
}
.is_fixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
.tabs li {
  width: 33.3%;
  height: 100%;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
  color: #333;
  span {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid transparent;
  }
}
.tabs .active {
  color: #f44;
  border-bottom-color: #f44;
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
.discout {
  padding: 8px 0px;
  span {
    padding: 2px;
    margin-left: 10px;
    color: #f44;
    border: 1px solid #f44;
  }
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
  background: #fff;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  padding-left: 10px;
  max-width: 640px;
  margin: auto;
  min-width: 320px;
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
  position: relative;
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
  left: 24px;
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
.detail_1 {
  .nav-tabs {
    display: flex;
    font-size: 14px;
    padding: 5px 0px;
    .active {
      color: #f44;
    }
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
    min-height: 800px;
    img {
      width: 100%;
    }
  }
}
</style>
<style>
.el-table__body-wrapper {
  display: none;
}
.el-avatar {
  width: 47px;
}
.table_pro .el-table td,
.el-table th {
  padding: 0px;
}

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