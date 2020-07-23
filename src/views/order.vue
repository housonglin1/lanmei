<template>
    <div>
      <!-- 头部导航 -->
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
                                    <li>小米的商城
                                         <div @click="$router.push('merchant/address')">地址管理</div>
                                         <div @click="$router.push('/merchant/favorite')">问题反馈</div>
                                         <div  @click="$router.push('/merchant/my')">我的收藏</div>
                                         <div  @click="$router.push('/merchant/my')">我的回购金</div>
                                         <div @click="$router.push('/merchant/my')">问题反馈</div>
                                         <div  @click="out">退出</div>

                                    </li>
                                </ul>
                               

                            </div>
                    </div>
                  </el-col>
                </el-row>
        </div>
        </div>
        <!-- 头部导航end -->

      <div class="main">

        <!-- 收货人信息 -->
        <div class="address con clearfix">
            <div class="title">收货人信息</div>
            
   
            <div class="operation " v-for="(item,index) in addresslist " :key="item+index">
             <div :class=" ['address_add',$store.state.address.addindex==index?'addindex':'']" @click="addindex=index">
               <div class="name"><label >姓名:</label>{{item.name}}</div>
               <div class="telephoto"><label >电话:</label>{{item.telephone}}</div>
               <div class="aress"><label >地址:</label>{{item.address}}</div>
             </div>
             <div class="delEdit">
               <span @click="addressDel(index)">删除</span> <span @click="addressEdit(index)">修改</span>
             </div>
            </div> 
             <div class="addbox  clearfix">
                <!-- Form -->
                <el-button type="text" @click="dialogFormVisible = true" class="button"></el-button>

                <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                     <el-form-item label="电话" :label-width="formLabelWidth">
                      <el-input v-model="form.telephone" autocomplete="off"></el-input>
                    </el-form-item>
                    <v-region :town="true" @values="value"></v-region>
                    
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="add" v-show="!edit" >确 定</el-button>
                    <el-button type="primary" @click="edits" v-show="edit" >修 改</el-button>
                  </div>
                </el-dialog>
                  
             </div>
        </div>
        <!-- 收货人信息end -->
        <!-- 订单的信息 -->
        <div class="orderDeatils con">
            <div class="title">
              确认订单信息
            </div>
            <div class="caption">
              <el-row :gutter="20">
                <el-col :span="10"><div class="grid-content bg-purple">供应商:魅族</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">单价</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">数量</div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">小计</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">配送方式</div></el-col>

            </el-row>
            </div>
            <div class="ordergoods clearfix" >
                  <el-row :gutter="20"  v-for="(item,index) in orderlist" :key="item+index" class="">
                      <el-col :span="2"><div class="grid-content bg-purple"><img :src="item.img" alt=""></div></el-col>
                      <el-col :span="8"><div class="grid-content bg-purple">
                                             <p class="name">{{item.name}}</p>
                                              <p class="does">{{item.network}}{{item.color}}{{item.memory}}{{item.setmeal}}</p>
                                        </div>
                      </el-col>
                      <el-col :span="4"><div class="grid-content bg-purple"><i>￥</i>{{item.price}}</div></el-col>
                      <el-col :span="3"><div class="grid-content bg-purple">{{item.num}}</div></el-col>
                      <el-col :span="3"><div class="grid-content bg-purple"><div class="Subtotal"><i>￥</i><span>{{item.Subtotal}}</span></div></div></el-col>
                      
                      <el-col :span="4"><div class="grid-content bg-purple">
                                           <div class="express">快递配送:  运费<i>￥</i><span>0.00</span></div>  
                                         </div>
                      </el-col>
                </el-row>
            </div>
        </div>
        <!-- 发票 -->
        <div class="invoice con">
          <el-row :gutter="20">
              <el-col :span="20">
                               <div class="grid-content bg-purple">
                                 <p> 发票类型:电子发票 
                                  
                                     <el-button type="text" @click="dialogVisible = true">查看</el-button>
                                      <el-dialog
                                        title="电子发票"
                                        :visible.sync="dialogVisible"
                                        width="30%"
                                       >
                                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3164468217,2359493916&fm=11&gp=0.jpg" alt="">
                                        <span slot="footer" class="dialog-footer">
                                          <el-button @click="dialogVisible = false">取 消</el-button>
                                          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                                        </span>
                                      </el-dialog>
                                  
                                </p> 
                                  <p> 发票抬头:默认为收货人姓名</p>
                                
                               </div>
              </el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                        <p>合计: <i>￥</i><span class="total">{{total}}</span></p>
                    </div>
              </el-col>
         
        </el-row>
        </div>
        <!-- 发票end -->
        <!-- 优惠 -->
        <div class="discount con">
            <div class="title">
              使用优惠抵扣
            </div>
              <el-collapse accordion>
                <el-collapse-item>
                  <template slot="title">
                     使用回购金<i class="header-icon el-icon-info"></i>
                  </template>
                  <div class="gold">我的回购金额: <i>￥</i><span class="info">0.00</span><span class="gift" >（使用说明：系统会根据您选购的商品自动计算出最大可以用回购金数量，以及可享受的魅族商城补贴，该补贴不可退。）</span></div>
                  <div>
                      <el-radio-group v-model="radio">
                        <el-radio :label="3">可使用￥0.00元回购金</el-radio><br>
                        <el-radio :label="6">暂不使用回购金</el-radio>
                      
                    </el-radio-group>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="使用礼品卡">

                  <div class="gift"> 礼品卡为一次性全额消费卡，选购商品价格需大于礼品卡金额。一次只能消费一张礼卡，该卡一经扣款成功则无法退款。</div>
               </el-collapse-item>
               
          </el-collapse>
        </div>
        <!-- 优惠end -->
        <!-- 支付方式 -->
        <div class="paymony con">
          <div class="title">选择支付方式</div>
           <div class="quick">
             <label >快捷支付:</label>
                <el-radio-group v-model="radio1">
                        <el-radio :label="0"><img src="data:image/png;base64,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" alt=""></el-radio>
                        <el-radio :label="1"><img src="data:image/png;base64,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" alt=""></el-radio>
                        <el-radio :label="2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAmCAYAAADpyZQRAAANaElEQVR42u1bB1RU1xbNX/lZMc1EY+wmllgBaSJFUVEREbvYjTGaWKOxazR2JfYSIvYaE0ukCghiQQUFFRUbIKiASBPFAQRp7n/OxRlmmAry14pmzlpn4eO9ecy7+5S9z32+847e9KY3ventbTfo7a22SgO9oDgfj54/wo0nkTifchankoJw5tEphKeHIU4SC0n+M/1qvw2gSwokOEngLo1YhKEnndH5mC2svMzRxsMYZu5GMPdoDQtPE7T3toTTcQf8GDIee6J34u6zGP3Kv2mgZ+RlYHvUFvQJdBLAmrobwsLDBFaeZrD2aqPkHAhtPU3FtSbuBhQEVph6YTIupl3QI/AmgO4T741eAY4CPAZSFcjanIOAKwF/ft6lOaIt6O0fCPrzwudYFrEY5u4lJbsiYKsC35SCp2eAw2tlfXFxscLxy5cvkf/ihfipwDsKCpCakoyiwkKN90tPS4Xbpg1ISkxUuu+pwAAc9z32Wov+9MkT+Hh6ICU5udyfjbsbA2/3o8jJztZ4XcjZYHFd2bXRGfScghwqxz/C5GirSgG7rItAovYQlBRYoUVcvvAXLFswX3ac/CgJfbp1FQskbzcjr8O6tSES4h9ovJ/HkcOoUeU9XL8aoXRu3szpaNGgLhIePKgw6JfDLqLGB+9VKHhWLFqAulU/wt2oKI3XTRg9CtbGhihUEeBaQS96WYT5l+cS4AaVDjaXd870zr4dsOjKfNx8cqPcixBxKRyNalaHx+FDOLBnN8IvXiDQH8Gg0Ze4Gx2FyGtXseW3TTIwrY2NkJeXq/Geo4cPhUOH9rgXe1cEyq0bka/8Bk6fCETLL+th/cpfxXHpuUjcvnmD7p2n9TtfvXwJ9T77BCeO+5frWXNzn6O9mTGG9eujMoPl7afxY2Fn2aZioB++d1AQtcoEW8rumQhuvbMZiTmlZZQlX2Z+pk6L8CQjA7bmppg05jtx3KurHbb97orH6ekwbtoY9+/F4chff6KTpYU4/8usGRgzYqhYsKKiIuFlW8DDhAQ0rVsLO7e4YfyokWhS6wsBstQNGjZAq6/qi6CS/z1nv1HjrxB//z4O7N2Dru2s0LNLJ5Xe2botGteqgY4W5mqvcezUQQSsvHGQ1Pq4Cvy8vbSuzfRJE9DZyqL8PT0tNxUO/l0qTNhUkTfmA6OCR8DzgTueyWn3hwQ8Sz9m+Jtvu2p9qOzsLAzv3xcdLMzwLLMkSPr3cMAfu3eJfmfSrAmSkx/BlxbIsZOtALi3fRcBkB0FQfeO7dGhjRkOH/hD4b6b1q4WoKbQZx9ST4+lFnE/Lk7R78Up/e5eXCxVlmjBG86dOY3lVIZXL1+qwpcJQL6qUU2U4NUrlqm8buXSJQothINzhHN/+s6mItj5OXe4babgVPZdW90oATrDvGUzbN/sii2um3AlPFw30HdEbVNZ1qUAWuoQDJYk47hSsEybGTYNoannUVhcWnKyCrKwM3o77P06lUg/Cooe/vZ48uKJRtAXz5srsi0m6g4twmOR3c5O3TGMAmHl0sVoUvsLLJ4/F+O+/Qb9undD1O3bMGrSEBtXr8K+nTtElvV1sBclWTZ3ePYMbQ1b4ruhg2W/S0yIp2tu0udvqfU7t27R94hSqhrqjFsBl/fg06d05wHhYahfrSq+GTgAT58+perVRgS2WYumKp0rD1css+ZNKdDrw23jBu2gFxQXYMTpIUSwjJUA5yGM662NcDreTYCvCmwmZgwiV4rVkSsRnRmNslzBP9EPA4P6iess5TQ+3/M4ndNkzEzDL5Qw/tHDBmMiZc1alxUY1MsJg/v0wqghAzGkb2/RAwdQMKz71UWU1NRXjLm3fWds3rBe4Z473H5H9ffflbULtjHU35vTAramgFHnhhR8VkSaHiU9VLgf99P8/HwUlPGw0BABup+Pt8Lv+VquSGWNg4kDkcnlUOrnfJydlYUsiUStT6Rn6EhVkJUCB/MLUjNaQU/IjkdHHxsBclnQ+SeTLu7Fk0MnyoFmLsozs/FBJ/tj3909okUoEZnHEZgYMrZkYuehLP/4fi7XluuUAaHnzqLhF9Vw5mSQ2r7vf8wHVq0NBOic2QyGFbH4o4cOyq5LS02BhUEL1PqoigggeXnF0io1JUWDJ9PnU5UAmzZxAlWOVuhibSl6vK25CdqTt2nVHHWqfgjT5l+LY3Y76r/MT/7at1fpGQKI5X/5+WeienEg62JTJ4wTRK5cki08LUwlINJMnHFxakk0U6neF7MHHShAGPjx539AwMPjQteXtcScBNG3bbwsKDCM1Es4CoZJIeO1PhgzZceOtvh+xDBxHEzAO/d0FCVe6rxIe7ZvE4vgRATpJOns9PQ0GBLp4pIpqg6BNXPyJFEWHTq0ww/fDJf9jeg7t6mihOISySy1Toohghh5vlw2SYkXE0IOOBsTI+zftRN7d2wX7YXJ3r5dO8TxfurP/AzV3vsP3OUCkY2DiqvIoN5OGDGgHwb06C47d4j4yNxpP6kEtkLsPTj5jFh8daTMxtsCt5/ekt0oVnJXMO+XUO5rom8TP5D27bLVQxW7H3P2W62gczn/9N138PuGdeI48upVodlXLVsic9bvl8PCZIyW5dsVknnM7tPT0koGT8+fC0176MB+TPp+NLWLIbK/8T0FQEsidiZ0vTpv3aQRbExbi/mAKtu9bSsaUZVhCahuuORg2w7dbG3wPCdH4RwTsGb164gKNY7URH9HB9k5Dp4aVf4Ld5KrlQJ6WNpFtZkuLcFLrizQCAr3bb9EX+rbfZX6tsZhDQXbxJBxGu/t6+WJr+vUFCV745pVOpU8ZrsswzZvXE+yyI56Y2mGhJ49KzKee7g86FnUOzMznwqFoM1V9eOSe0iIW5gIfa3qGg7MOlU/wvngMyo/G+jnK/7NfV0edL7XcMp+M2Lpj9PTXh/0B1n3YetjrTYreXOl07F2iM9WPZnivj3hvPq+rck5QJZfXaIRQAZn4ZxZGNy7J9asKOn/sTHRsG9vLWQck5j2psaYP3N66Qzg+jWR0QzAWhfVnIEBlwc9/sF9AYZmD8b1iAiN7D0o4Dhqf/Ihflu3VuH3B//YL3jEul9XaA3asqBLp4zM6udMnaJQ5isEen5xPoacctaS7QZYf0PxIRKzE7AkYiGd19y3tYF+LMFb4wLExsTgBfX0gcTWWeuKBbh+Hc3r1aZeuVOMOHmROBPYWLKxhmatztWBe7UuoHMWMljc71n3qnImWF1tLMX9NdmqZUtR6+MPBMcopizlCSJnOLcdbfsB6kBnWzh3NhbMnqUAcIUncm63XcVumiYNbu9nh3uSOGS+yBR6u6uOfVvTPbv5dUZ6XppOJXuAk6MM9GuUbSyhpKWOZRpXAj7PEy7OxJGDnEm7fi3Kpi6gL5n/M2zbmAryx0xelc+bOUNUF22gcyFY+ss8NK75OZzpe3Pw8byhuLhIp2dVB7qqgKkw6Ek5Seji21FjL+ZpXXfS4j0Dur8a2Ji91uSOh0EbylQPXUH38XAXGcm6lAH+efo01KbMamvQUjBsr6N/ozmRIp7KMeHTFXQ7NePM0g2fBWK6pw10DpDd27aQxKyOmh++j0YE/pbfNoq9gtcBXa1ka1vB2fvemF0as12anZUxquVBUJ/AHsjIe1wu0NdQf+aH48EFT6ykg5GhJNe6trNGYnzJVI2JH0/kjnl6oN6nH+Pwnwd0Ap35AQ9D8nJzlZ1azMK5c9SCzoMS7vvzZkwjpt9EAD1ryo/w9/EWY2QOyhYUhGNHjsAh6u/Rd+4INfG6oI8aMohajlXFtla5t0+7OEUr8JWx48b6PTQ1pFw7T/1oEZi9B/r7oQERmgvnzymMUHlocjMyUujy4QP6yrQ0VwEmUEFldrrKgs5bmQ2qf4p2JMnaETEs+VnqPPFjSceSSwo6b7rs2rpFKAXu+XUpwHggw6Wcx7byUo0DYiqVYpaQnP08hGFNP6x/HxGouoLOen8R9fb1K12ov88U33nqxPEVf4kiM/8pxp4b/X8DngFnDuAT74XyGuvora6bIJE8Q/CpkyqvOXUiUBC+jMePFQY7s3+aIgJC3pj4Sckf2wJSCK0aNiAtfBCefx9Rcq+jR0SFsTE2koHOgxqee3NQzCZWzcxdIpFo3THk7+myaKF4F4D3DHLLZPzIQQMEEVVlLosXohG1DZ6584YRB7i69wZ0fnOGd8TmhM8Ug5PKBNyMSB+Tv6CkExV6ISE7O1unPexCHdixmKL5+5OXzv0vhoYojGtVGQ9QjlCrkC+lLPW4/FfW20BSycl78Sqnk/S3eNjElY03oCrtHTketpRsfxq99jarmNGTTw6dIF6R1ts/8B052atED44qlHnOfPNXLzlqkmlM9vha1vaWnuZizHriYQCKXxbrUfing77+xhrZK88MNPf66UT0+C0Yfr+95K0YQ3ENu/krGcfS79szw7Hx5jpczYgQVUNvbwDonJWcoQZHmsE5qK94kVE6eswuyEYslWlm3zxv54rgHe+Jk9Srr2dcQ0puij6r30TQ84ryxP9S2XrHDZJ8iX71/i3lvfBloX7V/m2g600Put7eFtD1pje96U1vb4v9D/Nn8ZgGGUGZAAAAAElFTkSuQmCC" alt=""></el-radio>
                    </el-radio-group>
           </div>
        </div>
        <!-- 支付方式end -->
        <!-- 付款 -->
        <div class="payorder  con">
         <div class="box">
        <div>
           <div class="label">总金额:</div> 
            
           <div class="moneyNUm"><i>￥</i>{{this.total}}.00</div>
        </div>
        <div>
           <div class="label">运费:</div> 
            
           <div class="moneyNUm"><i>￥</i>0.00</div>
        </div>
         <div class="new">
           <div class="label">应付:</div> 
            
           <div class="moneyNUm"><i>￥</i>{{this.total}}.00</div>
        </div>
            <!-- <el-button type="danger" @click="payAdd">下单并付款</el-button> -->
            <el-button type="danger" @click="open">下单并支付</el-button>
         </div>
         </div>
         
        <!-- 付款end -->

        <!-- 订单的信息end -->
      </div>
    <bottom></bottom>
      </div>
  
