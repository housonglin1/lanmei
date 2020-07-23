<template>
    <div>
        <div class="box">

            <h2>为您推荐</h2>
                <!-- Swiper -->
                <div class="swiper-container">
                    <div class="swiper-wrapper " >
                        <div class="swiper-slide " v-for="(item,index) in remons " :key="item+index">
                            <div class="remos" >
                                <ul  class="con">
                                    <li v-for="(value,num) in item" :key="value+num" @click="$router.push('details')">
                                        <a href="javascript:;">
                                            <img :src="value.img" alt="">
                                            <p class="name">{{value.name}}</p>
                                            <p class="price"><i>￥</i>{{value.price}}</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                    
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>

            
        </div>
           

    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        data(){
            return{
                remons:[
                    [
                        {name:"魅族16T",price:"1999",img:'https://openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png@480x480.jpg'},
                        {name:"魅族16Xs",price:"1499",img:'https://openfile.meizu.com/group1/M00/07/44/Cgbj0VzvRJ-AWr44AAiGUPbS22w583.png@480x480.jpg'},
                        {name:"魅族Note9",price:"1399",img:'https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg'},
                        {name:"魅族POP2真无线蓝牙耳机",price:"399",img:'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg'},
                       
                    ],
                    [
                        {name:"魅族POP2真无线蓝牙耳机",price:'399',img:"https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg"},
                        {name:"魅族中国红Type-C金属编织线",price:'39',img:"https://openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png@480x480.jpg"},
                        {name:"魅族移动电源3",price:'79',img:"https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvJjKeATLxsAAF7_uDseks390.png@480x480.jpg"},
                        {name:"魅族EP3C耳机",price:'129',img:"https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg"},

                    ],
                      [
                        {name:"魅族中国红Type-C金属编织线",price:'39',img:"https://openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png@480x480.jpg"},
                        {name:"魅族移动电源3",price:'79',img:"https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvJjKeATLxsAAF7_uDseks390.png@480x480.jpg"},
                        {name:"魅族EP3C耳机",price:'129',img:"https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg"},
                        {name:"魅族HIFI解码耳放",price:'169',img:"https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg"},

                    ],
                    
                
                ]
            }
        },
        mounted(){
            new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
                });
        }
    }
</script>

<style lang="scss" scoped>
h2{
    padding: 90px 0 25px;
    width: 1240px;
    margin: 0 auto;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
}
.box{
    background: #f4f4f4;
}
.con{
    width: 1240px;
    margin: 0 auto;
}

 .swiper-container {
    
      width: 100%;
      height: 100%;
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


.remos{
    
    background: #f4f4f4;
   
    ul{
        list-style: none;
        background: #ffff;
        // width: 1240px;
        // border: 1px solid red;
        li{
              padding: 40px 0 44px;
             background: #ffff;
            float: left;
            width: 310px;
            height: 410px;
            a{
                img{
                    width: 230px;
                    
                }
                .name{
                    color: #666;
                    margin-bottom: 15px;
                }
                .price{
                    color: #CC0000;
                    font-size: 24px;
                    i{
                        font-style: normal;
                    }
                }

            }
        }
    }

}
.swiper-pagination{
    background: #f4f4f4;
    padding: 30px 0;
}
</style>