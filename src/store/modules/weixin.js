import * as types from '../mutation-types'
//STATE
const state = {
  config:{ud:1}
}

//getters
const getters = {
  config: state => state.config
}

//actions
const actions = {
  //清空微信配置
  clear ({commit,state}){
    commit(types.WX_CONFIG_CLEAR)
  },
  //保存配置
  save ({commit,state}) {
    
    return new Promise((resolve,reject)=>{
      
    })
   
    //commit(types.WX_CONFIG_SAVE, { config })
  }
}


//mutations
const mutations = {
  //清除配置
  [types.WX_CONFIG_CLEAR] (state) {
    state.config=null
  },
  //保存配置
  [types.WX_CONFIG_SAVE] (state,{ config }){
    console.log('mutation:保存配置')
    console.log(config)
    state.config=config
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}