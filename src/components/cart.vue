<template>
<div>
<div class="header">
    <span style="margin-left:140px;">购物车</span>
    <span style="margin-left:130px;">编辑</span>
</div>
 <div class="cart">
    <el-row :gutter="20" v-for="item in cartlist" :key="item.ID">
      <el-col :span="16">
        <el-col :span="6">
            <img :src="item.Pic" @click="goto(item.ID)"/>
        </el-col>
        <el-col :span="16" :offset="1">
            <h4>{{item.ProductName}}</h4>
            <p class="price"><span>{{item.APPPrice}}</span></p>
            <p><el-input-number :min="1" size="mini" v-model="item.qty" @change="changeQty($event,item.ID)"></el-input-number></p>
        </el-col>
      </el-col>
      <el-col :span="4" :offset="4">
        <el-button type="text" icon="el-icon-delete" @click="remove(item.ID)">删除</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="50">
        <el-col :span="12">
            <el-button type="text" size="mini"  @click="clear">清空购物车</el-button>
        </el-col>
        <el-col :span="12">
            <el-col :span="16" class="total price">
                总计：<span>{{totalPrice.toFixed(2)}}</span> 
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
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

export default {
    computed:{

        ...mapState({
            cartlist(state){
                return state.cart.cartlist
            }
        }),


        ...mapGetters(['totalPrice'])
      
    },
    methods:{
        ...mapMutations({
            changeQty:'changeQty',
            remove:'removeItem',
            clear:function(commit,payload){
                commit('clearCart')
            }
        }),
        ...mapActions(['changeQtyAsync']),
        goto(id){
            this.$router.push({name:'goods',params:{ID}})
    },
  created() {
    console.log(this);
  }
}
}
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
   .total{text-align:right}
    .cart img{width:100%}
</style>