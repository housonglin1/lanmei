<template>
    <div>
        <!-- 添加地址 -->
         <div class="address ">
            <div class="row"  v-show="!edit">新增收货地址<span>(您目前已有地址<i>{{num}}</i>个)</span></div>
             <div class="row" @click="edits" v-show="edit">修改收货地址<span>(您目前已有地址<i>{{num}}</i>个)</span></div>
            <div class="dialog">
                <el-form :model="form">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                     <el-form-item label="电话" :label-width="formLabelWidth">
                      <el-input v-model="form.telephone" autocomplete="off"></el-input>
                    </el-form-item>
                     <el-form-item label="地址" :label-width="formLabelWidth">
                     <v-region :town="true" @values="value"></v-region>
                    </el-form-item>
                    <!-- <v-region :town="true" @values="value"></v-region> -->
                    <el-button type="primary" @click="add"  v-show="!edit" >提交 </el-button>
                    <el-button type="primary" @click="edits" v-show="edit" >修 改</el-button>
                  </el-form>
            </div>
         </div>
         <!-- 添加地址end -->
         <!-- 已有的地址 -->
         <div class="alreadyRess">
             <div class="title">已有地址</div>
             <div class="caption">
                <el-row :gutter="20">
                        <el-col :span="4"><div class="grid-content bg-purple">收货人姓名</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">收货人电话</div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple">收货人地址</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">操作</div></el-col>
                         <el-col :span="4"><div class="grid-content bg-purple">设置为默认</div></el-col>
                </el-row>
             </div>
             <div class="content" >
                  <el-row :gutter="20"  v-for="(item,index) in addresslist" :key="index+item">
                        <el-col :span="4"><div class="grid-content bg-purple">{{item.name}}</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{item.telephone}}</div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple">{{item.address}}</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple"> 
                                            <span @click="addressDel(index)">删除</span> 
                                            <span @click="addressEdit(index)">修改</span>
                                         </div>
                        </el-col>
                         <el-col :span="4"><div class="grid-content bg-purple">
                                                <input type="radio" name="addressIndex" @click="$store.state.address.addindex=index">设置为默认
                                          </div>
                        </el-col>
                </el-row>
             </div>
         </div>
         <!-- 已有的地址end -->

    </div>
</template>

<script>
    export default {
        data(){
            return{
                edit:false,
               index:0,
                 num:0,  
                addresslist:[],
                form: {
                    name: '',
                    telephone:'',             
                },
                 address:{},
                formLabelWidth: '100px',
            
                }
        },
        methods:{
             value(res){
                this.address=res
                res=this.address
            },
            // 添加地址
              add(){
           
                let str=""
                    for(var i in this.address) {

                    str+=this.address[i].value

                    }
                this.form.address=str
                
                this.$store.commit('address/addressAdd',this.form)
                    this.form.name="",
                    this.form.address={}
                    this.form.telephone=''
                 },
                 addressDel(index){
                this.$store.commit('address/del',index)
                },
            
                addressEdit(index){
                
                this.form.name=this.addresslist[index].name,
                this.form.telephone=this.addresslist[index].telephone
                this.edit=true,
                this.index=index
                },
                //  修改地址
                edits(){                   
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

                    this.edit=false,
                    this.form.name="",
                    this.form.address={}
                    this.form.telephone=''
                },
               
        },
        created(){
            this.addresslist=this.$store.state.address.address
            this.num=this.addresslist.length
        },
        beforeUpdate(){
             this.addresslist=this.$store.state.address.address
             this.num=this.addresslist.length
             console.log( this.addresslist)
       }

    }
</script>

<style lang="scss" scoped>
.con{
    width: 1240px;
    margin: 0 auto;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.address{
    padding: 0 10px;
    .row{
       padding: 0px 10px;
       font-size: 18px;
       color: #666;
       span{
           font-size: 14px;
           color: #797979;
           i{
               font-style: normal;
               color: #00c3f5;
           }
       }     
    }
    .dialog{
        margin-top: 20px;
        padding: 0 15px;
     .el-button{
         margin-top: 30px;
         margin-left: 200px;
         width: 300px;
        
     }
    }
}
.alreadyRess{
    padding-top: 50px;
    padding-left: 10px;
    .title{
       
        font-size: 18px;
        color: #666;
    }
    .caption{
        padding: 15px 0;
        font-size: 14px ;
        color: #666;
        background: #fafafa;
        .el-row{
            .el-col{
                text-align: center;
            }
        }
    }
}
.content{
      padding: 15px 10px;
        font-size: 14px ;
        color: #666;
        .el-row{
            padding: 15px 0;
            border: 1px solid #eee;
            .el-col{
                text-align: center;
                span{
                    margin-left: 20px;
                    color: transparent;
                   
                }
            }
            &:hover{
                border: 1px solid #018dff;
            }
            &:hover span{
               color: #018dff;
            }
        }
}
</style>
<style lang="scss">
.el-form-item__label{
            letter-spacing:30px;
}
 div.rg-select div.rg-select__el div.rg-select__content{
          padding: 0 30px 0 15px;
      }  
</style>