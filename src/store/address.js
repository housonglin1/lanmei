

export default {
    namespaced:true,//命名空间
    state:{
    
        address:[],//地址集合
        addindex:0,//设置默认地址
    },
    mutations:{
        
       
       
        // 地址操作
        // 增加
        addressAdd(state,obj){
           console.log(obj)
            let object={}
            Object.assign(object,obj)
            console.log(object+"深")
          state.address.push(object)
           console.log(state.address)
        },
        // 删除地址
        del(state,index){
            state.address.splice(index,1)
        },
        // 修改地址
        addressEdit(state,obj){
            let {index,form}=obj
            console.log(index,form)
            Object.assign(state.address[index],form)
        }
      
    },
    actions:{},
    modules: {
        
      }
}