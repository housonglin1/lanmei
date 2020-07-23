

export default {
    namespaced:true,//命名空间
    state:{
        lists:[],//购物车数据列表
        orderlist:[],//订单列表
        // address:[],//地址集合
        // addindex:0,//设置默认地址
    },
    mutations:{
        // 购物车传递过来的数据
        add(state,arr){
            // 加入购物车，把数据添加lists购物车列表
            // 1.判断如果没有数据添加数据，购物车中存在数据，数据加一
            // 获取数据中id
           arr.forEach(item=>{ 
              state.lists.push(item)

           })
           
            console.log( state.lists)
        },
        // 立即购买传过来的数据
        addorder(state,obj){
            
            let object={}
            Object.assign(object,obj)
            state.lists.push(object)
            console.log( state.lists)
        },
        // 订单付款
        payadd(state,obj){
            state.orderlist.push(obj)
            state.lists=[]
        },

        // 修改数量
        editId(state,obj){
            Object.assign(state.orderlist,obj)
        },
        // 地址操作
        // 增加
        // addressAdd(state,obj){
           
        //     let object={}
        //     Object.assign(object,obj)
        //     console.log(object+"深")
        //   state.address.push(object)
        //    console.log(state.address)
        // },
        // // 删除地址
        // del(state,index){
        //     state.address.splice(index,1)
        // },
        // // 修改地址
        // addressEdit(state,obj){
        //     let {index,form}=obj
        //     console.log(index,form)
        //     Object.assign(state.address[index],form)
        // }
      
    },
    actions:{},
    modules: {
        
      }
}