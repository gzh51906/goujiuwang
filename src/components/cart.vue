<template>
  <div>
<div class="header">
    <span style="margin-left:140px;">购物车</span>
    <span style="margin-left:130px;">编辑</span>
    </div>
  <!-- <div class="cart">
      <el-row :gutter="20" v-for="item in cartlist" :key="item.Id">
        <el-col :span="16">
          <el-col :span="6">
          <img :src="item.image" @click="goto(item.Id)"/>
          </el-col>
          <el-col :span="16" :offset="1">
            <h4>{{item.Name}}</h4>
            <p class="price">
              <span>{{item.price}}</span>
            </p>
            <p>
              <el-input-number
                :min="1"
                :max="5"
                size="mini"
                :value="item.qty"
                @change="changeQty($event,item.Id)"
              ></el-input-number>
            </p>
          </el-col>
        </el-col>
        <el-col :span="4" :offset="4">
          <el-button type="text" icon="el-icon-delete" @click="remove(item.Id)">删除</el-button>
        </el-col>
      </el-row>
     <el-row :gutter="50">
        <el-col :span="12">
            <el-button type="text" size="mini"  @click="$store.commit('clearCart')">清空购物车</el-button>
        </el-col>
        <el-col :span="12">
            <el-col :span="16" class="total price">
                总计：<span>{{totalPrice}}</span> 
            </el-col>
            <el-col :span="8">
                <el-button type="danger">结 算</el-button>
            </el-col>
        </el-col>
    </el-row>
    </div> -->
  </div>
</template>
<script>
export default {
    // computed:{
    //     cartlist(){
    //         return this.$store.state.cartlist
    //     },
    //     totalPrice(){
    //         return this.$store.getters.totalPrice.toFixed(2)

    //     }
    // },
    // methods:{
    //     remove(Id){
    //         this.$store.commit('removeItem',Id)
    //     },
    //     changeQty(qty,Id){
    //         this.$store.commit('changeQty',{qty,Id})
    //     }
    // },
    // created(){
    //     console.log(this.$store)
    // }
};
</script>
<style scoped>
    .header{
      height:46px;
      display:flex;
      align-items:center;
      border-bottom:1px solid #eee;
    }
    .total{
       text-align:right
   }
   .cart img{
       width:100%;
   }
</style>