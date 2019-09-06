<template>
  <div class="search">
    <div class="serc">
      <div class="back" @click="gotoback">
        <i class="el-icon-s el-icon-arrow-left"></i>
      </div>
      <input type="text" placeholder=" 请输入商品名称" />
      <i icon="el-icon-search" class="el-icon-search el-icon-s"></i>
      <span class="span_search">搜索</span>
    </div>
    <div class="hot">
      <i icon="el-icon-time" class="el-icon-s el-icon-time">热门搜索</i>
    </div>
    <ul class="sort">
      <li>白酒</li>
      <li>红酒</li>
      <li>洋酒</li>
      <li>百威</li>
      <li>燕京</li>
      <li>雪花</li>
    </ul>
    <div class="hot">
      <i icon="el-icon-time" class="el-icon-s el-icon-time">搜索历史</i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // inputValue: ""
    };
  },
  methods: {
    gotoback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  list-style: none;
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
.hot {
  padding-left: 10px;
}
.sort {
  display: flex;
  padding-left: 15px;
}
li {
  border-radius: 15px;
  padding: 5px 10px;
  margin: 5px;
  background-color: #ccc;
  border: none;
  color: #333;
  font-size: 12px;
}
</style>