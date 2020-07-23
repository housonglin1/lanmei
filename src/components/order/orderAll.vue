<template>
    <div>
              <!-- 订单的详情 -->
        <div class="orderAll  " v-for="(item,index) in goodsorder"  :key="item+index" v-show="goodsorder.length!=0">
             <div class="Anorder">
                 <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple"><span>下单时间:</span>{{item.datetime|dataFormat}}</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple"><span>订单号:</span>{{item.orderNum}}</div></el-col>
                </el-row>
            </div>
            <div class="goodsorder"  v-for="(value,count) in item.goods" :key="value+count">
                <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple"><img :src="value.img" alt=""></div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple">
                                                <div class="goodsdoes">{{value.name }}{{value.network}}{{value.color}}{{value.memory}}{{value.setmeal}}</div>
                                                <div class="subtotal"><i>￥</i>{{value.price}}×{{value.num}}</div>
                                     </div>
                </el-col>
                                         
                                            
                                          
                <el-col :span="3"><div class="grid-content bg-purple"><div class="money"><i>￥</i>{{value.Subtotal}}</div></div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple"><div class="state">{{ordertype[item.type]}}</div></div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">
                                        <div class="operation">
                                             <el-button type="success" size="small" v-show="item.type==0" @click="onPay(item.orderNum)">立即支付</el-button>
                                             <el-button type="danger" size="small" v-show="item.type==0"  @click="onDel(item.orderNum)">取消订单</el-button>
                                            
                                             <el-button type="success" size="small" v-show="item.type==1" @click="onGoods(item.orderNum)">确认收货</el-button>
                                             <el-button type="danger" size="small" v-show="item.type==1" @click="refundss(item.orderNum)">退货申请</el-button>
                                             <el-button type="success" size="small" v-show="item.type==2" style="margin-top:25px">商品评价</el-button>

                                        </div>
                                 </div>
                </el-col>
              </el-row>
            </div>
        </div>
        <div class="nodegood" v-show="goodsorder.length==0">

                 <p>你暂无此类订单,赶快去下单吧</p>
                <img src="https://store.res.meizu.com/member/img/noData-31ec95ea89.png" alt="">
        </div>
    <!-- 订单的详情end -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
             
                ordertype:["待付款","待收货","待评价"]
            }
        },
        methods:{
            // 支付
            onPay(id){
              let index=this.goodsorder.findIndex(item=>item.orderNum==id) 
              this.goodsorder[index].type=1     
            },
            // 删除订单
            onDel(id){
                 let index=this.goodsorder.findIndex(item=>item.orderNum==id)
                 this.goodsorder[index].type=6
                 this.goodsorder.splice(index,1) 
            },
            // 确认收货
             onGoods(id){
                let index=this.goodsorder.findIndex(item=>item.orderNum==id)
                this.goodsorder[index].type=2     
            },

            // 退款
              refundss(id){
            
                 let index=this.goodsorder.findIndex(item=>item.orderNum==id)
                let obj=this.goodsorder[index]
                this.$router.push({
                   path:"/orderrefund",
                   query:{
                       obj:obj
                   }
               })
                this.goodsorder.splice(index,1)
            }
        },
        created(){
            this.goodsorder=this.$store.state.order.orderlist
            console.log(this.goodsorder)
        },
        beforeDestroy(){
            if(this.goodsorder.length){
                this.$store.commit('order/editId',this.goodsorder)
            }
        },
         filters:{
                dataFormat(dataString){

                    var dd = new Date(dataString);

                    // 获取年月日
                    var y = dd.getFullYear();
                    var m = dd.getMonth() + 1;
                    var d = dd.getDate();

                    // 获取时分秒
                    var hh = dd.getHours()>=10?dd.getHours():"0"+dd.getHours();
                    var mm = dd.getMinutes()>=10?dd.getMinutes():"0"+dd.getMinutes();
                    var ss = dd.getSeconds()>=10?dd.getSeconds():"0"+dd.getSeconds();

                    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
                },
              


                
            },
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
            div{
             font-size: 14px;
             margin-top: 20px;
             span{
                 color: #cc0000;
             }
            }
        }
        
    }
}
.nodegood{
    padding-top: 50px;
    text-align: center;
    P{
        font-size: 24px;
        color: #797979;
    }
}
</style>