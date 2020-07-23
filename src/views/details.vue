<template>
    <div>
        <topa></topa>
          <div class="details_goods">
            <div class="name">魅族17</div>
            <div class="con">

              <el-row   :gutter="50">
                <el-col :span="12"><div class="grid-content bg-purple">
                                        <div class="content">
                                            <img :src="bigImg[num]" alt="">
                                        </div>
                                        <ul class="clearfix">
                                           <li v-for="(item,index) in smallImg" :key="item+index" @click="num=index" :class="{color:num==index}">
                                               <img :src="item" alt="">
                                           </li>
                                        </ul>
                                    </div>
                                    <div class="heart">
                                       <div class="el-icon-star-off" v-show="!hearts" @click="offheart"></div>
                                       <div class="el-icon-star-on" v-show="hearts" @click="onheart"></div>
                                    </div>
                </el-col>
                <el-col :span="12"><div class="grid-content bg-purple">
                                        <div class="goods_name">魅族 17 Pro</div>
                                        <div class="goods_does">【天青现货】【限时购机赠价值169元无线超充板】【分期享精美礼品最高支持12期分期日付仅需
12.66元起】5G旗舰|高通骁龙865+UFS3.1+LPDDR5|6400W全场景AR 专业影像系统</div>
                                        <div class="order">
                                            <div class="price">
                                                <i>￥</i>4699.00
                                            </div>
                                            <div class="goods_add">
                                                <span>加价购</span><span>另加29元起，即可换购超值商品</span><a href="javascript:;">立即抢购></a>
                                            </div>
                                        </div>
                                        <div class="afterDoes">
                                            <span class="label">支持</span>
                                          
                                              <span>花呗分期</span>
                                              <span>顺丰发货</span>
                                              <span>7天无理由退货（具体查看详情）</span>
                                           
                                        </div>
                                        <!-- <div class="model" v-for="(item,i) in doestails" :key="item+i">
                                          
                                            <el-row :gutter="20">
                                                    <el-col :span="3" ><div class="grid-content bg-purple">
                                                                            <div class="la">
                                                                                {{item.name}}
                                                                            </div>
                                                                        </div>     
                                                    </el-col> 
                                                    <el-col :span="21" ><div class="grid-content bg-purple">
                                                                              <ul>
                                                                                  <li v-for="(value,num) in item.model " :key="value+num" @click="btn=num" :class="{btn1:btn==num}">
                                                                                      <a href="javascript:;">{{value}}</a>
                                                                                  </li>
                                                                              </ul>
                                                                        </div>     
                                                    </el-col> 
                                            </el-row>
                                           
                                        </div> -->
                                           <!-- 手机类型 -->
                                            <div class="model">
                                                    <el-row :gutter="20">
                                                            <el-col :span="3" ><div class="grid-content bg-purple">
                                                                                    <div class="la">
                                                                                    手机类型
                                                                                    </div>
                                                                                </div>     
                                                            </el-col> 
                                                            <el-col :span="21" ><div class="grid-content bg-purple">
                                                                                    <ul>
                                                                                        <li v-for="(value,index) in model " :key="value+index" @click="btn=index" :class="{btn:btn==index}">
                                                                                            <a href="javascript:;">{{value}}</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>     
                                                            </el-col> 
                                                    </el-row>
                                                
                                                </div> 
                                          <!-- 手机类型end -->
                                          <!-- 网络类型 -->
                                         <div class="model">
                                            <el-row :gutter="20">
                                                    <el-col :span="3" ><div class="grid-content bg-purple">
                                                                            <div class="la">
                                                                               网络类型
                                                                            </div>
                                                                        </div>     
                                                    </el-col> 
                                                    <el-col :span="21" ><div class="grid-content bg-purple">
                                                                              <ul>
                                                                                  <li v-for="(value,index) in network " :key="value+index" @click="btn1=index" :class="{btn:btn1==index}">
                                                                                      <a href="javascript:;">{{value}}</a>
                                                                                  </li>
                                                                              </ul>
                                                                        </div>     
                                                    </el-col> 
                                            </el-row>
                                           
                                        </div> 
                                          <!-- 网络类型end -->
                                            <!-- 颜色分类 -->
                                            <div class="model">
                                            <el-row :gutter="20">
                                                    <el-col :span="3" ><div class="grid-content bg-purple">
                                                                            <div class="la">
                                                                               颜色分类
                                                                            </div>
                                                                        </div>     
                                                    </el-col> 
                                                    <el-col :span="21" ><div class="grid-content bg-purple">
                                                                              <ul>
                                                                                  <li v-for="(value,index) in color " :key="value+index" @click="btn2=index" :class="{btn:btn2==index}">
                                                                                      <a href="javascript:;">
                                                                                         <img :src="value.img" alt=""><span class="text">{{value.text}}</span>
                                                                                      </a>
                                                                                  </li>
                                                                              </ul>
                                                                        </div>     
                                                    </el-col> 
                                            </el-row>
                                           
                                        </div> 
                                            <!-- 颜色分类end -->
                                            <!-- 内存容量 -->
                                            <div class="model">
                                            <el-row :gutter="20">
                                                    <el-col :span="3" ><div class="grid-content bg-purple">
                                                                            <div class="la">
                                                                               内存容量
                                                                            </div>
                                                                        </div>     
                                                    </el-col> 
                                                    <el-col :span="21" ><div class="grid-content bg-purple">
                                                                              <ul>
                                                                                  <li v-for="(value,index) in memory " :key="value+index" @click="btn3=index" :class="{btn:btn3==index}">
                                                                                      <a href="javascript:;">{{value}}</a>
                                                                                  </li>
                                                                              </ul>
                                                                        </div>     
                                                    </el-col> 
                                            </el-row>
                                           
                                        </div> 
                                            <!-- 内存容量end -->
                                            <!-- 选择套餐 -->
                                            <div class="model">
                                            <el-row :gutter="20">
                                                    <el-col :span="3" ><div class="grid-content bg-purple">
                                                                            <div class="la">
                                                                               选择套餐
                                                                            </div>
                                                                        </div>     
                                                    </el-col> 
                                                    <el-col :span="21" ><div class="grid-content bg-purple">
                                                                              <ul>
                                                                                  <li v-for="(value,index) in setmeal " :key="value+index" @click="btn4=index" :class="{btn:btn4==index}">
                                                                                      <a href="javascript:;">{{value}}</a>
                                                                                  </li>
                                                                              </ul>
                                                                        </div>     
                                                    </el-col> 
                                            </el-row>
                                           
                                        </div> 
                                            <!-- 选择套餐end -->
                                            <!-- 花呗套餐 -->
                                            <!-- <div class="model">
                                            <el-row :gutter="20">
                                                    <el-col :span="3" ><div class="grid-content bg-purple">
                                                                            <div class="la">
                                                                               花呗套餐
                                                                            </div>
                                                                        </div>     
                                                    </el-col> 
                                                    <el-col :span="21" ><div class="grid-content bg-purple ">
                                                                              <ul>
                                                                                  <li v-for="(value,index) in Huabei " :key="value+index" @click="btn5=index" :class=" {btn:btn5==index}">
                                                                                      <a href="javascript:;">
                                                                                          <p>{{value.p}}</p>
                                                                                          <p>{{value.shou}}</p>
                                                                                      </a>
                                                                                  </li>
                                                                              </ul>
                                                                        </div>     
                                                    </el-col> 
                                            </el-row>
                                           
                                        </div>  -->
                                            <!-- 花呗套餐end -->
                                        
                                    </div>
                                    <!-- 数量 -->
                                     <!-- <div class="count">
                                            <el-row :gutter="20">
                                                    <el-col :span="3" ><div class="grid-content bg-purple">
                                                                            <div class="lab">
                                                                               数量
                                                                            </div>
                                                                        </div>     
                                                    </el-col> 
                                                    <el-col :span="21" ><div class="grid-content bg-purple">
                                                                              <span >-</span><span>1000</span><span>+</span>
                                                                        </div>     
                                                    </el-col> 
                                            </el-row>
                                           
                                        </div>  -->
                                          <el-button type="primary"  plain @click="addorder" >立即购买</el-button>
                                         <el-button type="primary" plain @click="add" >加入购物车</el-button>
                </el-col>
            </el-row>
            </div>

          </div>
            <div class="detailImg">
               <div class="title con">
                   商品详情
               </div>
                <div class="imges con" v-for="(item,index) in detailImg " :key="index+item" >
                    <img :src="item" alt="">
                </div>
            </div>

          <bottom></bottom>
    </div>
