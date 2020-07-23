<template>
    <div>
        <!-- 订单导航 -->
        <div class="navtop">
            <ul class="clearfix">
                <li v-for="(item,index) in nav" :key="item+index" @click="paath(index)"> 
                    <a href="javscript:;" :class="{btn:num==index}">{{item}}</a>
                </li>
                <!-- <li  @click="$router.push('/merchant/orderlist/orderAll')"><a  @click="num=0" :class="{btn:num==0}" href="javascript:;">全部订单</a></li>
                <li  @click="$router.push('/merchant/orderlist/orderPay')"><a  @click="num=1" :class="{btn:num==1}" href="javascript:;">待付款  </a></li>   
                <li  @click="$router.push('/merchant/orderlist/orderPay')"><a  @click="num=2" :class="{btn:num==2}" href="javascript:;">待发货  </a></li>
                <li  @click="$router.push('/merchant/orderlist/orderPay')"><a  @click="num=3" :class="{btn:num==3}" href="javascript:;">已发货  </a></li>
                <li  @click="$router.push('/merchant/orderlist/orderPay')"><a  @click="num=4" :class="{btn:num==4}" href="javascript:;">其他     </a></li> -->

            </ul>
        </div>

          <!-- 订单导航end -->
          <!-- 描述 -->
        <div class="title ">
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple">最近三个月订单</div></el-col>
                <el-col :span="7"><div class="grid-content bg-purple">订单明细</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">售后</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">金额</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">状态</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">操作</div></el-col>
            </el-row>
        </div>
          <!-- 描述end -->
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                 nav:["全部订单","待付款  ","待收货  ","其他",],
                num:0,
                path:["/merchant/orderlist/orderAll","/merchant/orderlist/orderPay","/merchant/orderlist/orderGoods","/merchant/orderlist/orderEnd"]
            }
        },
        methods:{
          paath(index){
              
              this.num=index
              this.$router.push(this.path[index])

          }
        },
        
       
    }
</script>

<style lang="scss" scoped>
.clearfix::after{
    content:"";
    display: block;
    clear: both;
    
}
.navtop{
    ul{
        border-bottom: 1px solid #eee;
        li{
            float: left;
            margin:0  20px;
           
            a{
                display: block;
                font-size: 18px;
                color: #666;
                font-weight: 700;
                padding: 0 20px;
                padding-bottom: 30px;
                  border-bottom:2px solid transparent;
                &:hover{
                    border-bottom:2px solid #00c3f5;
                    color: #00c3f5;
                }
            }
        }
        .btn{
            border-bottom: 2px solid #00c3f5;
            color: #00c3f5;
        }
    }
}
.title{
    background: #fafafc;
    padding: 15px;
    .el-col{
        text-align: center;
    }
    
}

</style>