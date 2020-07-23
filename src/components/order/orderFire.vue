<template>
    <div>
              <!-- 订单的详情 -->
        <div class="orderAll  " v-for="(item,index) in goodsorder"  :key="item+index">
             <div class="Anorder">
                 <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple"><span>下单时间:</span>21062922512012407121</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple"><span>订单号:</span>{{item.datetime}}</div></el-col>
                </el-row>
            </div>
            <div class="goodsorder">
                <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><img :src="item.img" alt=""></div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple">
                                                <div class="goodsdoes">{{item.name}}{{item.does}}</div>
                                                <div class="subtotal"><i>￥</i>{{item.price}}×{{item.num}}</div>
                                     </div>
                </el-col>
                                         
                                            
                                          
                <el-col :span="3"><div class="grid-content bg-purple"><div class="money"><i>￥</i>{{item.Subtotal}}</div></div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple"><div class="state">已取消</div></div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">
                                        <div class="operation">
                                              <el-button type="success" size="small">立即支付</el-button>
                                             <el-button type="danger" size="small">取消订单</el-button>
                                        </div>
                                 </div>
                </el-col>
              </el-row>
            </div>
        </div>
    <!-- 订单的详情end -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                goodsorder:[
                 {
                   img: "//openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@120x120.png",
                   name:"魅族17 Pro",
                   does:"全网通公开版AG梦幻独角兽8+128G",
                   price:"4699.00",
                   num:"1",
                   Subtotal:"4699.00",
                   flage:true,
                   datetime:new Date()
                   
                 },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
.orderAll{
    margin-top: 30px;
    .Anorder{
        background: #fafafc;
        padding: 15px;
        .el-col{
        text-align: center;
        font-size: 14px;
        color: #333;
        span{
            color: #bdbdbd;
            margin-right: 10px;
        }
    }
    }

}
.goodsorder{
    color: #666;
    padding:0  15px;
    border: 1px solid #eee;
    .el-row{
        margin: 0;
        .el-col{
           
            text-align: center;
           
        }
       
        img{
            margin-left: 20px;
        }
        .goodsdoes{
            margin-top: 40px;
        }
        .subtotal{
            margin-top: 10px;
            i{
                font-style: normal;

            }
        }
        .money{
            margin-top: 50px;
            color: #e86b47;
             i{
                font-style: normal;

            }
        }
        .state{
            margin-top: 50px;
        }
        .operation{
            margin-top: 20px;
            .el-button{
                margin: 10px 0;
            }
        }
        
    }
}
</style>