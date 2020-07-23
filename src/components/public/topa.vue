<template>
    <div>
        <div class="top">
          <div class="nav">

          
                <el-row>
                  <el-col :span="3">
                    <div class="grid-content bg-purple  " >
                        <span class="iconfont icon-meizu icon" @click="$router.push('/home')"></span>
                         <!-- <img src="@/assets/img/12.png" alt=""> -->
                  </div>
                  </el-col>
                  <el-col :span="12.5">
                    <div class="grid-content bg-purple" style="margin-left:20px">
                      <ul class="navtop">
                        <li>
                          <a href="javascript:;" @click="$router.push('/photo')">手机</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="$router.push('/voice')">声学</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="$router.push('/parts')">配件</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="$router.push('/life')">生活</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="router.push('/merchant/my')">Flyme</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="router.push('/merchant/my')">服务</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="router.push('/merchant/my')">专卖店</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="router.push('/merchant/my')">社区</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="router.push('/merchant/my')">政企定制</a>
                        </li>
                        <li>
                          <a href="javascript:;" @click="router.push('/merchant/my')">APP下载</a>
                        </li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :span="2">
                    <div class="grid-content bg-purple">
                      <div class="seach">
                        <el-input placeholder="魅族16T"></el-input>
                        <span class="el-icon-search"></span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="2.5">
                    <div class="grid-content bg-purple user">
                      <span class="el-icon-user  " v-show="!$store.state.username"> 
                           <div class="login_user">
                               <div class="sjx"></div>
                                <ul>
                               <li><a href="javascript:;"  @click="$router.push('/login')" >立即登录</a></li>
                               <li><a href="javascript:;"  @click="$router.push('/register')">立即注册</a></li>
                               <li><a href="javascript:;" @click="order">我的订单</a></li>
                               <li><a href="javascript:;" @click="router.push('/merchant/my')">M码通道</a></li>

                             </ul>
                            
                           </div>
                      </span>
                      <span v-show="$store.state.username" class="loginUse">
                      <img src="https://img-res.mzres.com/img/download/uc/14/66/99/57/00/146699570/w200h200?t=1593595450000" alt="">
                            <div class="login_user">
                               <div class="sjx2"></div>
                             <ul>
                               <li><a href="javascript:;"  @click="router.push('/merchant/my')">个人中心</a></li>
                               <li><a href="javascript:;"  @click="$router.push('/merchant/orderlist/orderAll')">我的订单</a></li>
                               <li><a href="javascript:;" @click="router.push('/merchant/my')">M码通道</a></li>
                               <li><a href="javascript:;" @click="out">退出登录</a></li>

                             </ul>
                           </div>
                      </span>
                       <span class="el-icon-shopping-cart-2 " @click="tocart" > 
                              <div class="shoppcart clearfix" v-show="!$store.state.username">
                                 <div class="sjxs"></div>
                                  <div class="left">

                                   <img src="data:image/png;base64,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" alt="">
                                  </div>
                                  <div class="right">
                                     <p>登录后可以显示</p>
                                     <p>您账号中已加入的商品</p>
                                  </div>

                              </div>
                      
                        </span>
                     
                      <!-- <a class="el-icon-user  user" @click="$router.push('/login')" v-show="!$store.state.username" > -->
                            <!-- <div>
                              
                            </div> -->
                      <!-- </a>
                       <a  class="user" v-show="$store.state.username" >{{$store.state.username}}</a>
                      <a class="el-icon-shopping-cart-2  cart"></a> -->
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
          // 登录
          order(){
            
           if(this.$store.state.username){
                 this.$router.push('/merchant/orderlist/orderAll')
              }else{
                this.$router.push({
                  path:'/login',
                  query:{
                    path:"/merchant/orderlist/orderAll"
                  }
                })
              }
          },
          // 退出登录
          out(){
            this.$store.state.username=""
            this.$router.push("/home")
          },
          // 进入购物车

           tocart(){
              if(this.$store.state.username){
                 this.$router.push('/cart')
              }else{
                this.$router.push({
                  path:'/login',
                  query:{
                    path:"/cart"
                  }
                })
              }
          }
        }
       
    }
</script>

