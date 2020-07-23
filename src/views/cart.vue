<template>
    <div>
        <topb></topb>
      <div class="main" v-show="goodscart.length!=0">
          <!-- 标题开始 -->
          <div class="title con">
            
                  <el-row :gutter="20">
                    <el-col :span="12"><div class="grid-content bg-purple">  <el-checkbox  :value="checked" @change="add">全选</el-checkbox></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">单价(元)</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">数量</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">小计(元)</div></el-col>
                    <el-col :span="3" v-show="edt"><div class="grid-content bg-purple"><a href="javscript:;"  @click="edit">编辑</a></div></el-col>
                    <el-col :span="3" v-show="!edt"><div class="grid-content bg-purple"><a href="javscript:;"  @click="edit">完成</a></div></el-col>
                  </el-row>
             
          </div>
          <!-- 标题开始end -->
          <div class="pop con"> <el-checkbox  :value="checked" @change="add">魅族</el-checkbox><span>已免运费</span></div>
          <!-- 购物车列表 -->
          <div class="goodCart con" v-for="(item,index) in goodscart " :key="item+index">
                <el-row :gutter="20">
                    <el-col :span="1"><div class="grid-content bg-purple">  <el-checkbox :value="item.flage" @change="inputselet(index)"  ></el-checkbox></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"><div class="img"><img :src="item.img" alt=""></div></div></el-col>
                    <el-col :span="7"><div class="grid-content bg-purple">
                                        <p class="name">{{item.name}}</p>
                                        <p class="does">{{item.network}}{{item.color}}{{item.memory}}{{item.setmeal}}</p>
                                     </div>
                    </el-col>
                
                    <el-col :span="3"><div class="grid-content bg-purple"><div class="price"><i>￥</i>{{item.price}}</div></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><div class="carNum"><button @click="subtraction(index)" >-</button><span>{{item.num}}</span><button @click="addition(index)">+</button></div></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><div class="Subtotal"><i>￥</i>{{item.Subtotal}}</div></div></el-col>
                    <el-col :span="3" v-show="edt"><div class="grid-content bg-purple"><div class="operation">--</div></div></el-col>
                     <el-col :span="3" v-show="!edt"><div class="grid-content bg-purple">  <el-button type="danger" @click="del(index)">删除按钮</el-button></div></el-col>
                  </el-row>
          </div>
          <!-- 购物车列表end -->
          <!-- 结算 -->
           <div class="settlement con">
            
                  <el-row :gutter="20">
                    <el-col :span="2"><div class="grid-content bg-purple">  <el-checkbox  :value="checked" @change="add">全选</el-checkbox></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">删除选中的商品</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple"><div class="cartDoes">共{{num}}件商品,已选择{{num1}}件</div></div></el-col>

                    <el-col :span="4"><div class="grid-content bg-purple"><div class="Discount">已优惠<span>0.00</span>元,合计(不含运费)</div></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><div class="totalPrice"><i>￥</i> {{total}}</div></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">  <el-button type="danger" plain @click="settlement">结算</el-button></div></el-col>
                  
                  </el-row>
             
          </div>
          <!-- 结算end -->

      </div>
      <div class="carbox clearfix"  v-show="goodscart.length==0">
        <div class="new con">

            <div class="left"><img src="https://store.res.meizu.com/order/img/notFound-804fc26175.png" alt=""></div>
            <div class="right">
              <p>购物车空空如也</p>
              <p>赶快去逛逛吧</p>
            </div>
        </div>
      </div>
        <div v-show="goodscart.length==0">
          <remon></remon>
          </div>           
      <bottom></bottom>
    </div>
</template>

