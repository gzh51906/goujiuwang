<template>
  <div>
 <div>首页</div>
    <h3>{{number}}</h3>
    <button @click="plusNumber">增加</button>
  
   <button @click="onplusNumber">减少</button>
   </div>
</template>
<script>
import { mapState, mapMutations} from 'vuex'
export default {
   //计算属性中使用this.$store.state获取
  //computed: {
    //number() {
      //return this.$store.state.count;
    //}
  //},
  //借助辅助函数mapState实
   computed:{  
     ...mapState([
     'number'
  ]),
   },
      methods: {
           plusNumber() {
            //  1. 直接通过store提交mutations
            //  此处plus是mutations中的方法
             this.$store.commit('plus')
             
            //  2. 使用mapMutations辅助函数                    this.plus()
        },
          onplusNumber() {
             this.$store.commit('onplus')
             
            //  2. 使用mapMutations辅助函数                    this.plus()
        },
       

         // 返回需要的mutations函数
        //  ...mapMutations([
        //      'plus'
        //  ]),
   
  }
}
</script>