import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
       number:0
    },
        mutations:{
            plus(state){
                state.number++
            },
            onplus(state){
                state.number--;
            }

       

        },
})


export default store