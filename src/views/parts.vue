<template>
    <div>
        <goodlist :goodlist="parts"  :img="img" :name="name"></goodlist>
    </div>
</template>

<script>
import goodlist from "../components/public/list"
    export default {
        data(){
            return{
                img:"https://openfile.meizu.com/group1/M00/07/D4/Cgbj0F62dEqAbj_DAANcU84ItMs821.jpg",
                name:"配件",
                parts:[
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/CA/Cgbj0F6z76aADIfNAAS8Gxwx2NE353.png@480x480.jpg',
                                name: '魅族无线超充板',
                                does: '魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
                                price: '169'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/C7/Cgbj0F6z7g-AHZCvAA2-5hsWdy8902.png@480x480.jpg',
                                name: 'Pandaer 「17」系列 手机壳',
                                does: '魅族 17 / 魅族 17 Pro 适用 | Pandaer 家族 | 潮趣个性 | 官方适配',
                                price: '49'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7ouAZZHfAAOjT25wD7w249.png@480x480.jpg',
                                name: '魅族 17 系列 液态硅胶壳',
                                does: '魅族 17 / 魅族 17 Pro 适用 | 官方适配 | 魅族手感 | 柔韧保护',
                                price: '89'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png@480x480.jpg',
                                name: '魅族 Type-C 数据线',
                                does: '5A 大电流 | Type-C 接口 | 更快更方便',
                                price: '49'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/AB/Cgbj0F5u8euASZyLAAcq4oEH89w043.png@480x480.jpg',
                                name: '魅族 Type-C 游戏专用线',
                                does: 'Type-C 接口 | 5A大电流 | 弯头专为游戏设计 | 耐磨编织材料',
                                price: '49'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png@480x480.jpg',
                                name: '魅族中国红 Type-C 金属编织线',
                                does: 'Type-C 接口 | 3A大电流 | 耐磨编织材料',
                                price: '39'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/06/BD/Cgbj0FvJjK6AAcw8AAPKzUsctEA769.png@480x480.jpg',
                                name: '魅族移动电源3',
                                does: '10000mAh | 18W双向快充 | 12重安全防护',
                                price: '79'
                            },
                            {
                                img: 'https://storeimg.meizu.com/product/1467170145-52479.png@480x480.jpg',
                                name: '快充电源适配器（UP0830S）',
                                does: '快速充电 安全无忧',
                                price: '69'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png@480x480.jpg',
                                name: '魅族无线充电器',
                                does: '10W快速充电 无线即放即充',
                                price: '99'
                            },
                            {
                                img: 'https://storeimg.meizu.com/product/1458617159-29477.png@480x480.jpg',
                                name: '魅族 Micro USB 数据线',
                                does: '广泛兼容各大品牌Micro USB接口手机 | 经久耐用 ',
                                price: '29'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/64/Cgbj0F2uq9aAXMT6AAcqvIHVuH4818.png@480x480.jpg',
                                name: '魅族 16T 亲肤壳膜套装',
                                does: '亲肤亲近，安全防护',
                                price: '39'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png@480x480.jpg',
                                name: '魅族双 USB-C 快充线',
                                does: '【新款数据线】双 USB-C 接口 | 5A 大电流 | 耐磨编织材料 | E-Marker 芯片',
                                price: '49'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/F8/Cgbj0V7Qy2mAVnM6AARv0cdv8JI919.png@480x480.jpg',
                                name: 'Lifeme PD 快充线',
                                does: 'USB-C 转 Lightning | MFi 认证 | 3A 大电流 | PD 快充 | 兼容大部分苹果设备',
                                price: '69'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/D4/Cgbj0F64-fCANzfvAAMAQSi_H7U780.png@480x480.jpg',
                                name: '魅族超充 USB-C 移动电源',
                                does: '【即将发售】USB-C 双向超充 | 22.5W 大功率 | 数字电量显示 | 多快充协议支持',
                                price: '169'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/07/D7/Cgbj0F67s3yAYmI6AAIrMK1gFWU758.png@480x480.jpg',
                                name: '魅族超充 GaN 三口充电器',
                                does: '65W MAX功率输出 | GaN 芯片 | 安全小巧 | 三口输出',
                                price: '199'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/06/EE/Cgbj0VwRr8OAK0BlAApiHfXlhQA575.png@480x480.jpg',
                                name: '魅族 V8 高配版高透保护膜',
                                does: '高透光率 助双眼捕捉每一颗像素的色彩',
                                price: '19'
                            },
                            {
                                img: 'https://openfile.meizu.com/group1/M00/06/DF/Cgbj0FwRr8uAZTsVAAhGUe23fjs268.png@480x480.jpg',
                                name: '魅族 X8 高透保护膜',
                                does: '【限时包邮】高透光率 助双眼捕捉每一颗像素的色彩',
                                price: '19'
                            },
                            {
                                img: 'https://storeimg.meizu.com/product/1467363452-36956.png@480x480.jpg',
                                name: '魅族 Micro USB 金属数据线',
                                does: 'USB2.0接口 | 支持2A快速充电 | 尼龙扁线 | 兼容主流安卓手机、平板等设备',
                                price: '29'
                            }
                ]
            }
        },
        components:{
            goodlist,
        }
    }
</script>

<style lang="scss" scoped>

</style>