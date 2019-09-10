<template>
  <div>
    <div class="header">
      <span style="margin-left:140px;">购物车</span>
      <span style="margin-left:130px;">编辑</span>
    </div>
    <div class="cart">
      <el-row :gutter="20" v-for="item in cartlist" :key="item.ID" class="list">
        <el-col :span="16">
          <el-col :span="6">
            <img :src="'http://img0.gjw.com/product/'+item.Pic" alt @click="goto(item.ID)" />
          </el-col>
          <el-col :span="16" :offset="1">
            <h4>{{item.ProductName}}</h4>
            <p class="pricea">
              <span>￥{{item.APPPrice}}</span>
            </p>
            <p class="number">
              <el-input-number
                :min="1"
                size="mini"
                v-model="item.qty"
                @change="changeQty($event,item.ID);suchForm($event,item.ID ,item.qty)"
              ></el-input-number>
            </p>
          </el-col>
        </el-col>
        <el-col :span="4" :offset="4">
          <el-button
            style="color:red;"
            type="text"
            icon="el-icon-delete"
            @click="remove(item.ID);deleteForm(item.ID)"
          >删除</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="50" class="last" style="margin-left:0;">
        <el-col :span="12" class="last1">
          <el-col :span="16" class="total price">
            合计:
            <span style="color:red;">￥{{totalPrice.toFixed(2)}}</span>
          </el-col>
          <el-col :span="8">
            <el-button type="danger">结 算</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      cartlist(state) {
        return state.cart.cartlist;
      }
    }),
    ...mapGetters(["totalPrice"])
  },
  created(){
this.submitForm();

  },
  methods: {
    ...mapMutations({
      changeQty: "changeQty",
      remove: "removeItem"
       
    }),
    goto(ID) {
      this.$router.push({ name: "detail", params: {ID } });
    },
   
    submitForm () {
 this.$store.dispatch('saveForm')//触发vuex里面的网络请求
 },
   deleteForm (id) {
 this.$store.dispatch('removeForm',id)//触发vuex里面的网络请求
 },
 suchForm(qty,ID){
 this.$store.dispatch('updateForm',{ID,qty})//触发vuex里面的网络请求
 }
  }
  //在购物车发送请求
  // created(){
  // 　　　　this.$axios.post('http://localhost:1906/cart').then( res => {
  // 　　　　　　console.log(res)
  // 　　　　}).catch(err => {
  // 　　　　　　console.log(err)
  // 　　　　})
  // 　　}
};
</script>


<style scoped>
.header {
  height: 46px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.total {
  text-align: right;
}
.cart img {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  margin-left: 20px;
}
.number {
  margin-left: 190px;
}
.list {
  height: 100px;
  margin-left: 0;
  width: 100%;
  margin-bottom: 10px;
}
.last {
  margin-top: 10px;
  width: 100%;
  display: flex;
}
.last1 {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  height: 100px;
}
h4 {
  width: 200px;
  color: #666;
  font-weight: normal;
  font-size: 12px;
  margin-left: 35px;
  margin-top: 10px;
}
.pricea {
  color: red;
  margin-left: 35px;
  font-weight: 600;
  font-size: 14px;
  margin-top: 10px;
}
</style>