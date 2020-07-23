<template>
    <div>
          <div class="top">
          <div class="nav">

          
                <el-row>
                  <el-col :span="3">
                    <div class="grid-content bg-purple  ">
                        <span class="iconfont icon-meizu icon"  @click="$router.push('/home')"></span>
                  </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-content bg-purple" style="margin-left:20px">
                            <div class="myCart">
                                <ul>
                                    <li>购物车</li>
                                    <li>确认订单</li>
                                    <li>在线支付</li>
                                    <li>完成</li>
                                </ul>
                            </div>
                    </div>
                  </el-col>
                  <el-col :span="2">
                    <div class="grid-content bg-purple">
                        <div class="myorder" @click="$router.push('/merchant/orderlist/orderAll')">我的订单</div>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple ">
                            <div class="myshopp">
                                <!-- <p>小米的商城</p> -->
                                <ul  class="clearfix">
                                    <li > 我的商城
                                         <div @click="$router.push('merchant/address')">地址管理</div>
                                         <div @click="$router.push('merchant/favorite')">我的收藏</div>
                                         <div  @click="$router.push('/merchant/my')">我的回购金</div>
                                         <div @click="$router.push('/merchant/my')">问题反馈</div>
                                         <div @click="out">退出</div>

                                    </li>
                                </ul>
                               

                            </div>
                    </div>
                  </el-col>
                </el-row>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{}
        },
        methods:{

          out(){
            
             this.$store.state.username=""
              this.$message('退出登录');
           },
        }
    }
</script>

<style lang="scss" scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.con{
    width: 1240px;
    margin: 0 auto;
}

$color:#444;
.top {

    // border: 1px solid red;
    background: #fff;
    position: absolute;
    // border: 1px solid red;
    
    z-index: 1000;
    height: 82px;
    width:100%;
    // box-sizing: border-box;
    .nav{
   
     width: 1240px;
     margin: 0 auto;
      

      
    }
    .el-row {
      color: $color;
    //   border: 1px solid red;
      .el-col{
          border: 1px solid transparent;
         
          .myCart{
              margin-top: 35px;
              margin-left: 20px;
              ul{
                  li{
                      float: left;
                      font-size: 14px;
                       &:nth-child(1){
                          
                         &::after{
                             content: ">";
                             color: #ccc;
                              margin: 0 10px;
                         }
                      }
                       &:nth-child(2){
                            color: #999;
                         &::after{
                             content: ">";
                             color: #ccc;
                             margin: 0 10px;
                         }
                      }
                      &:nth-child(3){
                           color: #999;
                         &::after{
                            content: ">";
                             color: #ccc;
                             margin: 0 10px;
                         }
                      }
                      &:nth-child(4){
                           color: #999;
                        
                      }
                     
                     
                  }
              }
          }
          .myorder{
              margin-top: 40px;
              font-size: 12px;
              color:#666;
              text-align: center;
              &:hover{
                  color: #018dff;
              }
          }
          .myshopp{
              margin-top: 30px;
               font-size: 12px;
               text-align: center;
               color:#666;
            
               ul{
                   width: 100px;
                   border: 1px solid transparent;

                   li{
                       margin: 10px  5px;
                       &:hover{
                         padding: 10px 0;
                         margin: 0 5px;
                         background: #fff;
                         border: 1px solid #ccc;
                       }
                       &:hover div{
                           display: block;
                       }
                        div{
                            display: none;
                            margin-top: 15px;
                            
                        }
                          
                       
                    }
                      
                       
                   }
               }
               
          }
      }
     
    }
 
  .iconfont{
     
      font-size: 33px;
      color: #018dff;
     

     
  }
  .icon{
    display: block;
    margin-top: 18px;
  }
</style>