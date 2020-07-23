<template>
    <div>
        <goodlist :goodlist="photo" :name="name" :img="img"></goodlist>
    </div>
</template>

<script>
import goodlist from '../components/public/list'
    export default {
        data(){
            return{
                    img:"https://openfile.meizu.com/group1/M00/07/E9/Cgbj0V62T1OAe8-FAAVDwocKDkA204.jpg",
                     name:"手机",
                     photo: [
                    {
                    name: "魅族17",
                    does: "高通骁龙865+UFS3.1高速闪存|6400W全场景影像系统",
                    price: "3699",
                    img:
                        "https://fms.res.meizu.com/dms/2020/06/10/07e016f7-0de0-4592-8521-7d1aa87f6d90.png"
                    },
                    {
                    name: "魅族17 Pro",
                    does: "高通骁龙865+UFS3.1+LPDDR5|6400W全场景AR 专业影像系统",
                    price: "4299",
                    img:
                        "https://fms.res.meizu.com/dms/2020/06/10/866bec68-019d-41bc-96ad-9d73f260eedb.png"
                    },
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
                    },
                    
                  
                    {
                        img: "https://openfile.meizu.com/group1/M00/07/5F/Cgbj0V1jhtuAa71pAAd3EPLUA9Q862.png@480x480.jpg",
                        name: '魅族 16s Pro',
                        does: '高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄 | 极边全面屏 | Flyme8 尝鲜体验 | 极速屏下指纹 | 全功能NFC',

                        price: '2699'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/07/44/Cgbj0VzvRJ-AWr44AAiGUPbS22w583.png@480x480.jpg",
                        name: '魅族 16Xs',
                        does: '极边全面屏 | 4800W AI三摄 | 疾速屏下指纹 | 4000mAh大电池 | 高通骁龙675 | Onemind 3.0 | 绚丽多彩新色系',    price: '1499'
                    },
                   
                    {
                        img: "https://openfile.meizu.com/group1/M00/07/44/Cgbj0VzvRJ-AWr44AAiGUPbS22w583.png@480x480.jpg",
                        name: '魅族 Note8',
                        does: '骁龙632 | 6.0 英寸全面屏 | 3600mAh 大电池 | mCharge 快充加持 | Dual PD 全像素双核对焦 |人脸指纹双解锁',    price: '899'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/07/44/Cgbj0VzvRJ-AWr44AAiGUPbS22w583.png@480x480.jpg",
                        name: '魅族 16th',
                        does: '骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.0英寸屏幕 | mEngine | 超线性双扬声器 |  铜管散热',     
                        price: '1898'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/07/3F/Cgbj0Vzt9L6AGWGwAA0JvJu7FS0814.png@480x480.jpg",
                        name: '魅族 16s 白夜童话限量礼盒',
                        does: '以梦为马 乘风破浪',
                        price: '3099'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/07/3B/Cgbj0VzaXQqAMN2pAAa47vx50YU413.png@480x480.jpg",
                        name: '魅族 16s',
                        does: '高通骁龙855 | 4800W光学防抖 | 对称式AMOLED全面屏 | 极速屏下指纹 | 全功能NFC ',
                        price: '2399'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg",
                        name: '魅族 Note9',
                        does: '骁龙675 | 后置4800万 | 前置2000万 | 独家定制水滴设计全面屏 | 4000mAh大容量电池 | 18W mCharge快充 ',    
                        price: '1199'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png@480x480.jpg",
                        name: '魅族 X8',
                        does: '骁龙710 | 6.2寸定制浅刘海屏 | 89.6%屏占比 | 旗舰双摄 | 人脸+指纹双解锁',
                        price: '1098'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/06/99/Cgbj0FujMs-AZDb5AA14vDzyhPE669.png@480x480.jpg",
                        name: '魅族 V8 标配版',
                        does: '5.7英寸HD+全面屏 智能美颜',
                        price: '799'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/06/C5/Cgbj0FvRoBuAPurkAAKeRCbcKvM061.png@480x480.jpg",
                        name: '魅族 V8 高配版',
                        does: 'Helio P22 处理器 | 5.7 英寸全面屏 | 后置双摄组合 | 双色温双闪光灯 | 人脸+指纹双解锁',
                        price: '798'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png@480x480.jpg",
                        name: '魅族 16 X',
                        does: '骁龙710 | 屏幕下指纹 | 对称式全面屏 | 前置2000万像素 + AI人脸识别 | 后置索尼2000万像素双摄 + 光学防抖',    price: '1198'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/05/E1/Cgbj0FtqgkWALkhxAAkE5Uiy2no917.png@480x480.jpg",
                        name: '魅族 16th Plus',
                        does: '骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.5英寸屏幕 | 4×4 MIMO 天线 | mEngine | 超线性双扬声器', 
                        price: '2098'
                    },
                   
                    {
                        img: "https://openfile.meizu.com/group1/M00/04/8C/Cgbj0VsM-iyAAgTIAAbXIwKFVL4647.png@480x480.jpg",
                        name: '魅族 15 Plus',
                        does: '三星8895处理器 2000万暗光双摄',
                        price: '1798'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/04/1C/Cgbj0VrcbrCANJBMAAxI8Fi80MA520.png@480x480.jpg",
                        name: '魅族 M15',
                        does: '骁龙626 前置2000万AI智能美颜',
                        price: '1398'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/04/18/Cgbj0VrcbgGACguHAAvWITdUav4636.png@480x480.jpg",
                        name: '魅族 15',
                        does: '骁龙660 | 2000万暗光双摄 | 3倍无损变焦 | mEngine触感引擎 | 立体声扬声器',
                        price: '1498'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/03/BC/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png@480x480.jpg",
                        name: '魅蓝 E3',
                        does: '骁龙636处理器 全系6G大运存',
                        price: '1799'
                    },
                    {
                        img: "https://openfile.meizu.com/group1/M00/02/F3/Cgbj0Fpe-_yAFtuLAAw27mVWra0383.png@480x480.jpg",
                        name: '魅蓝 S6',
                        does: 'Exynos 7872疾速游戏芯片 侧面指纹解锁',
                        price: '999'
                    }

                ],
            }
        },
        components:{
           goodlist 
        }
    }
</script>

<style lang="scss" scoped>

</style>