</template>

<script>
import topa from "../components/public/topa"
import bottom from "../components/public/bottom"
//  import {createNamespacedHelpers} from "vuex";
// import { Toast } from 'vant';
    // const {mapMutations} = createNamespacedHelpers("cart");
    export default {
        data(){
            return{
                bigImg:[
                    "https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsj-AVId0AAlijs1xSzg392.png680x680.jpg",
                    "https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwUGADdDwAAT5skEF4T8624.png680x680.jpg",
                    "https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwUeAI-ILAAZB-PVLrto860.png680x680.jpg",
                    "https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwUGADLiyAAKpUJfaPFA649.png680x680.jpg"
                ],
                smallImg:[
                    "https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsj-AVId0AAlijs1xSzg392.png120x120.jpg",
                    "https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwUGADdDwAAT5skEF4T8624.png120x120.jpg",
                    "https://openfile.meizu.com/group1/M00/07/DB/Cgbj0V6zwUeAI-ILAAZB-PVLrto860.png120x120.jpg",
                    "https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwUGADLiyAAKpUJfaPFA649.png120x120.jpg"
                ],
                detailImg:[
                    "https://openfile.meizu.com/group1/M00/08/16/Cgbj0V76o1mAapJqAARh2xNwwi8062.jpg",
                    "https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p3i-AKmjNAAVJMGGv0VI015.jpg",
                    "https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p3i-AKmjNAAVJMGGv0VI015.jpg",
                    "https://openfile.meizu.com/group1/M00/07/F6/Cgbj0F7h5F6AJWjpAAMzOklxDjA708.jpg",
                    
                ],
                num:0,
                model:["魅族17 Pro","魅族17","魅族16T","魅族17航母限定版"],
                network:["全网版","移动版","联通版","电信版"],
                
                color:[
                    {
                    img:"https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwVaAfvCAAAlIjzPtsZc201.png80x80.png",
                    text:"乌金色",
                    },
                     {
                    img:"https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwUCAZXioAAqyPRV4XK4045.png80x80.png",
                    text:"定白色",
                    },
                     {
                    img:"https://openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwUqAdPsoAAtCAjTT7ek670.png80x80.png",
                    text:"天青色",
                    },
                ],
                memory:["8+128G","12+256G"],
                setmeal:["官方标配","无线充套餐","碎屏保套餐"],
                // Huabei:[
                //     {p:"￥1602.35×3期",shou:"含手续费￥36.02/期"},
                //     {p:"￥818.40×6期" ,shou:"含手续费￥35.24/期"},
                //     {p:"￥420.94×12期",shou:"含手续费￥29.36/期"},
                //     ],
                
              
                btn:0,
                btn1:0,
                btn2:0,
                btn3:0,
                btn4:0,
                btn5:0,
                hearts:false,
                //  goods:{
                   
                    // img:"https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsj-AVId0AAlijs1xSzg392.png120x120.jpg",
                    // name:this.model[this.btn],
                    // network:this.network[this.btn1],
                    // color:this.color[this.btn2],
                    // memory:this.memory[this.btn3],
                    // setmeal:this.setmeal[this.btn4],
                    // flage:true,
                    // price:"4699.00",
                    // num:"1",
                   
                // }
                
           }
        },
        methods:{
            // 加入购物车
            add(){
                let  goods={
                    id:this.btn+1,
                    img:"https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsj-AVId0AAlijs1xSzg392.png120x120.jpg",
                    name:this.model[this.btn],
                    network:this.network[this.btn1],
                    color:this.color[this.btn2].text,
                    memory:this.memory[this.btn3],
                    setmeal:this.setmeal[this.btn4], 
                    price:"4699",
                    Subtotal:'4699',
                    
                   
                }
               if(this.$store.state.username){
                   this.$store.commit('cart/add',goods)
                   this.$router.push('/cart')
               }else{
                    this.$store.commit('cart/add',goods)
                   this.$router.push({
                               path:'/login',
                               query:{
                                   path:"/cart"
                               }
                           })
               }
            },
            addorder(){
                    let  goods={
                    id:this.btn+1,
                    img:"https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsj-AVId0AAlijs1xSzg392.png120x120.jpg",
                    name:this.model[this.btn],
                    network:this.network[this.btn1],
                    color:this.color[this.btn2].text,
                    memory:this.memory[this.btn3],
                    setmeal:this.setmeal[this.btn4], 
                    price:"4699",
                    Subtotal:'4699',
                    num:1,
                               
                  }

                  if(this.$store.state.username){
                   this.$store.commit('order/addorder',goods)
                   this.$router.push('/order')
                    }else{
                            this.$store.commit('order/addorder',goods)
                        this.$router.push({
                                    path:'/login',
                                    query:{
                                        path:"/order"
                                    }
                                })
                    }
                
            },
            
            //   ...mapMutations(["add"],),
            // 收藏效果
            offheart(){
                this.hearts=true
                let  goods={
                    id:this.btn+1,
                    img:"https://openfile.meizu.com/group1/M00/07/F5/Cgbj0F7gsj-AVId0AAlijs1xSzg392.png120x120.jpg",
                    name:this.model[this.btn],
                    network:this.network[this.btn1],
                    color:this.color[this.btn2].text,
                    memory:this.memory[this.btn3],
                    setmeal:this.setmeal[this.btn4], 
                    price:"4699",
                    Subtotal:'4699',
                    
                   
                }
              this.$store.commit('favorite/add',goods)

              if(this.$store.state.username){
                   this.$store.commit('favorite/add',goods)
                   this.$message({
                    message: '收藏成功',
                    type: 'success'
                    });
               }else{
                    this.$store.commit('favorite/add',goods)
                   this.$router.push({
                               path:'/login',
                               query:{
                                   path:"/details"
                               }
                           })
               }
                 
            },
            // 取消收藏
            onheart(){
                this.hearts=false
                 this.$store.commit('favorite/del',this.btn+1)
                  this.$message({
                    message: '取消收藏',
                    type: 'warning'
                    });
                       
            }
            
              
        },

        components:{
            topa,
            bottom
        },
         
     
        beforeUpdate(){
           let heart= this.$store.state.favorite.favoritelist;
           let  index=heart.findIndex(item=>item.id==this.btn+1)
           if(index==-1){
                this.hearts=false
           }else{
                this.hearts=true
           }
        }
        
    }
