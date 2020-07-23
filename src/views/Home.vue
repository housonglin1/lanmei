<template>
  <div>
    <!-- 顶部开始 -->
    <div class="nav">
      <top v-show="show"></top>
      
      <div class="swiper-container homecontainer">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="(item,index) in imges" :key="index">
            <div class="yid">
              <img :src="item" alt />
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination homepagination"></div>
      </div>
    </div>
    <!-- 顶部结束 -->
    <!-- 轮播下推荐开始 -->
    <div class="bottomLun">
         <ul class="con clearfix">
           <li v-for="(item,index) in lists" :key="item+index"><a href="javscript:;" @click="$router.push('details')">
                                                                  <img :src="item.img" alt="">
                                                                  <p class="title">{{item.title}}</p>
                                                                  <div class="represent">{{item.represent}}</div>
                                                             </a>
            </li>
         </ul>
    </div>
    <!-- 轮播下推荐结束 -->
    <!-- 手机开始 -->
    <h3>手机</h3>

    <a href="javascript:;" class="photo"></a>
    <!-- 手机结束 -->
    <!-- 商品开始 -->
    <div class="index-center-wrapper">
      <ul class="con clearfix">
        <li v-for="(item,index) in spot" :key="index" class="big1" @click="$router.push('details')" >
          <p>现货</p>
          <div class="name">{{item.name}}</div>
          <div class="title">{{item.title}}</div>
          <div class="price">
            <i>￥</i>
            {{item.price}}
          </div>
          <div class="img">
            <img :src="item.img" alt />
          </div>
        </li>

        <li v-for="(value,num) in photo" :key="num+value" class="photoimg">
          <img :src="value.img" alt />
          <div class="name">{{value.name}}</div>
          <div class="does">{{value.does}}</div>
          <div class="price">
            <i>￥</i>
            {{value.price}}
          </div>
        </li>
      </ul>
    </div>
    <!-- 商品结束 -->
    <!-- 商品列表开始 -->

    <div class="goodlist" v-for="(item,index) in goodlist" :key="index"  @click="$router.push('details')">
      <h3>{{item.hostname}}</h3>

      <div class="goodphoto">
        <a href="javascript:;">
          <img :src="item.hostimg" alt />
        </a>
      </div>
      <div class="goodbox">
        <ul class="con clearfix">
          <li v-for="(value,num) in item.lists " :key="num">
            <a href="javascript:;">
              <img :src="value.img" alt />

              <span>
                <p class="name">{{value.name}}</p>
                <p class="title">{{value.title}}</p>
                <p class="price">￥{{value.price}}</p>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div class="goodbox"></div>
    </div>
    <!-- 商品列表结束 -->
    <!-- 社区热帖开始 -->
    <div class="hotPost">
      <h3>社区热帖</h3>
      <div class="posts">
        <ul class="con clearfix">
          <li v-for="(item,index) in posts" :key="index+item"  @click="$router.push('details')">
             <a href="javascript:;">
               <img :src="item.img" alt="">
               <div class="useInfo">
                   <p class="headphoto"><img :src="item.headphoto" alt=""></p><span class="username">{{item.username}}</span>
               </div>
                  <p class="does">{{item.does}}</p>
                  <span class="nameT">{{item.nameT}}</span>
              </a>
          </li>
        
        </ul>
      </div>
    </div>
    <!-- 社区热帖结束 -->
    <!-- Flyme开始 -->
    <div class="flyme">
      <h3>Flyme</h3>
      <div class="flymebox">
        <ul class="con clearfix">
          <li  @click="$router.push('details')"><a href="javascript:;"><img src="https://fms.res.meizu.com/dms/2020/05/27/2432d698-30a2-44ab-9ad7-e2a8d7fed254.png" alt=""></a></li>
          <li v-for="(item,index) in  flyme" :key="item+index"  @click="$router.push('details')">
             <a href="javascript:;">
                  <img :src="item.img" alt="">
                  <p>{{item.p}}</p>
              </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Flyme结束 -->
    <!-- 精彩视频开始 -->
    <div class=" wonderfulVideo">
      <h3>精彩视频</h3>
      <div class="videobox">
        <ul class="con clearfix">
          <li v-for="(item,index) in videos" :key="item+index">
               <i class="el-icon-video-play"></i>
              <img :src="item.img" alt="">
              <p class="ptitle">{{item.ptitle}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 精彩视频结束 -->
    <!-- 底部开始 -->
    <bottom></bottom>

    <!-- 底部结束 -->
  </div>
</template>

<script>
import Swiper from "swiper";

import bottom from "../components/public/bottom"
import top from "../components/public/top"


export default {
  data() {
    return {
      show:true,
      imges: [
        "https://fms.res.meizu.com/dms/2020/06/16/bbbb478b-e9d4-4956-a12c-24babb0d9ab1.jpg",
        "https://fms.res.meizu.com/dms/2020/05/08/4865d785-ce6f-4737-9fd7-8cb0b0267f2a.jpg",
        "https://fms.res.meizu.com/dms/2020/06/09/6c23c012-045f-4a82-bd75-6e8b5a4110e6.jpg",
        "https://fms.res.meizu.com/dms/2020/05/27/137740aa-81be-4858-a4fb-978e22036f8b.jpg",
        "https://fms.res.meizu.com/dms/2020/03/25/5d77d2c8-b0fd-4dc2-8856-a22d577d9a99.jpg",
        // "https://fms.res.meizu.com/dms/2020/05/20/5325760f-ef0c-48d5-a56a-dbaa18586a1d.jpg",
        "https://fms.res.meizu.com/dms/2020/06/09/8f98e4fe-722d-472e-96b8-612d107d8c25.jpg"
      ],

      lists: [
        {
          img:
            " https://fms.res.meizu.com/dms/2020/06/18/cbe3909c-2d34-484c-b103-2c51a3f36e19.png",
          title: "狂欢继续",
          represent: "购物赢免单"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/06/18/9ed2864a-7790-4649-b562-fc95b3df6250.png",
          title: "配件狂欢购",
          represent: "全场无门槛包邮"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/06/11/0ae33114-f126-4254-8fd4-468b121c3296.jpg",
          title: "魅族17",
          represent: "立省50+限时赠HlFl"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/06/11/13de22b5-2301-480f-99f9-778e4ff8644c.jpg",
          title: "mCycle",
          represent: "以旧换新"
        }
      ],
      spot: [
        {
          name: "魅族17",
          title: "高通骁龙865+UFS3.1高速闪存|6400W全场景影像系统",
          price: "3699",
          img:
            "https://fms.res.meizu.com/dms/2020/06/10/07e016f7-0de0-4592-8521-7d1aa87f6d90.png"
        },
        {
          name: "魅族17 Pro",
          title: "高通骁龙865+UFS3.1+LPDDR5|6400W全场景AR 专业影像系统",
          price: "4299",
          img:
            "https://fms.res.meizu.com/dms/2020/06/10/866bec68-019d-41bc-96ad-9d73f260eedb.png"
        }
      ],
      photo: [
        {
          name: "魅族17航母限定版",
          does: "以梦为舰热爱起航",
          price: "4299",
          img:
            "https://openfile.meizu.com/group1/M00/07/E5/Cgbj0V61DmKAarkmAAUGRp7cOD4317.png"
        },
        {
          name: "魅族17Pro 晓芳窑艺术典藏版",
          does: "这艺术科技极了",
          price: "9999",
          img:
            "https://openfile.meizu.com/group1/M00/07/CF/Cgbj0F61BXaARxdvAAqWtjjyY08964.png"
        },
        {
          name: "魅族16T",
          does: "6.5英寸极边全面屏|骁龙855旗舰处理器",
          price: "1999",
          img:
            "https://openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png"
        },
        {
          name: "魅族16s",
          does: "高通骁龙855|4800W光学防抖",
          price: "2399",
          img:
            "https://openfile.meizu.com/group1/M00/07/3B/Cgbj0VzaXQqAMN2pAAa47vx50YU413.png"
        }
      ],
      goodlist: [
        {
          hostname: "魅族声学",
          hostimg:
            "https://fms.res.meizu.com/dms/2020/05/08/d26392c2-62c8-4f12-8650-cebfb34734d4.jpg",
          lists: [
            {
              name: "魅族EP3C耳机",
              title: "Hi-Res 认证高解析音质|Type-C数字接口",
              price: 129,
              img:
                "https://fms.res.meizu.com/dms/2019/08/29/04811a8d-07fb-4188-a852-1971f442d08f.jpg"
            },
            {
              name: "魅族POP2真无线蓝牙耳机",
              title: "蓝牙5.0|单次8H续航|石墨烯振膜|双耳通话",
              price: 399,
              img:
                "https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png"
            },
            {
              name: "魅族HIFI解码耳放",
              title: "高性能DAC芯片|纯净HiFi音质/600Q高阻抗推力",
              price: 169,
              img:
                "https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png"
            },
            {
              name: "魅族EP63NC无线降嗓耳机",
              title: "AMS芯片智能降|Qualcomm apt-XTM 高清音质",
              price: 399,
              img:
                "https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png"
            },

            {
              name: "魅族HiFi解码耳放 PRO",
              title: "超强二级运放|Hi-Res 认证高解析音质",
              price: 269,
              img:
                "https://fms.res.meizu.com/dms/2020/04/15/80a51ef1-a6af-4337-9b6f-5a17a88f0a25.jpg"
            },
            {
              name: "魅族HD60头戴式蓝牙耳机",
              title: "40mm生物振膜|Type-C充电|触控操作|蓝牙5.0|轻奢品质",
              price: 499,
              img:
                "https://openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png"
            },
            {
              name: "魅族EP52Lite蓝牙耳机",
              title: "生物纤维振膜18小时续航IPX5级防水轻巧亲肤",
              price: 129,
              img:
                "https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png"
            },
            {
              name: "魅族EP2X耳机",
              title: "一体式线控|3.5mm接口|流线设计",
              price: 69,
              img:
                "https://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTHCANftiAAErzSizI8c299.png"
            },

            {
              name: "高端定制耳机",
              title: "【预约专用】私人定制，为你而声",
              price: 200,
              img:
                "https://fms.res.meizu.com/dms/2019/10/23/370ad36f-425c-453a-b406-ccb2a0dffeec.jpg"
            },
            {
              name: "魅族EP21耳机",
              title: "三键一体式线控|3.5mm接口",
              price: 39,
              img: "https://storeimg.meizu.com/product/1449643421-24522.png"
            },
            {
              name: "魅族LIVE四单元动铁耳机",
              title: "Knowles四动铁双通道导音系统现场级音乐表现",
              price: 1099,
              img:
                "https://openfile.meizu.com/group1/M00/02/EF/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png"
            },
            {
              name: "魅族HALO激光蓝牙耳机",
              title: "炫酷夜跑神器随性张扬",
              price: 499,
              img:
                "https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png"
            }
          ]
        },
        {
          hostname: "智能配件",
          hostimg:
            "https://fms.res.meizu.com/dms/2020/05/08/b52a082f-6157-492f-b79c-59868f880ebe.jpg",
          lists: [
            {
              name: "Pandaer[17]系列手机毒",
              title: "Pandaer 家族|潮趣个性|官方适配入",
              price: 49,
              img:
                "https://fms.res.meizu.com/dms/2020/05/13/6ae5ad1c-de3d-437d-a6d2-a2b2a6c942c9.jpg"
            },
            {
              name: "魅族超充GaN 三口充电器",
              title: "GaN芯片|65W MAX功率|三口输出|安全小巧",
              price: 199,
              img:
                "https://openfile.meizu.com/group1/M00/07/D7/Cgbj0F67s3yAYmI6AAIrMK1gFWU758.png"
            },
            {
              name: "魅族超充USB-C移动电源",
              title: "USB-C双向超充|22.5W大功率|数字电量显示",
              price: 169,
              img:
                "https://openfile.meizu.com/group1/M00/07/D4/Cgbj0F64-fCANzfvAAMAQSi_H7U780.png"
            },
            {
              name: "魅族17系列液态硅胶壳",
              title: "魅族17/17 Pro适用|魅族手感|柔韧保护",
              price: 89,
              img:
                "https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7ouAdDUlAAgE_65zxx0628.png"
            },

            {
              name: "快充电源适配器（UP0830S）",
              title: "快速充电安全无忧",
              price: 69,
              img:
                "https://fms.res.meizu.com/dms/2020/05/08/eb91bbe8-2eaf-4486-adf2-6d91d6f0b7dd.jpg"
            },
            {
              name: "魅族双USB-C快充线",
              title: "双USB-C接口|5A大电流|耐磨编织材料|E-Marker芯片",
              price: 49,
              img:
                "https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png"
            },
            {
              name: "魅族中国红Type-C金属编织线",
              title: "Type-C接口|3A大电流|耐磨编织材料",
              price: 39,
              img:
                "https://openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png"
            },
            {
              name: "魅族Type-C游戏专用线",
              title: "Type-C接口|5A大电流|弯头专为游戏设计|耐磨编织材料",
              price: 69,
              img:
                "https://openfile.meizu.com/group1/M00/07/AB/Cgbj0F5u8euASZyLAAcq4oEH89w043.png"
            },

            {
              name: "魅族无线充电器",
              title: "10W快速充电无线即放即充",
              price: 99,
              img:
                "https://fms.res.meizu.com/dms/2020/03/13/c077f533-0173-420c-9c61-5a9ab70ffa2f.jpg"
            },
            {
              name: "魅族Type-C数据线",
              title: "5A大电流|Type-C接口|更快更方便",
              price: 49,
              img:
                "https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png"
            },
            {
              name: "Lifeme PD快充线",
              title:
                "USB-C转Lightning |MFi认证|3A大电流|PD快充|兼容大部分苹果设备",
              price: 69,
              img:
                "https://openfile.meizu.com/group1/M00/07/F8/Cgbj0V7Qy2mAVnM6AARv0cdv8JI919.png"
            },
            {
              name: "魅族移动电源3",
              title: "10000mAh|18W双向快充|12重安全防护",
              price: 79,
              img:
                "https://openfile.meizu.com/group1/M00/06/BD/Cgbj0FvJjK6AAcw8AAPKzUsctEA769.png"
            }
          ]
        },{
          hostname:"生活周边",
          hostimg:"https://fms.res.meizu.com/dms/2020/05/08/1ebe92fe-d7e5-4457-a0cd-219e902f5552.jpg",
          lists:[
            {
              name:"Pandaer[17]系列T恤",
              title:"潮酷印花1丝绸手感|100%长绒棉",
              price:"269",
              img:"https://fms.res.meizu.com/dms/2020/06/10/cbc2e361-1ca4-4c88-b8d3-45dbef49594f.jpg"
            },
            {
              name: "Pandaer[17]系列果冻包",
              title:"潮酷印花|超大容量|透亮设计",
              price:"99",
              img:"https://openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png"
            },
            {
              name: "Lifeme 相机包",
              title:"相机包新搭配|一机两镜超大容量加厚防冲击材料",
              price:"129",
              img:"https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png"
            },
            {
              name: "魅族防飞溅声波电动牙刷",
              title:"智能压感防飞溅|超强震动清洁|FDA杜邦软毛",
              price:"299",
              img:"https://openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png"
            },
             {
              name: "魅族极简都双肩包",
              title:"人体工学减负设计1大容量多能收纳",
              price:"179",
              img:"https://fms.res.meizu.com/dms/2020/03/21/830455a0-369d-4ddc-84c6-d45fe8d8454f.jpg"
            },
            {
              name: "Pandaer readnap T恤",
              title:"潮趣设计|100%精织纯棉|多重潮流工艺",
              price:"199",
              img:"https://openfile.meizu.com/group1/M00/07/66/Cgbj0V1mIcGAfsr1AAyHfC16kLQ799.png"
            },
            {
              name :"Flyme 8暗夜流光卫衣",
              title:"Flyme原创|镭射材料|随光而动|暗夜微光",
              price:"269",
              img:"https://openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yXrSAaUXKAA7Db1JnKHs624.png"
            },
            {
              name: "Pandaer 魔术师帽衫",
              title:"Magic Pandaer前卫设计|潮流款式挺括有型",
              price:"399",
              img:"https://openfile.meizu.com/group1/M00/07/7C/Cgbj0V2vva6AOk-vAAuUyJ3QsAo839.png"
            },
             {
              name: "Lifeme梨木伞",
              title:"|隔绝99%UV|进口环保拒水涂层|千足纯银徽章",
              price:"499",
              img:"https://fms.res.meizu.com/dms/2020/03/21/c9ab3718-b903-45b7-a51f-d916e17d4edb.jpg"
            },
            {
              name: "Pandaer 鼠年圆领卫衣",
              title:"金鼠限定/优质棉料/挺括亲肤/保暖舒适",
              price:"199",
              img:"https://openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4CyAapL_AAZDZGCy0nE802.jpg"
            },
            {
              name: "2020福来我发新春大礼盒",
              title:"Flyme原创设计鼠年春节套装复古潮流日礼包",
              price:"¥488",
              img:"https://openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4YaALZSJAAdI8KKxN_E650.png"
            },
            {
              name: "魅族声波电动牙刷刷头",
              title:"【两支装】进口杜邦刷毛1立体裁切贴合牙齿牙龈",
              price:"59",
              img:"https://openfile.meizu.com/group1/M00/07/CC/Cgbj0V6QOw6AHzmiAAKiIJSP6zc896.png"
            },
          ]
        }
      ],
      posts:[
          {
            img:"https://fms.res.meizu.com/dms/2020/05/28/fda8c8cb-6dd5-4fca-8c64-fdc6a07123a8.png",
            headphoto:"https://img-res.mzres.com/img/download/uc/12/46/00/30/00/1246003/w100h100?t=1593239746",
            username:"frankm8fans", 
            does:    "魅族17Pro定白率先上手体验，第一感觉就是，这很魅族！",
            nameT:   "魅族17Pro",
          },
            {
            img:"https://fms.res.meizu.com/dms/2020/05/28/42b2c0bf-f5b0-4f0f-9023-3df3d10a0662.png",
            headphoto:"https://img-res.mzres.com/img/download/uc/58/35/18/00/00/583518/w100h100?t=1593239746",
            username:"grayfox77", 
            does:    "不只是颜值出众，可谓是秀外慧中。",
            nameT:   "魅族17",
          },
          {
            img:"https://fms.res.meizu.com/dms/2020/05/28/40f14166-72e1-40c3-a816-1b44a05ca270.png",
            headphoto:"https://img-res.mzres.com/img/download/uc/14/52/97/69/00/14529769/w100h100?t=1593239746",
            username:"明阳之新", 
            does:    "现在大家对手机拍照质量的需求越来越高，最受关注的就是焦段与画质。",
            nameT:   "魅族17Pro 摄影作品",
          },
          {
            img:"https://fms.res.meizu.com/dms/2020/05/28/97540b0b-9fb2-45e1-bbec-2a250c64a696.png",
            headphoto:"http://img5.imgtn.bdimg.com/it/u=2745483551,130647108&fm=26&gp=0.jpg",
            username:"frankm8fans", 
            does:    "魅族17 Pro 6400W全场景AR 专业影像系统体验。",
            nameT:   "魅族17Pro摄影作品",
          },
          {
            img:"https://fms.res.meizu.com/dms/2020/05/28/444b1da7-072a-4a3a-9fc5-8bafb630ccfd.png",
            headphoto:"https://img-res.mzres.com/img/download/uc/13/28/97/03/00/13289703/w100h100?t=1593239746",
            username:"小宇先森08", 
            does:    "魅族17微距摄影，灵动绚烂。",
            nameT:   "魅族17摄影作品",
          },
          {
            img:"https://fms.res.meizu.com/dms/2020/05/28/d5ad3a0d-ead8-4c65-a517-84de313c1b4e.png",
            headphoto:"https://img-res.mzres.com/img/download/uc/11/90/25/05/60/119025056/w100h100?t=1593239746",
            username:"我是魅之神", 
            does:    "多一点耐心，多一点发现，多一点想象，去留意身边风景。",
            nameT:   "魅族17 Pro 摄影作品",
          },
          {
            img:"https://fms.res.meizu.com/dms/2020/05/28/ab66ca73-8431-4ba4-9189-e4708f88eda3.png",
            headphoto:"http://img5.imgtn.bdimg.com/it/u=3063746130,4048532745&fm=11&gp=0.jpg",
            username:"一叶会", 
            does:    "魅族17Pro手持超级夜景实拍，镜头里的夜色如此美妙。",
            nameT:   "魅族17Pro摄影作品",
          },
          {
            img:"https://fms.res.meizu.com/dms/2020/05/28/17ce9018-4516-494c-a112-cd0529249396.png",
            headphoto:"https://img-res.mzres.com/img/download/uc/14/52/97/69/00/14529769/w100h100?t=1593239746",
            username:"明日之新", 
            does:    "陪你一路风光陪你一起风光！",
            nameT:   "魅族情怀",
          },
      ],
      flyme:[
        {img:"https://fms.res.meizu.com/dms/2019/10/25/548670c7-a4c2-4510-b4d5-daf36799905c.png",p:"魅族成为三大运营商5G战略合作伙伴"},
        {img:"https://fms.res.meizu.com/dms/2019/10/25/9f881cfe-a9e7-465c-a88d-5fca2ba02d8d.jpg",p:"Hello 5G"},
        {img:"https://fms.res.meizu.com/dms/2020/05/27/9195db7f-9958-4ae0-90ea-740e8d024989.png",p:"全面提升续航能力"},
        {img:"https://fms.res.meizu.com/dms/2019/10/25/369f2068-b5d4-40cc-a706-eaf40026ec7c.jpg",p:"图库新功能"},
        {img:"https://fms.res.meizu.com/dms/2019/10/25/59b8ff86-88ae-4d5d-96fa-f6a04badbc5b.jpg",p:"文档校正模式"},
        {img:"https://fms.res.meizu.com/dms/2020/05/29/9b7b5115-0377-4847-a5d3-af72ffed96e3.jpg",p:"产品建议解答"},
      ],
      videos:[
        {
          img:"https://fms.res.meizu.com/dms/2020/05/08/cfbb2d92-8c02-43ca-b91e-fb90d8c2b57d.jpg",
          ptitle:"以梦为舰，热爱起航：魅族17航母限定版",
        },
         {
          img:"https://fms.res.meizu.com/dms/2020/05/08/726e64a2-e5ea-4102-92c7-2f11b0d0176a.jpg",
          ptitle:"这艺术，科技极了：魅族17Pro 晓芳窑艺",
        },
         {
          img:"https://fms.res.meizu.com/dms/2020/05/08/21f8c68f-63b4-4b6a-99cc-218ab3462fbb.jpg",
          ptitle:"去噪，去躁：魅族HD60降噪耳机玩",
        },
         {
          img:"https://fms.res.meizu.com/dms/2019/10/23/e598a95b-42e4-48ed-a48a-2e57c1127812.jpg",
          ptitle:"出我的热爱：魅族16T大屏娱乐旗舰",
        },
         {
          img:"https://fms.res.meizu.com/dms/2019/10/22/cfe6f26c-f28e-4aa3-93bf-18f06977ad44.jpg",
          ptitle:"Flyme8概念视频",
        },
         {
          img:"https://fms.res.meizu.com/dms/2019/10/22/c25ae0b3-95ab-4ed1-99b7-9e269f4876af.jpg",
          ptitle:"Flyme8功能视频",
        },
         {
          img:"https://fms.res.meizu.com/dms/2019/10/22/51368a34-9aed-4b7b-b5e8-0ac7a665de35.jpg",
          ptitle:"Aicy",
        },
         {
          img:"https://fms.res.meizu.com/dms/2018/11/27/3b75dc9f-7af7-4104-94fa-a384252ef78c.jpg",
          ptitle:"安全家庭",
        },

      ],
      
     
      
    };
  },
  components:{
    bottom,
    top,
  
  },
  mounted() {
    new Swiper(".homecontainer", {
      // spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        stopOnLastSlide: false
      },
      pagination: {
        el: ".homepagination",
        clickable: true,
        dynamicBullets: true
      }
    });
  }
};
</script>