<script>
import topb from '../components/public/topb'
import bottom from "../components/public/bottom"
import remon from '../components/public/remon'
    export default {
        data(){
          return{
            
              flage:true,
               checked: true,
               edt:"true",
               num:0,
               num1:0,
              //  goodscart:[
              //    {
              //      img: "//openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@120x120.png",
              //      name:"魅族17 Pro",
              //      does:"全网通公开版AG梦幻独角兽8+128G",
              //      price:"4699.00",
              //      num:"1",
              //      Subtotal:"4699.00",
              //      flage:true,
                   
                   
              //    },
              //    {
              //      img: "//openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@120x120.png",
              //      name:"魅族17 Pro",
              //      does:"全网通公开版AG梦幻独角兽8+128G",
              //      price:"4699.00",
                  
              //      flage:true,
              //      Subtotal:"4699.00",
              //    }
              //  ],
               total:0,
          }
        },
        methods:{
          // 判断是否修改
          edit(){
            this.edt=!this.edt
              
          },
          // 删除
          del(index){
            this.goodscart.splice(index,1)
             this.sum()
          },
          // 总价的计算
           sum(){
             let item=this.goodscart.filter(item=>item.flage==true)
             this.num1=item.length
             this.total=item.reduce((total,item)=>{
               if(!item.flage) return total
               return total+parseInt(item.price)*parseInt(item.num)
             },0)
           },
          //  判断是否全选
           checkboxchage(){

                this.checked=this.goodscart.every(item=>{
                  return item.flage
                })
                console.log( this.checked)
          },
          //  小计的方式
           sub(){
             this.goodscart.forEach(item=>{
               item.Subtotal=parseInt(item.price)*parseInt(item.num) 
              })
           },

           // 修改el-checkbox的值
          add(){
            this.goodscart.forEach(item=>{
              item.flage=!this.checked
            })
            this.checked=!this.checked
          },
          inputselet(index){
            this.goodscart[index].flage=!this.goodscart[index].flage
            this.checkboxchage()
            this.sum()
          },
         
          // 商品数据增加
          addition(index){
            this.goodscart[index].num++;
            this.sub()
            this.sum()
          },
          // 商品数据减少
          subtraction(index){
            if(this.goodscart[index].num<=1){
              this.goodscart[index].num<=1
            }else{
              this.goodscart[index].num--
            }
            this.sub()
            this.sum()
          },
          // 商品下单
          settlement(){
              let arr=[];
              let dek=[];
            if(!this.$store.state.username){
              this.$message("请先登录")
              return
            }
            if(!this.total){
              this.$message('添加商品');
              console.log("请添加商品")
              return
            }
            this.goodscart.forEach(item=>{
              // 判断已经选中的商品
                  if(item.flage){

                    dek.push(item.id)
                    arr.push(item)
                  }     
            })
          //  console.log(this.$store.state.cart.lists)
            this.$store.commit('cart/del',dek)
            this.$store.commit('order/add',arr)
            this.$router.push("/order")
                
            }
        },
        created(){
          this.goodscart=this.$store.state.cart.lists;
          this.num=this.goodscart.length
            this.sub()
            this.sum()
         
        },
        beforeUpdate(){
           this.sum()
        },
        components:{
          bottom,
          topb,
          remon
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

 
 
.main{
    padding-top: 100px;
    background: #f4f6fa;
    padding-bottom: 40px;
    .title{
        background: #fff;
        padding: 15px  10px;
        .el-col{
          text-align: center;
          &:nth-child(1){
          text-align: left;
        }
        a{
          color:#409Eff ;
        }
        }
       
    }
    .pop{
         padding: 15px 10px;
        span{
            font-size: 12px;
            margin-left: 20px;
            color: #6666;
        }
    }
}
.goodCart{
   background: #fff;
   padding: 15px 10px;
   border-bottom: 1px solid #eee;
    .el-col{
        // border: 1px solid #ccc;
        text-align: center;
        &:nth-child(1){
          text-align: left;
        }
        &:nth-child(3){
          text-align: left;
        }
        
      }
  .el-checkbox{
   margin-top: 50px;
    
  }
  .name{
    margin-top: 30px;
    font-size: 18px;
    color: #262626;
    margin-bottom: 10px;
  }
  .does{
    color: #8c8c8c;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
    .price{
      font-size: 18px;
       margin-top: 50px;
      i{
        font-style: normal;
        font-size: 16px;
       
      }
    }
    .carNum{
      margin-top: 45px;
      span{
        display: inline-block;
        border: 1px solid #999;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
          width: 50px;
          border-left: 0;
          border-right: 0;

       
      }
      button{
        width: 30px;
        height: 32px;
      }
     
    }
    .Subtotal{
       font-size: 20px;
       margin-top: 50px;
       color: #cc0000;
      i{
        font-style: normal;
        font-size: 16px;
       
      }
    }
    .operation{
      margin-top: 50px;
    }
    .el-button{
      margin-top: 38px;
    }
  
}
    .settlement{
      margin-top: 15px;
      background: #fff;
      padding: 5px 10px;
      // border: 1px solid #ccc;
      color: #8c8c8c;
      
      .el-row{
        // border: 1px solid #ccc;
        // margin-top:20px;
        font-size: 14px;
        
      }
      .el-col{
        margin-top: 15px;
        &:last-child{
          margin-top: 5px;
        }
        &:nth-child(5){
          margin-top: 12px;
        }
      }
      .cartDoes{
         letter-spacing:5px;
        span{
          color: #409Eff;
        }
      }
      .Discount{
        // letter-spacing:1px;
        color: #595959;
        span{
          color: #cc0000;
        }
      }
      .totalPrice{
         color: #595959;
         letter-spacing:2px;
        //  margin-left: 20px;
         font-size: 20px;
         color: #cc0000;
         i{
           font-size: 18px;
           font-style:normal;
           
         }
      }
      .el-button {
        
        width: 120px;
      }
      
    }
.carbox{
  padding-top: 100px;
   background: #f4f6fa;
   .new{
    
     background: #fff;
     height: 300px;
     padding-left: 500px;
     box-sizing: border-box;
     padding-top: 100px;
     .left{
       float: left;
     }
     .right{
       float: left;
       width: 200px;
       margin-top: 50px;
      //  margin-left: 10px;
       text-align: center;
     }
     p{
       font-size: 18px;
       &:nth-child(2){
         color: #797979;
         margin-top: 15px;
       }
     }
   }
}
</style>
<style lang="scss">
.el-checkbox__inner{
  width: 18px;
  height: 18px;
  border-color: #333;
}
.el-checkbox__inner::after{
  height: 12px;
  left: 5px;
}
</style>