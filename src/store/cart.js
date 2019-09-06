export default {
    state: {
        cartlist: [{
                ID: 1,
                ProductName: '53度 珍酒 珍品 1975 500ml',
                qty: 1,
                APPPrice: 198.0,
                Pic: "http://img0.gjw.com/product/2019/0816/731da146152b4ebe85b32e2bfd761141.jpg"
            },

            {
                ID: 2,
                ProductName: "53度 茅台 飞天带杯（ 2019年产 ）500ml",
                APPPrice: 2799.0,
                Pic: "http://img0.gjw.com/product/2019/0813/94ff85adea814fd89cce17556bbce5dd.jpg",
                qty: 2,
            }
        ]
    },
    getters: {
        totalPrice: function (state) {
            return state.cartlist.reduce(function (prev, item) {
                // prev：前一次reduce的返回值
                return prev + item.APPPrice * item.qty
            }, 0)
        }
    },
    mutations: {
        addItem(state, detail) {
            state.cartlist.push(detail)
        },
        removeItem(state, ID) {
            state.cartlist = state.cartlist.filter(item => item.ID != ID);
        },
        changeQty(state, {
            qty,
            ID
        }) {
            state.cartlist = state.cartlist.map(item => {
                if (item.ID === ID) {
                    item.qty = qty;
                }
                return item;
            })
        },
        clearCart(state) {
            state.cartlist = []
        }
    },
}