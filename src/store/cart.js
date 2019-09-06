import axios from 'axios'
export default{
    state:{
        cartlist:[
        //     {
        //     ID:1,
        //     ProductName:'53度 珍酒 珍品 1975 500ml',
        //     qty:1,
        //     APPPrice:198.0,
        //     Pic:"2019/0816/731da146152b4ebe85b32e2bfd761141.jpg"
        // },
        
        // {
        //     ID : 2,
        //     ProductName : "53度 茅台 飞天带杯（ 2019年产 ）500ml",
        //     APPPrice: 2799.0,
        //     Pic: "2019/0813/94ff85adea814fd89cce17556bbce5dd.jpg",
        //     qty:2,
        // }
    ]
    },
    getters:{
        totalPrice:function(state){
            return state.cartlist.reduce(function(prev,item){
                // prev：前一次reduce的返回值
                return prev+item.APPPrice*item.qty
            },0)
        }
    },
    mutations:{
        addItem(state,goods){
            state.cartlist.push(goods)
        },
        removeItem(state,ID){
            state.cartlist = state.cartlist.filter(item=>item.ID!=ID);
        },
        changeQty(state,{qty,ID}){
            state.cartlist = state.cartlist.map(item=>{
                if(item.ID === ID){
                    item.qty = qty;
                }
                return item;
            })
        },
    }, 
    actions:{
      saveForm(context) {
       axios.post('http://localhost:1906/cart', context.state.cartlist).then(res => {  // 调用接口
                context.commit('changeQty',res.data)  
                  // 通过接口获取的后台数据保存到store中，等待组件取用
                  console.log(res)   
                  console.log(context.state)   
                  context.state.cartlist=res.data.data;
                  console.log(context.state.cartlist);
                  

                }) 
                           
            }
     
        }
    
}