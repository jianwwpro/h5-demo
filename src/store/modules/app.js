import * as types from '../mutation-types'
//STATE
const state = {
  appStart:false
}

//getters
const getters = {
  appStart: state => state.appStart
}



//actions
const actions = {
 change ({commit,state},...args) {
    let appStart = args[0].appStart;
    commit(types.APP_START_CHANGE, { appStart })
  }  

  
}



//mutations
const mutations = {
  //清除配置
  [types.APP_START_CHANGE] (state,{appStart}) {
    state.appStart=appStart
  }
}


export default{
  state,
  getters,
  actions,
  mutations
}