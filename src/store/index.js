import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    list:[]
  },
  mutations: {
    getUser(state,val){
      state.user=val;
    },
    setList(state,val){
       state.list=val;
    }
  },
  actions: {
    getList({commit}){
      axios.get("/getList").then(({data})=>{
        commit("setList",data)
      })
    }
  },
  modules: {
  },
})