</template>

<script>
import bottom from "../components/public/bottom"
    export default {
      data(){
        return{
          // 修改的索引
          index:0,
          // 总价
          total:0,
          
          // 优惠的对话框的显示
          dialogVisible: false,
          // 地址的集合  
        addresslist:[],
          // 地址的对话框的显示
        dialogFormVisible: false,
      //  地址对话框修改时改变
        edit:false,
        // 地址联动获取的值
        address:{},
        // 优惠单选框选择后的索引
        radio:3,
        // 支付方式的单选索引
        radio1:0,
        paymony:["蚂蚁花呗","支付宝","微信支付"],
        form: {
          name: '',
          telephone:'',
       
        },
        formLabelWidth: '120px'
      };

    },
    methods:{
      // 退出登录
      out(){
            
             this.$store.state.username=""
              this.$message('退出登录');
         },
     sum(){
       this.total=this.orderlist.reduce((total,item)=>{
          return total+parseInt(item.price)*parseInt(item.num)
       },0)

      
     },
     value(res){
        this.address=res
        res=this.address
     },
    //  添加地址
        add(){
          
        this.dialogFormVisible=false
        let str=""
            for(var i in this.address) {

               str+=this.address[i].value

            }
        this.form.address=str
       
        this.$store.commit('address/addressAdd',this.form)
        
     },
     addressDel(index){
       this.$store.commit('address/del',index)
     },
     
     addressEdit(index){
       this.dialogFormVisible= true,
       this.form.name=this.addresslist[index].name,
       this.form.telephone=this.addresslist[index].telephone
       this.edit=true,
       this.index=index
     },
    //  修改地址
     edits(){
        this.dialogFormVisible=false
        let str=""
            for(var i in this.address) {

               str+=this.address[i].value

            }
        this.form.address=str
        
        this.$store.commit('address/addressEdit',
                             {
                               index:this.index,
                               form:this.form
                               
                               }
                             )

        this.edit=false
     },
    //  payAdd(){
    //     this.orderlist.orderNum=new Date().getTime()
    //     this.orderlist.datetime=new Date()
    //     this.$store.commit('order/payadd',this.orderlist)
    //  }
     open() {
       if(this.$store.state.username==''){
         this.$message("请先登录")
         return
       }
        if(this.total==0||this.addresslist.length==0){
            this.$message("格式错误")
            return
        }
        
         let num=new Date().getTime()
         let time=new Date()
        this.$confirm('是否支付订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '支付成功!'
            
          });
          let  obj={
            goods:this.orderlist,
            datetime:time,
            orderNum:num,
            type:1
          }

         
          this.$store.commit('order/payadd',obj)
          this.$router.push('merchant/orderlist/orderAll')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消支付'
          }); 
          let  obj={
            goods:this.orderlist,
            datetime:time,
            orderNum:num,
            type:0,
          }

         
          this.$store.commit('order/payadd',obj)
          this.$router.push('merchant/orderlist/orderAll') 
            
        });
       
      }
    
      
    },
       
       components:{
          bottom
        },
       created(){
         this.orderlist=this.$store.state.order.lists
          
          // 计算商品总价格
         this.sum()
         this.addresslist=this.$store.state.address.address
       },
       beforeUpdate(){
             this.addresslist=this.$store.state.address.address
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
    position: relative;
    border-bottom: 1px solid #eee;
   
    // border: 1px solid red;
    
    z-index: 10;
    height: 92px;
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
                            color: #ccc;
                         &::after{
                             content: ">";
                             color: #ccc;
                              margin: 0 10px;
                         }
                      }
                       &:nth-child(2){
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
              position: absolute;
              margin-top: 30px;
               font-size: 12px;
               text-align: center;
               color:#666;
              z-index: 100;
               ul{
                   width: 100px;
                  

                   li{
                       margin: 10px  0px;
                      //  border:1px solid #ccc;
                       &:hover{
                         padding: 10px 0;
                         margin: 0px;
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


  .main{
    background: #F4F6FA;
    padding-top: 30px;
    .title{
      padding: 20px;
    }
    .address{
      position: relative;
      background: #fff;
      .operation{
          float: left;
           &:hover .delEdit{
         color:#018dff ;
        }
      
      .address_add{
        border: 1px solid #ccc;
       width: 288px;
       height: 148px;
       display: inline-block;
        border-radius: 2px;
        margin-left: 20px;
      
        padding: 20px;
        box-sizing: border-box;
        margin-top: 20px;
        &:hover{
          border: 1px solid #018dff ;
        }
        
        div{
          color: #999;
          margin-top: 10px;
         
        }
        label{
          font-size: 16px;
          color: #666;
          margin-right: 20px;
         
          
        }
      }
      .addindex{
          border: 1px solid #018dff ;
       }  
        .delEdit{
          margin-top: 10px;
          text-align: right;
          margin-right: 15px;
          color: transparent;
         

        }
      }
     .addbox{
       border: 1px solid #ccc;
       width: 288px;
       height: 148px;
       display: inline-block;
        float: left;
        border-radius: 2px;
        cursor: pointer;
        padding: 0 16px;
        box-sizing: border-box;
        margin: 0 0 30px 12px;
        transition: border-color .8s;
        text-align: center; 
        margin-top: 20px;
        &:hover{
           border: 1px solid #018dff ;
        }
        
        .button{
        position: relative;
        background: #999;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-top: 50px;
        &:before{
          position: absolute;
          content: "";
          width: 4px;
          height: 20px;
          background: #fff;
          left: 12px;
          top: 5px;
          // z-index: 200;
        }
        &::after{
          position: absolute;
          content: "";
          width: 20px;
          height: 4px;
          background: #fff;
          left: 4px;
          top: 12px;
          // z-index: 200;
        }
        &:hover{
            background: #018dff;
           
        }
      }
     }
    }
  }
  .orderDeatils{
    background: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    .title{
      padding: 0 ;
      margin-bottom: 20px;
    }
    .el-row{
      
      padding: 15px 0;
      background: #f4f6fa;
      .el-col{
        text-align: center;
        font-size: 12px;
        color: #262626;
        &:nth-child(1){
          text-align: left;
        }
      }
    }

  }

  .ordergoods{
  
    .el-row{
        height: 150px;
        background: #fff;
        color: #262626;
        
        border-bottom: 1px solid #eee;
        i{
          font-style: normal;
        }
        .el-col{
          font-size: 16px;
          margin-top: 50px;
          &:nth-child(1){
            margin-top: 0;
          }
           &:nth-child(2){
            margin-top: 10px;
            line-height: 1.5;
          }
          span{
            color: #cc0000;
          }
          .name{
            margin-top: 30px;
            font-size: 18px;
          }
          .does{
            color: #aaa;
          }
          .Subtotal,.express{
            i{
              color: #cc0000;
            }
          }
        }
    }
  }
  .invoice{
    background: #fff;
    border-bottom: 1px solid #eee;
     padding: 15px;
    
     box-sizing: border-box;
     line-height: 1.8;
     color: #595959;
     font-size: 14px;
     .el-row{
       padding: 0 10px;
       .el-col{
         &:nth-child(2){
           margin-top: 15px;
         }
       p{
         &:nth-child(2){
           font-size: 12px;
           color: #8c8c8c;
         }
         i{
           font-style: normal;
           color: #cc0000;
           font-size: 18px;
         }
         .total{
           font-size: 20px;
            color: #cc0000;

         }
       }

     }
     }
  }
  .el-dialog{
    
    img{
     margin-left: 60px;
    }
  }
  // 支付方式
.quick{
  border: 1px solid #ccc;
  background: #fff;
  padding: 30px 26px ;
  .el-radio{
    margin-left: 20px;
    
  }
}
// 付款
.payorder{
  background: #fff;
  height: 280px;
  .box{
    float: right;
    width: 300px;
    // border: 1px solid #ccc;
    padding: 20px 15px;
    .new{
      padding-top: 20px;
      border-top: 1px solid #ccc;
      .moneyNUm{
        color: #cc0000;
        font-size: 20px;
        font-weight: 600;
        i{
          font-size: 18px;
        }
      }
    }
    div{
      color: #898989;
      padding: 5px 0;
      .label{
        display: block;
        float: left;
      }
      .moneyNUm{
        text-align: right;
      }
    }
    
    
  }
  .el-button{
    float: right;
  }
}
</style>
<style lang="scss">
.el-collapse-item__header {
  padding-left: 20px;
 
}
i{
  font-style: normal;
}
.gift{
  font-size: 12px;
  color: #8c8c8c;
  margin-left: 20px;
}
.gold{
  font-size: 16px;
  color: #262626;
  margin-left: 20px;
  
}
.info{
  color: #cc0000;
}
.el-radio-group{
    margin-left: 25px;
    .el-radio{
      margin: 10px 0;
    }
}
.el-radio__input{
   margin-top: -20px;
}
.discount {

  .el-radio__inner{
    margin-top: 20px;
  }
}

</style>
<style lang="scss">

</style>
