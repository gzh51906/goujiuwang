<template>
  <div id="app">
    <a id="a_appdownload">
      <img src="../assets/img/appdown0105.jpg" alt="" id="appdownload" height="60px" width="100%">
      <div id="deldownload-btn"></div>
    </a>
    <div class="home_img">
      <div class="search_bg hide"></div>
      <!-- <div class="search_box">
        <i class="van-icon van-icon-search">
          <span>请输入商品名称</span>
        </i>
      </div> -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <!-- <h3>{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home_class">
      <div class="container">
        <div class="notice">
          <div class="ico">
            <img src="../assets/img/hot.png" alt="">
          </div>
          <div class="notice-con van-swipe">
              <el-carousel height="200px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="item in 3" :key="item">
                  <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <!-- 下面的图标 -->
    <div class="tainer">
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/34c90a46f767478897208adca7681ae4.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/3f257a2d80cb49e5a1e65340201329f0.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/a8da83fed83c44f2a7a9f64862cd6489.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/229cbdd4a909417ba6218c7e21b48131.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/8bf04e420aa64ccfbb9ae530f82ddd7d.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/b0041913b9844e519782312fa1c66118.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/07223d7582de4438875efedac3d9cd90.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/c7ee25ce88144ebe9f1c743c64df2000.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/8fccd4a2c00947869641bd32c0a4c42f.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div class="row_col_img van-col">
            <div class="van-row">
              <img src="../assets/img/a4b34eda8bc24782994a4d86cd2528ce.jpg" alt="">
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="secodes_good">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="good">
              <img src="../assets/img/6d54fc527f404267ac4cc4d722331125.jpg" alt="">
              <div class="box">
                <h5>50度 郎酒 郎牌特曲T6 精英版 500ml</h5>
                <div class="bt">
                  <span class="price">￥118</span>
                  <a href="" class="btn_qg fr">马上抢</a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="good">
              <img src="../assets/img/68f97f4619a94834b0d10b92d1db37d5.jpg" alt="">
              <div class="box">
                <h5>【整箱装】53度 茅台镇 舒心 原浆老酒1986 升级版 500ml*12瓶</h5>
                <div class="bt">
                  <span class="price">￥179</span>
                  <a href="" class="btn_qg fr">马上抢</a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="good">
              <img src="../assets/img/3105732755f8468b85dcab789173906c.jpg" alt="">
              <div class="box">
                <h5>意大利 查理庄园 蓝布鲁斯科 甜红低泡 葡萄酒 750ml</h5>
                <div class="bt">
                  <span class="price">￥1128</span>
                  <a href="" class="btn_qg fr">马上抢</a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="good">
              <img src="../assets/img/ec5bb0b7732b44e48eda3de8fe2f4f1e.jpg" alt="">
              <div class="box">
                <h5>法国 中级庄 上梅多克产区 奥瑞克庄园 红葡萄酒 2009 750ml</h5>
                <div class="bt">
                  <span class="price">￥228</span>
                  <a href="" class="btn_qg fr">马上抢</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vann-row">
      <div class="vann-col">
        <a href="">
          <img src="../assets/img/7eac9783820a4e48af67f1ed91d91673.jpg" alt="">
        </a>
      </div>
      <div class="vann-col">
        <a href="">
          <img src="../assets/img/38f8d03e3cb2484e862bd1b45e40a96c.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="cotainer">
      <div class="van-row">
        <div class="van-col van-col-12">
          <a href="">
            <img src="../assets/img/b2810c4bc1fd403aaeeb0e271c13a389.jpg" alt="">
          </a>
        </div>
        <div class="van-col van-col-6">
          <a href="">
            <img src="../assets/img/8e9397b74cc04da1bc9051184f2f8c67.jpg" alt="">
          </a>
        </div>
        <div class="van-col van-col-6">
          <a href="">
            <img src="../assets/img/fdfed8b0f2a24b76bd481c145a69f3ed.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="index-ico">
      <div class="van-row">
        <div class="van-col van-col-8">
          <span class="red">正品保证</span>
        </div>
        <div class="van-col van-col-8">
          <span class="red">开箱验货</span>
        </div>
        <div class="van-col van-col-8">
          <span class="red">赔付保证</span>
        </div>
      </div>
      <a href="">
        <img src="../assets/img/2a4c5c46055a4c47a0c9eca9c88e9c2b.jpg" alt="" width="100%">
      </a>
      <a href="">
        <img src="../assets/img/9c1ea9c32bf4423bb60816212e87b02a.jpg" alt="" width="100%">
      </a>
    </div>
    <div class="tabs home">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="精选" name="first">
          <div class="van-tabs-content">
            <div class="van-tab-pane">
              <div class="van-list">
                <div class="van-row">
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/3b4fd29e71f7464fb9ee7ba02d207aee_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/e176bdc2c69b4fc090daf51e971d4a59_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/97e2ca20ba574c14a99c3155d8f59791_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/9ab33df7f6124d87a831704b7ffc545b_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/f024d3dbf1db4127897360a0eb41b257_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/6a4dcbb3d64247c0afc76c4cafcf8b6d_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="白酒" name="second">
          <div class="van-tabs-content">
            <div class="van-tab-pane">
              <div class="van-list">
                <div class="van-row">
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/30130a1219984c949512f83eb52db1eb_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/b01c5b4eccdd4d34a5c1feca7175a0d2_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/91b5305bbca94bc4b73f82cbb455b288_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/130aae1e17a84b66af3592e04b7bbc71_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/28fae5969a2047698e149c4c8058ccd9_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/bce12f589920489c97d90d3353de2477_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="葡萄酒" name="third">
          <div class="van-tabs-content">
            <div class="van-tab-pane">
              <div class="van-list">
                <div class="van-row">
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/797e628763c5433b803cf06e5b492c21_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/f024d3dbf1db4127897360a0eb41b257_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/1bfe984a98ac4a728ca1fc56058e93b3_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/418ff41a27584913a07cb1645059bd89_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/cb1c522ab008413a9eb9b69461c24b32_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/ec5bb0b7732b44e48eda3de8fe2f4f1e.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="清酒洋酒" name="fiveth">
          <div class="van-tabs-content">
            <div class="van-tab-pane">
              <div class="van-list">
                <div class="van-row">
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/18abc1ee1b0f45a89d136bb188c44fb9_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/37d8820d8748489dac15ba96ab2a1f7e_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/54e9e4264dc64688b4f527a155c5fa66_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/ae148917f33049f3bc3b1d38a945ea56_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/4dcf073a9c5c4c8594227c716b0084b0_2.jpg" alt="">
                        <p class="tit2">53度 茅台王子 酱香经典 （ 2018年产 ） 500ml</p>
                        <div class="tag">
                          <span>赠品促销</span>
                        </div>
                        <div class="red">￥439</div>
                      </a>
                    </div>
                  </div>
                  <div class="van-col van-col-12">
                    <div class="pro-item">
                      <a href="">
                        <img src="../assets/img/c041433b4149416792f7ce1f90eb8470_2.jpg" alt="">
                        <p class="tit2">53度 习酒 窖藏 1988（2012年产）500ml</p>
                        <div class="tag">
                          <span>限时抢购</span>
                        </div>
                        <div class="red">￥779</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>
<script>
   export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    height:300px;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__container {
    height: 180px;
  }

  .el-carousel__item:nth-child(2n) {
    background:url(../assets/img/1ffddd42cd1a4796b8b11652896a9de5.jpg)
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background:url(../assets/img/5f1891411428456a8124d0ab59088329.jpg)
  }

  .home_class .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.home_class .notice{
  width: 100%;
  margin: 10px auto;
  overflow: hidden;
  line-height: 30px;
  display: flex;
}

.home_class .notice .ico img {
    width: 80px;
    margin-top: 5px;
}

.home_class .notice .notice-con {
    float: left;
    height: 30px;
    width: 70%;
    margin-left: 10px;
}

/* 上面走马灯有问题 */
.tainer{
  display: flex;
  flex-wrap: wrap;
  /* flex: 1; */
  /* justify-content: center;
  align-items: center; */
  /* flex-direction: column; */
}

.home_class .row_col_img {
    text-align: center;
    width: 20%;
    color: #999;
}

.tainer .row_col_img .van-row img{
  width: 70px;
  height: 70px;
}

.home_class .van-row {
    margin: 10px auto;
}

.home_class .van-row img {
    width: 100%;
}

/* 横向移动 */
.secods_good{
  width: 100%;
  height: 120px;
}

.swiper-container{
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
}
.swiper-wrapper{
  display:flex;
  overflow-x: auto;
  height:120px;
}


.secodes_good .swiper-slide {
  width: 80%;
}

.secodes_good .good {
    background: #f8f8f8;
    padding: 10px;
    height: 100px;
    width: 280px;
}

.secodes_good .good img {
    display: inline-block;
    float: left;
    /* padding: 5px; */
    border-radius: 10px;
    width: 110px;
    height: 110px;
}

.secodes_good .good .box {
    position: relative;
    height: 100px;
    margin-left: 120px;
}

.secodes_good .good .box h5 {
    padding: 0;
    margin: 5px 0;
    border-bottom: #eee 1px solid;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.secodes_good .good .box .bt {
    position: absolute;
    bottom: 5px;
    width: 100%;
}

.secodes_good .good .box .bt .price {
    color: #f44;
    float: left;
}

.secodes_good .good .box .bt .btn_qg {
    background: #5EAFFE;
    color: #fff;
    border-radius: 5px;
    padding: 3px;
    font-size: 12px;
}

.vann-row{
  margin: 10px auto;
  display: flex; 
  height:152px;
}

.vann-col{
  width: 50%;
  float: left;
  
}

.vann-col img{
  width: 182px;
  height: 150px;
}

.cotainer {
  width: 100%;
  height: 115px;
}

.cotainer .van-row{
  /* margin: 10px auto; */
  width: 345px;
  height: 165px;
}

.cotainer .van-col{
  float: left;
}

.van-col-6{
  width: 25%;
}
.cotainer .van-col-12{
  width: 50%;
}

.cotainer .van-col img{
  /* width: 172px; */
  height: 110px;
  width: 100%; 
}

.index-ico{
  /* display: flex; */
  width: 345px;
  height: 240px;
}

.index-ico .van-row{
  display: flex;
  width: 345px;
  height: 25px;
  text-align: center;
  margin: 10px auto;
}

.van-col-8{
  width: 33.3333%;
}

.index-ico .van-col{
  float: left;
}

.tabs home{
  width: 375px;
  height: 3932px;
}

.el-tabs{
  width: 375px;
  /* height: 3932px */
}

/* 最好祝贺 ******************************************************************************/

.van-col--12 {
    width: 50%;
}

.tabs .van-tabs-content{
  width: 365px;
  /* height: 6645px; */
}

.tabs .van-tab-pane{
  width: 365px;
  /* height: 6645px; */
}

.tabs .van-tab-pane .van-row{
  margin-left: 5px;
  margin-right: -5px;
  margin: 5px auto;
  display: flex;
  flex-wrap:wrap;
}

.tabs home .van-tab-pane .van-col{
  padding-left: 5px;
  padding-right: 5px;
  width: 187px;
  height: 277px;
  float: left;
}

.tabs .van-tab-pane .pro-item {
    margin-bottom: 10px;
    height: 290px;
    border: #eee 1px solid;
}

.tabs .van-tab-pane .pro-item img{
  display: inline-block;
  /* width: 50%; */
  height: 168px;
}

.tabs .van-tab-pane .pro-item .tit2{
  width: 168px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.3;
  margin: 5px 0;
  height: 36px;
  font-family: Arial, Helvetica, "STHeiti STXihei", "Microsoft YaHei";
  font-size: 12px;
}

.tag {
    text-align: left;
    height: 22px;
    clear: both;
}

.tag span {
    border-radius: 5px;
    padding: 2px;
    font-size: 10px;
    /* color: #fff; */
    margin: 0 5px;
}

.red {
    color: #fb223e;
}

</style>