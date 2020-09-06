import Vue from 'vue'
import Vuex from 'vuex'
import systemData from './modules/system'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
      //存放的键值对就是所要管理的状态
      name:'helloVueX'
  },
  modules:{
    systemData
  }
})

export default store
