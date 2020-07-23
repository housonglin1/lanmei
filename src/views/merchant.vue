<template>
    <div>
      <topa></topa>
      <div class="title ">
           <ul class="clearfix con">
               <li @click="$router.push('/home')">首页</li>
               <li @click="$router.push('/merchant')">我的商城</li>
               <li>{{navLeft[num]}}</li>
           </ul>
      </div>
        <div class="main con">
            <el-row :gutter="20">
            <el-col :span="4">
                <div class="grid-content bg-purple">
                   <div class="navLeft" >
                       <ul class="clearfix">
                           <li v-for="(item,index) in navLeft" :key="(item+index)" @click="addStyle(index)" :class="{btn:num==index}">{{item}}</li>
                       </ul>
                   </div>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="grid-content bg-purple">
                    <!-- 二级标签 -->
                     <router-view></router-view>
                </div>
            </el-col>
            </el-row>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import topa from "../components/public/topa"
import bottom from "../components/public/bottom"
    export default {
        data(){
            return{         
                navLeft:["订单中心","我的订单","我的回购单","个人中心","地址管理","我的收藏","退款管理","建议反馈","资产中心","我的优惠券","我的红包","我的回购金","④服务中心","退款/退换货跟踪","以旧换新",],
                navpath:[],
                num:1,
                path:["/merchant/my","/merchant/orderlist",'/merchant/my','/merchant/my','/merchant/address',"/merchant/favorite","/merchant/my","/merchant/proposal","/merchant/my","/merchant/my","/merchant/my"]
                
           }
        },
        methods:{
            addStyle(index){
                if(index==0||index==3||index==8||index==12){
                    return
                }
                this.num=index
                this.$router.push(this.path[index])
            },
            // switch(){
               
                
            // }
        },
        created(){
            
            
        },
        components:{
            topa,
            bottom,
        }
    }
</script>

<style lang="scss" scoped>
.con{
    width: 1240px;
    margin: 0 auto;
}
.clearfix::after{
 content: "";
  display: block;
  clear: both;
}
.title{
    padding-top: 95px;
    ul{
        li{
            font-size: 14px;
            color: #00c3f5;
            float: left;
            margin: 10px 0;
            &:nth-child(1){
             color: #666;
                &::after{
                    margin-left: 5px;
                    content: ">";
                }
            }
             &:nth-child(2){
             color: #666;
                &::after{
                    content: ">"; 
                     margin-left: 5px;
                }
            }

        }
    }
}
.main{
    margin-top:20px ;
    padding-bottom: 100px;
    .navLeft{
        background: #f4f4f4;
        padding: 20px 0 54px 20px;
        ul{
            li{
                margin-left: 20px;
                font-size: 14px;
                color: #666;
                padding: 8px 0;
                &:hover{
                    color:  #00c3f5;
                }
                &:nth-child(1){
                    font-weight: 700;
                    &:hover{
                        color: #666;
                    }
                }
                &:nth-child(4){
                    font-weight: 700;
                    &:hover{
                        color: #666;
                    }
                }
                &:nth-child(9){
                    font-weight: 700;
                    &:hover{
                        color: #666;
                    }
                }
                &:nth-child(13){
                    font-weight: 700;
                    &:hover{
                        color: #666;
                    }
                }
                
            }
            .btn{
                color:  #00c3f5;
            }
        }
    }
}
</style>