</script>

<style lang="scss" scoped>

.con{
    width: 1240px;
    margin: 0 auto;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.left{
    float: left;
}
.details_goods{
    padding-top: 82px;
    padding-bottom: 80px;
    .name{
        padding: 20px 140px;
        font-size: 26px;
        color: #333;
        background: #f6f8fb;
    }
    .el-row{
        .el-col{
            // border: 1px solid #cccc;
            padding-top: 26px;
            .content{
                
               img{
                   width: 560px;
               }
             }
               ul{
                   list-style: none;
                       
                   
                   li{
                       float: left;
                       margin-left: 25px;
                       padding-bottom: 10px;
                       text-align: center;
                      
                       &:nth-child(1){
                           margin-left: 0s;
                       }
                       img{
                           width: 80%;
                       }
                   }
                   .color{
                      box-shadow: -1px -1px 20px #ccc;
                      
                   }  
                   
               }
               .heart{
                  margin-left: 20px; 
                  margin-top: 30px;
                  
                  .el-icon-star-on{
                      margin-top: 2px;
                      font-size: 35px;
                  }
                  .el-icon-star-off{
                      font-size: 30px;
                  }
                
               }
            .goods_name{
                font-size: 28px;
                color: #262626;
                padding-top: 30px;
                margin-bottom:8px;
            }     
            .goods_does{
                color: #E22841;
                font-size: 14px;
                margin-bottom: 12px;
                line-height: 1.5;
            } 
            .order{
            background: #f4f6fa;
            padding: 16px 10px ;
            color: #cc0000;
                .price{
                    font-size: 36px;
                    i{
                        font-style: normal;
                        font-size: 24px;
                    }
                }
                .goods_add{
                    span{
                        color: #666;
                        font-size: 14px;
                        &:nth-child(1){
                            display: inline-block;
                            color: #cc0000;
                            background: #f2eaef;
                            padding: 5px 15px;
                            margin-right: 15px;
                        }
                        
                    }
                    a{
                    
                        color: #008cff;
                        margin-left: 15px;
                        font-size: 14px;
                    }
                }
            } 
            .afterDoes{
                margin-top: 10px;
                height: 45px;
               span{
                   font-size: 12px;
                   color: #8c8c8c;
                   margin-right: 20px;
               }
            }
            .label{
                font-size: 12px;
                color: #8c8c8c;
                letter-spacing:20px;
                width: 65px;
                
                padding-right: 10px;


            } 
            .model{
               .el-row{
                   .la{
                       font-size: 12px;
                        color: #8c8c8c;
                       
                        margin-top: 15px;
                   }
                   .el-col{
                    padding: 0;
                       ul{
                           li{
                               width: 160px;
                               border: 1px solid #ccc;
                               margin: 0;
                               text-align: center;
                               height: 35px;
                               line-height: 45px;
                               margin: 0 10px 10px 0;
                               a{
                                   font-size: 14px;
                                   color: #333;
                                   text-align: center;
                                
                                   img{
                                       
                                       width: 40px;
                                       display: inline-block;
                                   }
                                 .text{
                                       display: inline-block;
                                        margin-bottom: 15px;
                                        transform:translate(10px,-12px);
                                      
                                    
                                      

                                 }
                                 .huabei{
                                     height: 60px;
                                 }
                               }
                           }
                               .btn{
                                   border: 1px solid #000;
                               }
                              
                       }
                       
                       
                      
                   }
               }
            } 
            .count{
                .lab{
                font-size: 12px;
                color: #8c8c8c;
                letter-spacing:20px;
                 width: 65px;
                 margin-top: 15px;
                }
                span{
                    width: 14px;
                    color: #555;
                    display: inline-block;
                    width: 30px;
                    border: 1px solid #ccc;
                    padding: 10px;
                    text-align: center;
                    &:nth-child(2){
                        width: 45px;
                    }
                }
            }
       
        }
    }
}
.el-button{
   margin-top: 30px;
    width: 210px;
    height: 56px;
}
.detailImg{
    background: #f4f4f4;
    .title{
         font-size: 24px;
        color: #333;
        padding: 45px 0 20px;
    }
    .imges{
      img{
          width: 100%;
      }
    }

}
</style>