<style lang="scss" scoped>
$color:#fff;
 .top {

    // border: 1px solid red;
    // background: #fff;
    position: absolute;
    background: #fff;
    z-index: 1000;
    height: 82px;
    width:100%;
    // box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .nav{
      margin-left: 140px;
    
    }
    .el-row {
      color: $color;
      .navtop {
        width: 100%;
        list-style: none;
        li {
          box-sizing: border-box;
          padding: 31px 20px 30px;
          float: left;
         
          a {
            color: $color;
            font-size: 14px;
            color: #333;
             &:hover{
            color:#008cff ;
          }
       
          }
        }
      }
      
      .seach {
        position: relative;
        padding: 22px 0px 0px 10px;
        margin-left: 0;
        width: 160px;
     
        .el-input {
          border: 1px solid #ccc;
          margin-top: 5px;
          border-radius: 20px;
          overflow: hidden;
          outline: none;
          
          
          
         
        }
        span {
          position: absolute;
          right: 10px;
          top: 35px;
          color: #aaa;
        }
      }
      .user {
        margin-left: 20px;
        padding: 24px 0px 0px 10px;
        // margin: 10px 0px 0px 30px;
        margin-left: 50px;
        font-size: 20px;
        span{
          margin-left: 15px;
        }
        .el-icon-shopping-cart-2{
         
         
          font-size: 30px;
          color: #555;
          position: relative;
          &:hover .shoppcart{
              display: block;
          }
          .shoppcart{
            display: none;
            padding: 30px;
            background: #fff;
            position: absolute;
            width: 200px;
            font-size: 12px;
            border: 1px solid #ccc;
            right: 0px;
            top: 42px;
            .left{
              float: left;
            }
            .right{
              float: left;
              margin-top: 2px;
              margin-left: 10px;
            }
            p{
              margin: 5px 0;
            }
          }
        }
        .el-icon-user{
          font-size: 30px;
          color: #555;
          position: relative;
          &:hover .login_user{
              display: block;
          }
          .login_user{
            display: none;
            border: 1px solid  #ccc;
            background:#fff;
            padding: 10px 17px; 
            position: absolute;
            top:38px;
            right: -25px;
            color: #555;
            width: 50px;
            ul{
              list-style: none;
              li{
                a{
                  font-size: 12px;
                  color:#333;
                  &:hover{
                    color: #007acc;
                  }
                }
              }
            }
            
          }
        }
        .loginUse{
           
            color: #555;
            padding-bottom: 10px;
            display: inline-block;
            position: relative;
            // transform: translateY(-3px);
           &:hover  .login_user {
             display: block;
           }
            img{
             position: relative;
             top: 3px;
             
             width: 30px;
             height: 30px;
             border-radius: 50%;
           }
           .login_user{
            display: none;
            background:#fff;
            padding: 10px 15px; 
            position: absolute;
            border: 1px solid #ccc;
            top:35px;
            right: -20px;
           width: 50px;
            ul{
              list-style: none;
              li{
                a{
                  font-size: 12px;
                  color:#333;
                  &:hover{
                    color: #007acc;
                  }
                }
              }
            }
            
          }
        }
      }
    }
  }
  .iconfont{
     
      font-size: 33px;
      color:#008cff ;
     
  }
  .icon{
    display: block;
    margin-top: 18px;
    font-size: 35px;
  }
 
.user{
  font-size: 15px;
}
.sjx{
width:0;
height:0;

border-width:0 10px 10px;
border-style:solid;
border-color:transparent transparent #cccccc80;/*透明 透明 灰*/
position: absolute;
top: -10px;
right: 30px;
}
.sjxs{
width:0;
height:0;
border-width:0 10px 10px 10px;
border-style:solid;
border-color:transparent transparent #cccccc80;/*透明 透明 灰*/
position: absolute;
top: -10px;
right: 2px;

}
.sjx2{
  width:0;
height:0;
border-width:0 10px 10px 10px;
border-style:solid;
border-color:transparent transparent #cccccc80;/*透明 透明 灰*/
position: absolute;
top: -10px;
right: 28px;
}
</style>
<style lang="scss">
.el-input__inner{
  height: 30px;
}

</style>