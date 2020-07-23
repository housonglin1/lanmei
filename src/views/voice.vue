<template>
    <div>
        <goodlist :goodlist="voice" :name="name" :img="img"></goodlist>
    </div>
</template>

<script>
import goodlist from '../components/public/list'
    export default {
        data(){
            return{
                    img:"https://openfile.meizu.com/group1/M00/07/EA/Cgbj0V62dEyAFdDYAAxkAIkeh2E092.jpg",
                     name:"声学",
                    voice:[
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png@480x480.jpg',
                                name: '魅族 HD60 降噪耳机',
                                does: '索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质',
                                price: '1099'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg',
                                name: '魅族 POP2 真无线蓝牙耳机',
                                does: '蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
                                price: '399'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg',
                                name: '魅族 HIFI 解码耳放',
                                does: '高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐发烧友必备',
                                price: '169'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg',
                                name: '魅族 EP3C 耳机',
                                does: 'Hi-Res 认证高解析音质 | Type-C数字接口 | 高保真生物纤维振膜',
                                price: '129'
                            },
                            {
                                img: '//openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png@480x480.jpg',
                                name: '魅族 EP63NC 无线降噪耳机',
                                does: 'AMS 芯片智能降噪 | Qualcomm apt-X™ 高清音质 | 蓝牙一拖二连接 | 11小时超长续航 | 快充15分钟畅听3小时',  
                                price: '399'
                            },
                            {
                                img: '//openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png@480x480.jpg',
                                name: '魅族 HD60 头戴式蓝牙耳机',
                                does: '【APP超值砍价低至399元】40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质',
                                price: '499'
                            },
                            {
                                img: 'https://storeimg.meizu.com/product/1449643421-24522.png@480x480.jpg',
                                name: '魅族 EP21耳机',
                                does: '三键一体式线控 | 3.5mm接口 ',
                                price: '39'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@480x480.jpg',
                                name: '魅族 HALO 激光蓝牙耳机',
                                does: '炫酷夜跑神器 随性张扬',
                                price: '499'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg',
                                name: '魅族 EP52 Lite 蓝牙耳机',
                                does: '【APP超值砍价低至95元】轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
                                price: '129'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/4C/Cgbj0F1l4LyAR44oAAJKhE-uRA8619.png@480x480.jpg',
                                name: '魅族 HiFi 解码耳放 PRO',
                                does: '性能DAC芯片 | 超强二级运放 | Hi-Res 认证高解析音质 | 高阻抗推力 | Type-C转接线',
                                price: '269'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/02/EF/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png@480x480.jpg',
                                name: '魅族 LIVE 四单元动铁耳机',
                                does: 'Knowles四动铁 双通道导音系统 现场级音乐表现',
                                price: '1099'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/4D/Cgbj0F1l7zeAFyLsAAZJk_cF8Tk126.png@480x480.jpg',
                                name: 'MEIZU UR 高端定制耳机  预约',
                                does: '【预约专用】私人定制，为你而声',
                                price: '200'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTHCANftiAAErzSizI8c299.png@480x480.jpg',
                                name: '魅族 EP2X 耳机',
                                does: '一体式线控 | 3.5mm接口 | 流线设计',
                                price: '69'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg',
                                name: '【APP超值砍价】-魅族 EP52 Lite 蓝牙耳机',
                                does: '轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
                                price: '129'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg',
                                name: '【Flyme 8周年】-魅族 EP3C 耳机',
                                does: 'Hi-Res 认证高解析音质 | Type-C数字接口 | 高保真生物纤维振膜',
                                price: '129'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg',
                                name: '【Flyme 8周年】-魅族 HIFI 解码耳放',
                                does: '高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐发烧友必备',
                                price: '169'
                            },
                           
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg',
                                name: '【Flyme 8周年】-魅族 POP2 真无线蓝牙耳机',
                                does: '蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
                                price: '399'
                            },
                           
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png@480x480.jpg',
                                name: '【Flyme 8周年】-魅族 POP2 真无线蓝牙耳机',
                                does: '蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
                                price: '399'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/E0/Cgbj0V6z8VSAV6kEAAlCc-omYno614.png@480x480.jpg',
                                name: '【Flyme 8周年】-魅族 HD60 降噪耳机',
                                does: '索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质',
                                price: '1099'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/29/Cgbj0FzvN5eAOhF_AAG4VJC6XfM942.png@480x480.jpg',
                                name: '魅族 EP2C 耳机',
                                does: '钕铁硼单元 Type-C接口',
                                price: '129'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/06/70/Cgbj0FuZwuGADzVHAAG7wQGHkAM447.png@480x480.jpg',
                                name: '魅族蓝牙音频接收器',
                                does: '独立音频芯片 | 一键控制 | 6小时续航 | 轻巧设计',
                                price: '89'
                            }
                        ]
            }
        },
        components:{
           goodlist 
        }
    }
</script>

<style lang="scss" scoped>

</style>