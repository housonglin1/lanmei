<template>
    <div>
        <topa></topa>
        <div class="banner" @click="$router.push('details')" >
              <img :src="img" alt="">
        </div>
         
        <div class="goods" >
            <div class="photogood">
                 <h2 >{{name}}</h2>
              
                <el-row :gutter="20">
                    <el-col :span="8" v-for="(item,index) in goodlist " :key="item+index" @click.native="$router.push('details')" >
                        <div class="grid-content bg-purple">
                            <a href="javscript:;">
                                    <img :src="item.img" alt="">
                                    <p class="name">{{item.name}}</p>
                                    <p class="does">{{item.does}}</p>
                                    <p class="price"><i>￥</i>{{item.price}}</p>
                            </a>
                        </div>
                    </el-col>
                </el-row>   
            </div>
          
        </div>
        <remon></remon>
        <bottom></bottom>
    </div>
</template>

<script>
import topa from "./topa"
import remon from "./remon"
import bottom from './bottom'
    export default {
        data(){
            return{
                 
           
                               
             }
      },
      props:['goodlist','name','img'],
        components:{
         topa ,
         remon,
         bottom
          },
          methods:{
            
          }

    } 

</script>

<style lang="scss" scoped>
.con{
    width: 1240px;
    margin: 0 auto;
}
// .clearfix::after {
//   content: "";
//   display: block;
//   clear: both;
// }
.banner{
    position: relative;
    border: 1px solid #ccc;
    padding-top: 81px;
    width: 100%;
    height: 450px;
    overflow: hidden;
    img{
        position: absolute;
        width: 168%;
        left: -33%;
    }
}
.goods{
    background: #f4f4f4;
    .photogood{

        h2{
        padding: 87px 0 25px; 
        }
        width: 1240px;
        margin: 0 auto;
       .el-row{
           .el-col{
               background: #f4f4f4;
               padding: 10px 0px;
              .grid-content{
                  padding: 40px 0 28px;
                  background: #fff;
               a{
                   display: block;
                   text-align: center;
                   img{
                       width: 100%;
                       margin-bottom: 40px;
                   }
                   .name{
                       padding: 0 30px;
                       font-size: 23px;
                       color: #333;
                        white-space: nowrap;
                      text-overflow: ellipsis;
                       overflow: hidden;
                     
                   }
                   .does{
                       margin: 5px 0;
                       font-size: 16px;
                       color: #666;
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      padding: 0 30px;
                   }
                   .price{
                       i{
                           font-style: normal;
                       }
                       color: #cc0000;
                       font-size: 24px;
                       padding: 0 12px;
                   }
                   p{
                       margin: 15px 0;
                   }
               }
              }

           }
       }
    }
    
}

 
</style>