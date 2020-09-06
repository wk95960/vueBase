import system from '@/service/system'
export default {
  namespaced:true,
  state:{
    name:'系统管理员',
    tableData:[]
  },
  getters:{
    tableData:state =>state.tableData
  },
  mutations:{
    muGetTableData(state,data){
      state.tableData = data
    }
  },
  actions:{
    getTableDataAction({commit},params,){
      return  system.getUser(params.params,params.myconfig)
        .then((res=>{
          if (res.data.RESULT === 0) {
            return commit ('muGetTableData',res.data.BODY.result)
          }
        }))
    }
  }
}