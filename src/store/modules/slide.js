import * as types from '../mutation-types'
//STATE
const state = {
  images:null
}

//getters
const getters = {
  images: state => state.images
}



//actions
const actions = {
  //清空微信配置
  clear ({commit,state}){
    commit(types.SLIDE_IMAGES_CLEAR)
  },
  //保存配置
  save ({commit,state},...args) {
    let images = args[0].images;
    
   
    commit(types.SLIDE_IMAGES_SAVE, { images })
  }
}



//mutations
const mutations = {
  //清除配置
  [types.SLIDE_IMAGES_CLEAR] (state) {
    state.images=null
  },
  //保存配置
  [types.SLIDE_IMAGES_SAVE] (state,{ images }){
    console.log('保存images')
    state.images=images
  }
}


export default{
  state,
  getters,
  actions,
  mutations
}