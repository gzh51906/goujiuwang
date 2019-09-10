<template>
  <div style="height:2240px;">
    <div class="header">
      <i class="el-icon-arrow-left" @click="gotoback"></i>
      <span>【购酒网】福利页面</span>
    </div>
    <div class="pic">
      <img src="../assets/lp_01.jpg" alt style="height:367px; width:100%;" />
    </div>
    <div class="pic">
      <img src="../assets/lp_02.jpg" alt style="width:100%;" />
    </div>
    <div class="pic">
      <img src="../assets/lp_03.jpg" alt style="width:100%;" />
    </div>
    <div class="pic">
      <img src="../assets/lp_04.jpg" alt style="width:100%;" />
    </div>
     <div class="pic" style="float:left">
      <img src="../assets/lp_05.jpg" alt style="width:50%; float:left"/>
      <img src="../assets/lp_06.jpg" alt style="width:50%; float:left" />
     </div>
      <div class="pic">
      <img src="../assets/lp_07.jpg" alt style="width:100%;" />
    </div>
        <div class="pic">
      <img src="../assets/lp_08.jpg" alt style="width:50%; float:left" />
    </div>
       <div class="pic">
      <img src="../assets/lp_09.jpg" alt style="width:50%; float:left" />
    </div>
       <div class="pic">
      <img src="../assets/lp_10.jpg" alt style="width:50%; float:left" />
    </div>
       <div class="pic">
      <img src="../assets/lp_11.jpg" alt style="width:50%; float:left" />
    </div>
       <div class="pic">
      <img src="../assets/lp_12.jpg" alt style="width:50%; float:left" />
    </div>
       <div class="pic">
      <img src="../assets/lp_13.jpg" alt style="width:50%; float:left" />
    </div>
       <div class="pic">
      <img src="../assets/lp_14.jpg" alt style="width:50%; float:left" />
    </div>
       <div class="pic">
      <img src="../assets/lp_15.jpg" alt style="width:50%; float:left" />
    </div>
       <div class="pic">
      <img src="../assets/lp_16.jpg" alt style="width:50%; float:left" />
    </div>
      <div class="pic">
      <img src="../assets/lp_17.jpg" alt style="width:50%; float:left" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoback() {
      this.$router.push("/home");
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
img {
  vertical-align: middle;
}
.header {
  height: 46px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.header i {
  font-size: 18px;
  margin-left: 10px;
  color: #ccc;
}
.header span {
  margin-left: 90px;
}
</style>