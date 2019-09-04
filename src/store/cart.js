export default{
    state:{
        cartlist:[{
            Id:1,
            Name:'53度 珍酒 珍品 1975 500ml',
            qty:1,
            price:198.0

        },
        
        {
            Id:2,
            Name:'53度 茅台王子 （十全十美）戊戌狗年酒 （ 2018年产 ） 5000ml',
            qty:2,
            price:4899
        }]
    },
    getters:{
        totalPrice:function(state){
            return state.cartlist.reduce(function(prev,item){
                // prev：前一次reduce的返回值
                return prev+item.price*item.qty
            },0)
        }
    },
}