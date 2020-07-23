export default {
    namespaced:true,//命名空间
    state:{
       favoritelist:[],
       num:1
      
    },
    mutations:{
        add(state,obj){
            console.log(state.favoritelist)
            let index = state.favoritelist.findIndex(val => val.id == obj.id);
            if(index == "-1"){ //存在，数量加一
                 state.favoritelist.push(obj);
                          
            }
            console.log(obj)
            console.log( state.favoritelist)
        },
       del(state,id){
        let index = state.favoritelist.findIndex(val => val.id == id);
        state.favoritelist.splice(index,1)
        console.log( state.favoritelist)
       }
      
    },
    actions:{},
    modules: {
        
      }
}