<template>
    <div>
         <!-- 底部开始 -->
    <div class="football">
        <div class="top">
          <ul class="con clearfix">
            <li v-for="(item,index) in football" :key="item+index">
              <a href="javascript:;">
                <img :src="item.img" alt="">
                <p>{{item.p}}</p>
              </a>
            </li>
          </ul>
          <div class="contact">
            <p class="week">周一至周日  8:00-20:00</p>
             <p class="datetime">400-778-3333</p>
             <div>
               <a href="javascript:;">在线客服</a>
             </div>
          </div>
        </div>
        <div class="bottom">
           <ul class="con clearfix">
             <li v-for="(item,index) in footbottom" :key="(item+index)">
               <a href="javascript:;">{{item}}</a>
              </li>
           </ul>
          <div class=" footerTitle  con  clearfix">
            ©2019Meizu Telecom Equipment Co.，Ltd.All rights reserved.
            <a href="javascript:;">粤ICP备13003602号</a>
            <a href="javascript:;">合字B2-20170010</a>
            <a href="javascript:;">营业执照</a>
            <a href="javascript:;">法律声明</a>
            <a href="javascript:;">粤公网安备44049102496009号回名母</a>
          </div>
           <div class="wechat">
             <ul>
               <li><a href="javascript:;"><img src="https://fms.res.meizu.com/dms/2019/01/07/3b085af8-a47b-453c-b147-a4b352fb3a14.png" alt=""></a></li>
               <li><a href="javascript:;"><img src="https://fms.res.meizu.com/dms/2019/01/07/58e3e041-5543-4414-aaf1-d8e1fd539af6.png" alt=""></a></li>
               <li><a href="javascript:;"><img src="https://fms.res.meizu.com/dms/2019/01/07/52cba4a4-b3a6-4522-9883-d3a918e7d4a9.png" alt=""></a></li>
               <li><a href="javascript:;"><img src="https://fms.res.meizu.com/dms/2019/01/07/bcccf9d2-e0e5-441b-b4a3-f78c12bc3933.png" alt=""></a></li>
             </ul>
           </div>
        </div>
    </div>
    <!-- 底部结束 -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                football:[
                    {img:"https://fms.res.meizu.com/dms/2018/07/13/2c69bf7c-2d29-4fd4-852e-0aa497f36f51.png",p:"满80免运费"},
                    {img:"https://fms.res.meizu.com/dms/2018/07/13/d28eac8b-b915-49dc-9dbd-80884a07d44f.png",p:"100+城市次日送达"},
                    {img:"https://fms.res.meizu.com/dms/2018/07/13/b21f3e65-f7f4-4693-914c-c070faf96770.png",p:"7天无理由退货"},
                    {img:"https://fms.res.meizu.com/dms/2018/07/13/b21f3e65-f7f4-4693-914c-c070faf96770.png",p:"15天换货保障"},
                    {img:"https://fms.res.meizu.com/dms/2018/07/13/420825c1-4763-436d-b3e1-721651ccc70c.png",p:"1年免费保修"},
                    {img:"https://fms.res.meizu.com/dms/2018/07/13/1c5cfeff-1b35-499e-bc2a-1fd29305be69.png",p:"上门快修"},
                    
                ],     
                footbottom:["了解魅族","加入我们","联系我们","Flyme ","魅族社区","天猫旗舰店","问题反馈","线上销售授权名单公示","出版物经营许可证","简体中文" ],
                        }
                    }
    }
</script>

<style lang="scss" scoped>
.con {
  width: 1204px;
  margin: 0 auto;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
h3 {
  background: #f4f4f4;
  padding-top: 80px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
}
.football{
  padding: 48px 0 20px;
  .top{
    position: relative;
    ul{
    padding-bottom: 30px;
      border-bottom: 1px solid #eee; 
      list-style: none;
      li{
        float: left;
        
        a{
          display: inline-block;
          width: 150px;
          height: 68.6px;
          text-align: center;
          img{
            width: 50px;
          }
          p{
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
    .contact{
      position: absolute;
      right: 165px;
      top: 0;
      text-align: center;
      .week{
        color: #999;
        font-size: 12px;
        float: right;
      }
      .datetime{
        font-size: 24px;
        color: #008cff;
      }
      div{
        a{
          width: 90px;
          padding: 5px 0;
          border-radius: 15px;
          background: #008cff;
          display: block;
          color: #fff;
          float: right;
        }
      }
    }
  }
  .bottom{
    padding-top: 30px;
    position: relative;
    padding-bottom: 20px;
    ul{
      list-style: none;
      li{
        float: left;
        margin-left: 30px;
        &:nth-child(1){
          margin-left: 0;

        }
        &::after {
              content: "";
            display: table;
            height: 0;
            clear: both;
            visibility: hidden
        }
        a{
          display: block;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .footerTitle{
      margin-top: 10px;
      font-size: 12px;
      color: #999;
      a{
         font-size: 12px;
         color: #999;
         margin-left: 10px;
      }
    }
    .wechat{
      position: absolute;
      bottom: 0;
      right: 160px;
      ul{
        li{
          a{
            img{
              width: 20px;
            }
          }
        }
      }
    }
  }
}
</style>