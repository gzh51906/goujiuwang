<template>
  <div class="datalist">
    <div class="serc">
      <div class="back" @click="gotoback">
        <i class="el-icon-s el-icon-arrow-left"></i>
      </div>
      <input type="text" placeholder=" 请输入商品名称" />
      <i icon="el-icon-search" class="el-icon-search el-icon-s"></i>
      <span class="span_search">搜索</span>
    </div>
    <ul class="sort">
      <li>
        <span>综合</span>
      </li>
      <li>
        <span>销量</span>
      </li>
      <li>
        <span>价格</span>
      </li>
    </ul>
    <div class="content">
      <el-row class="con_dalst">
        <el-col
          :span="12"
          class="dtlist_li"
          @click.native="gotodetail(item)"
          v-for="item in productlist"
          :key="item.ID"
        >
          <img :src="'http://img0.gjw.com/product/'+item.Pic" alt />
          <p class="name">{{item.ProductName}}</p>
          <p class="price">
            <span>￥{{item.APPPrice}}</span>
          </p>
          <p class="discuss">
            <span class="gooddiscuss">{{item.SumComment}}条好评</span>
            <span class="percentdiscuss">{{(item.GoodCommment/item.SumComment).toFixed(2)*100}}%好评</span>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productlist: []
    };
  },
  created() {
    console.log(this.$route.params);
    let path = this.$route.params;
    this.prolist(path);
  },
  methods: {
    async prolist(path) {
      path = path.name;
      let { data } = await this.$axios.get("http://localhost:1906/sort/goods",{
        params: { id: path }
      });
      this.productlist = data.data.length ? data.data[0].Prolist : [];
    },
    gotoback() {
      this.$router.push("/sort");
    },
    gotodetail(item) {
      function str(o) {
        var str1 = "";
        for (var key in o) {
          str1 = str1 + "&" + `${key}=${o[key]}`;
        }
        return str1.slice(1);
      }
      let str2 = str(item);
      this.$router.push(`/detail/${item.ID}?${str2}`);
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
.serc {
  width: 100%;
  height: 45px;
  position: relative;
  padding-top: 5px;
  color: #949494;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.serc .back {
  width: 38px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.serc input {
  height: 30px;
  width: 75%;
  text-indent: 40px;
  border-radius: 5px;
  background-color: #ececec;
  border: none;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #949494;
  letter-spacing: 1px;
}
.el-icon-s {
  margin-left: 10px;
}
.el-icon-search {
  position: absolute;
  left: 48px;
  top: 17px;
}
.span_search {
  color: #949494;
  font-size: 14px;
  margin-right: 10px;
}
.sort {
  display: flex;
  padding-left: 0px;
  font-size: 14px;
}
.sort li {
  width: 33%;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.sort li:nth-child(2) {
  border-right: solid 1px #faf3f3;
  border-left: solid 1px #faf3f3;
}
.content {
  padding: 0px 20px;
}
.content .dtlist_li:nth-child(2n + 1) {
  padding-right: 10px;
  border-right: 1px solid #faf3f3;
}
.content .dtlist_li:nth-child(2n) {
  padding-left: 10px;
}
.con_dalst {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.dtlist_li {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-bottom: 1px solid #faf3f3;
}
.dtlist_li img {
  width: 150px;
  height: 150px;
}
.name {
  color: #444;
  font-size: 14px;
  width: 95%;
  min-height: 76px;
  margin-top: 8px;
}
.dtlist_li .price {
  color: #ac2023;
  font-size: 14px;
  margin-top: 20px;
}
.dtlist_li .discuss {
  color: #999;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 43px;
}
</style>