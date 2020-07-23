<template>
    <div>
        <!-- 标识 -->
        <div class="box">
            <div class="left">
                <img src="https://openfile.meizu.com/group1/M00/04/99/Cgbj0FsWAnWAIQG1AACdP24q8BE344.png" alt="">
                <div class="content">
                    <p>如果您的问题急需处理，请咨询我们<br>
                        全国服务热线或在线客服！
                    </p>
                    <span>
                        周一到周日  8:00-20.00
                    </span><br>
                    <em>400-788-3333</em>
                    <br>
                   <a href="javascript:;">在线客服</a>
                </div>
             </div>
            
        </div>
        <!-- 标识end -->
        <!-- 主要建议 -->
        <div class="nextname">
            你想对那一方面提出建议
         <el-form ref="form" :model="form"  label-width="80px" size="mini">
            <el-form-item label="你的建议" label-width="80px">
                <el-select v-model="form.region" placeholder="你的建议">
                <el-option label="购物体验" value="购物体验"></el-option>
                <el-option label="支付流程" value="支付流程" ></el-option>
                <el-option label="活动建议" value="活动建议"></el-option>
                <el-option label="商品建议" value="商品建议" ></el-option>
                <el-option label="其他建议" value="其他建议"></el-option>
              
                </el-select>
          </el-form-item>
          </el-form>
        </div>
        <!-- 主要建议end -->
        <!-- 问题描述 -->
        <div class="detailsproblem">
            <span>请详述你的问题</span>
            
            <br>
            <textarea name="problem" id="problem" cols="80" rows="9"></textarea>
        </div>
        <!-- 问题描述end -->
        <el-button type="primary" plain>提交</el-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                form:{
                    region:''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}

.box{
   .left{
       position: relative;
       img{
           width: 830px;
       }
       .content{
           text-align: center;
           position: absolute;
           right: 225px;
           top: 30px;
           font-size: 14px;
           color: #666;
           line-height: 1.8;
           span{
               color: #999;
               font-size: 12px;
               display: inline-block;
               margin-top: 15px;
           }
           em{
               font-size: 20px;
               font-style: normal;
               color:#00c3f5;
              
           }
                         a{ 
                
                   padding: 8px 35px;
                   font-size: 12px;
                   color: #fff;
                   background: #1FA7EA;
                   
               }
          
          
       }
   }
}
.nextname{
    margin-top: 15px;
    font-size: 12px;
  .el-form{
      margin-top: 15px;
  }
}
.detailsproblem{
    span{
        font-size: 12px;
        margin-bottom: 15px;
        display: inline-block;
    }
}
.el-form-item{
    label{
        width: 120px;
    }
}
</style>