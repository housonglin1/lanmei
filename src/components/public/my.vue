<template>
    <div>
        <!-- 头部 -->
       <div class="top">
           <el-row :gutter="20">
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <div class="img">
                        <img src="http://image-res.mzres.com/img/download/uc/14/66/99/57/00/146699570/w200h200?t=1593595450000" alt="">  
                     </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <p v-show="this.$store.state.username">{{this.$store.state.username}}</p>
                    <p v-show="!this.$store.state.username">请先登录</p>
                 </div>
            </el-col>

            <el-col :span="8"><div class="grid-content bg-purple">
                                    <div class="information">

                                      <div><label>Flyme账号：</label>愤怒的小鸟</div>
                                     <div><label>绑定手机号：</label>15******515</div>
                                     <div><label>绑定邮箱：</label> 未绑定</div>
                                    </div>
                                
                            </div>
            </el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                                <div class="regressionMoney">回购金<span>:<em>￥</em>0</span></div>
                            </div>
            </el-col>
            </el-row>
       </div>
       <!-- 头部end -->
       <!-- 主体 -->
       <div class="mainCon">
            <el-row :gutter="50">
                    <el-col :span="14"><div class="grid-content bg-purple">
                                            <div class="title clearfix">
                                                <div class="left">订单状态</div>
                                                <div class="right" @click="$router.push('/merchant/orderlist/orderAll')">查看全部订单</div>
                                            </div>
                                            <!-- 待付款 -->
                                            <div class="onPay">
                                                <div class="box clearfix">
                                                    <div class="icon"><span class="iconfont icon-gerenzhongxindaifukuan"></span></div>
                                                    <div class="right">
                                                        <p>待付款订单: <span>0</span> </p>
                                                        <p class="readPay" @click="$router.push('/merchant/orderlist/orderPay')">查看全部带付款订单</p>
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="onPay">
                                                <div class="box clearfix">
                                                    <div class="icons "><span class="iconfont icon-icon-jinhuopingtaiH-"></span></div>
                                                    <div class="right">
                                                        <p>待收货订单: <span>0</span> </p>
                                                        <p class="readPay" @click="$router.push('/merchant/orderlist/orderGoods')">查看全部带收货订单</p>
                                                    </div>
                                                </div>
                                            </div>   

                             
                                      </div>
                    </el-col>
                  
                    <el-col :span="9">
                        <div class="grid-content bg-purple">
                            <div class="title">
                                <div class="left">活动消息</div>
                                <div class="right">查看全部消息</div>
                            </div>
                            <div class="new">
                                <p>您暂无此类消息提醒</p>
                                <img src="http://store.res.meizu.com/member/img/noData-31ec95ea89.png" alt="">
                            </div>
                        </div>
                    </el-col>
                    
             </el-row>
       </div>
       <!-- 主体end -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.top{
    padding-top: 30px;
    padding-left: 20px;
    .el-row{
        border: 1px solid #eee;
        .el-col{
            padding: 15px 20px;
            .img{
                width: 150px;
                height: 150px;
                border-radius: 50%;
                overflow: hidden;
            }
            p{
                margin-top: 60px;
            }
            .information{
                padding: 20px 15px;
                line-height: 2.5;
                font-size: 14px;
                color: #6666;
                label{
                    color: #999;
                    width: 90px;
                    display: inline-block;
                    margin-right: 10px;
                }
            }
            .regressionMoney{
                margin-top: 60px;
                span{
                    color:#999;
                    margin-left: 5px;
                    em{
                        font-style: normal;
                    }
                }
            }
        }
    }
}
.mainCon{
    margin-top: 30px;
    margin-left: 35px;
    .el-row{ 
        padding: 0;
        .el-col{
            border: 1px solid #eee;
            padding: 0;
            &:nth-child(1){
                margin-right: 20px;
            }
            .title{
             width: 100%;
               height: 40px;
               line-height: 40px;
              
                color: #999;
                background: #fafafc;
                .left{
                    float: left;
                    color: #666;
                }
                .right{
                    float: right;
                    color: #999;
                }
                .right::after{
                    content:'>'
                }
            }
            .onPay{
                margin-top: 40px;
                padding-bottom: 10px;
            }
            .box{
                margin-left: 100px; 
               
                .icon,.icons{
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    position: relative;
                    float: left;
                    color: #fff;
                    
                    span{
                         position: absolute;
                         font-size: 50px;
                         left: 20px;
                         top: 10px;

                     }
                    
                }
                .icon{
                     background: #f56313;
                     
                     
                }
                .icons{
                    background: #00c3f5;
                }
                
                .right{
                    float: left;
                    margin-top: 20px;
                    margin-left: 15px;
                    p{
                        font-size: 18px;
                        color: #666;
                        margin: 10px 0;
                       
                       &:nth-child(2){
                           color: #999;
                           font-size: 14px;
                           &::after{
                            content: ">";
                        }
                       }
                       span{
                           color: #F56313;
                       }
                    }
                }
            }
            .new{
                margin-top: 110px;
                text-align: center;
                p{
                    margin-bottom: 30px;
                }
            }
        }
    }
}
</style>