<style lang="scss" scoped>

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.nav {
  // position: relative;
  width: 100%;
 
  .iconfont{
    font-size: 120px;
    position: absolute;
   
  
  }
  .homecontainer {
    width: 100%;

    .yid {
      overflow: hidden;
      width: 100%;
      height: 650px;

      position: relative;
      img {
        position: absolute;
        left: -38%;
        width: 180%;
      }
    }
  }
 
}
.con {
  width: 1204px;
  margin: 0 auto;
}
.swiper-wrapper {
  transition-timing-function: linear !important;
}
.swiper-container {
  width: 100%;
  height: 100%;

  --swiper-pagination-color: #ffffff;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-container .swiper-wrapper {
  -webkit-transition-timing-function: linear; /*之前是ease-out*/
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
}
.bottomLun {
  width: 100%;
  background: #fff;
  padding: 40px 0;
  ul {
   list-style: none;
   
     li{
       float: left;
       width: 299px;
      
      text-align: center;
       img{
         width: 130px;
         height: 130px;
        
       }
       .title{
         padding-top: 20px;
         font-size: 20px;
         color: #333;
        
       }
       .represent{
         margin-top: 10px;
         font-size:14px;
         color: #9999;
       }

     }
    
    
  }
}
h3 {
  background: #f4f4f4;
  padding-top: 80px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
}
.photo {
  display: block;
  width: 100%;
  height: 450px;

  overflow: hidden;
  background: url("https://fms.res.meizu.com/dms/2020/06/10/b7b7ca15-fe03-4d1d-a1da-aedecc9ca556.jpg")
    no-repeat center center;
}
.index-center-wrapper {
  background: #f4f4f4;
  ul {
    list-style: none;
    li {
      padding-top: 50px;
      display: inline-block;
      margin-bottom: 10px;
    }

    .big1 {
      position: relative;
      text-align: center;
      width: 597px;
      margin-right: 10px;
      background: #fff;
      //  display: inline-block;
      &:nth-child(2) {
        margin-right: 0;
      }
      p {
        position: absolute;
        border-radius: 50%;
        padding: 10px;
        background: #ff4873;
        color: #fff;
        top: 20px;
        left: 10px;
        width: 38px;
        height: 38px;
        text-align: center;
        line-height: 38px;
      }
      .name  {
        font-size: 28px;
        color: #333;
      }
      .title {
        letter-spacing: 1px;
        font-size: 18px;
        color: #333;
        margin: 5px 0;
      }
      .price {
        i {
          font-style: normal;
          font-size: 18px;
        }
        color: #cc0000;
        font-size: 22px;
      }
      .img {
        img {
          width: 460px;
        }
      }
    }
    .photoimg {
      width: 294px;
      text-align: center;
      background: #fff;
      margin-right: 9px;
      padding-bottom: 30px;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 220px;
      }
      .name {
        font-size: 16px;
        color: #333;
      }
      .does {
        font-size: 14px;
        color: #999;
        margin: 5px 0;
      }
      .price {
        i {
          font-style: normal;
          font-size: 18px;
        }
        font-size: 20px;
        color: #cc0000;
      }
    }
  }
}
.goodlist {
  width: 100%;
  background: #f4f4f4;

  .goodphoto {
    width: 100%;
    background: #f4f4f4;
    margin-bottom: 5px;

    a {
      position: relative;
      display: block;
      width: 100%;
      height: 450px;
      overflow: hidden;
      img {
        position: absolute;
        width: 168%;
        left: -33%;
      }
    }
  }
  .goodbox {
    background: #f4f4f4;

    ul {
      background: #f4f4f4;
      list-style: none;
      li {
        position: relative;
        width: 293px;
        height: 365px;
        background: #fff;
        float: left;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        //  border: 1px solid red;
        text-align: center;
        &:nth-child(4n + 1) {
          margin-left: 0px;
          img {
            width: 100%;
            height: 100%;
            margin: 0;
          }
          span {
            display: block;
            text-align: center;
            padding-left: 15px;
            padding-right: 15px;
            p {
              margin: 6px 0;
            }
            .name {
              font-size: 21px;
              color: #fff;
            }
            .title {
              font-size: 14px;
              color: #fff;
            }
            .price {
              color: #f1904a;
              font-size: 24px;
              margin-left: 0;
              i {
                font-size: 22px;
              }
            }
          }
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
          img {
            width: 230px;
            width: 230px;
            margin: 30px 0 0;
          }
          span {
            position: absolute;
            top: 260px;
            left: 0;
            padding-left: 20px;
            padding-right: 20px;
         

            p {
              display: block;
              width: 250px;
              margin: 0 auto;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin: 10px 0;
            }
            .name {
              color: #333;
              font-size: 16px;
              margin: 0 0 2px;
            }
            .title {
              color: #999;
              font-size: 14px;
            }
            .price {
              i {
                color: #cc0000;
              }
              color: #cc0000;
              font-size: 22px;
            }
          }
        }
      }
    }
  }
}
.hotPost{
  width: 100%;
   .posts{
     background:rgb(244,244,244);
     ul{
     background:rgb(244,244,244);
       li{
         background: #fff;
         width: 293px;
         margin-left: 10px;
         float: left;
         height: 378px;
         margin-bottom: 10px;
         
         &:nth-child(4n+1){
           margin-left: 0;
         }
         a{
           display: block;
         
            
           img{
             width: 100%;
           }
           .useInfo{
              position: relative;
               padding: 0 15px;
             .headphoto{
               display: inline-block;
               border-radius: 50%;
               overflow: hidden;
               width: 36px;
               height: 36px;
               margin-top: 10px;
             }
             .username{
               position: absolute;
               top: 20px;
               left: 55px;
               color: #515151;
               font-size: 14px;
             
             }
           }
           .does{
              padding: 0 15px;
             height: 60px;
              padding-bottom: 15px;
              padding-top: 10px;
              line-height: 1.8;
             
             color: #515151;
             font-size: 16px;
           }
           .nameT{
             padding: 0 15px;
             color: #999;
             font-size: 14px;
           }
         }
       }
     }
   }
}
.flyme{
  .flymebox{
    background: rgb(244,244,244);
    ul{
      background: rgb(244,244,244);
      li{
        float: left;
        width: 293px;
        height: 238.2px;
        margin-left: 10px;
        margin-bottom: 10px;
        background: #fff;
        &:nth-child(1){
          width: 596px;
          margin-left: 0;
        }
        &:nth-child(4){
          margin-left: 0;
        }

        
        a{
          img{
            width: 100%;
          }
          p{
            text-align: center;
            padding-top: 10px;
            color: #515151;
            font-size: 16px;
          }
        }
      }
    }
  }
}
.wonderfulVideo{
     background: rgb(244,244,244);

  .videobox{
     background: rgb(244,244,244);
     padding-bottom: 50px;
    ul{
      li{
        position: relative;
        float: left;
        width: 293px;
        height: 238.2px;
        margin-left: 10px;
        margin-bottom: 10px;
        background: #fff;
        &:nth-child(4n+1){
          margin-left: 0;
        }
       i::before{
         display: inline-block;
         position: absolute;
         font-size: 35px;
        color: rgba(255,255,255,0.4);
     
        bottom: 60px;
        right: 5px;
       }
        img{
          width: 100%;
        }
        p{
           text-align: center;
            padding-top: 10px;
            color: #515151;
            font-size: 16px;
        }

      }
    }
  }
}

</style>
