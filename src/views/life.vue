<template>
    <div>
        <goodlist :goodlist="life"  :img="img" :name="name"></goodlist>
    </div>
</template>

<script>
import goodlist from "../components/public/list"
    export default {
        data(){
            return{
                img:"https://openfile.meizu.com/group1/M00/07/EA/Cgbj0V62f86AIEJyAA2ApFFeZ2k604.jpg",
                name:"生活周边",
                life:[
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png@480x480.jpg',
                            name: 'Lifeme 双肩包',
                            does: '【限时领40元券】创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭 配',
                            price: '299'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png@480x480.jpg',
                            name: 'Pandaer 「17」系列 T恤',
                            does: '【限时领120元券】潮酷印花 | 丝绸手感 | 100％长绒棉',
                            price: '269'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/E7/Cgbj0V61KNCAUduZAAqsAnm8x-0400.png@480x480.jpg',
                            name: 'Pandaer 「17」系列 果冻包',
                            does: '潮酷印花 | 超大容量 | 透亮设计',
                            price: '99'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z74aAO--aAAYHfnMzL1U910.png@480x480.jpg',
                            name: 'Lifeme 相机包',
                            does: '相机包新搭配 | 一机两镜超大容量 | 加厚防冲击材料',
                            price: '129'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png@480x480.jpg',
                            name: '魅族防飞溅声波电动牙刷',
                            does: '智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全   面呵护 ',
                            price: '299'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png@480x480.jpg',
                            name: '魅族极简都市双肩包',
                            does: '【APP超值砍价低至119元】650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅',        
                            price: '179'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/66/Cgbj0V1mIcGAfsr1AAyHfC16kLQ799.png@480x480.jpg',
                            name: 'Pandaer readnap T恤',
                            does: '潮趣设计 | 100％精织纯棉 | 多重潮流工艺 | Mixcolor混色搭配 | 情侣装',
                            price: '199'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/7C/Cgbj0V2vva6AOk-vAAuUyJ3QsAo839.png@480x480.jpg',
                            name: 'Pandaer 魔术师帽衫',
                            does: 'Magic Pandaer前卫设计 | 100％精梳棉纱 | 潮流款式 挺括有型 | 亲肤内衬 柔顺舒适 | 情侣装',
                            price: '399'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yXrSAaUXKAA7Db1JnKHs624.png@480x480.jpg',
                            name: 'Flyme 8 暗夜流光卫衣',
                            does: 'Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光 | 点亮梦想 |  情侣装',
                            price: '269'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2T6AK4g2AAV30_p6ODA499.png@480x480.jpg',
                            name: 'Lifeme 梨木伞',
                            does: '【APP超值砍价低至389元】高定时装压花伞布 | 隔绝99% UV | 进口环保拒水涂层 | 8骨静音防风伞架 | 千足纯银 徽章 | 优质花梨木伞柄',
                            price: '499'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yXrSAaUXKAA7Db1JnKHs624.png@480x480.jpg',
                            name: '【Flyme 8周年】-Flyme 8 暗夜流光卫衣',
                            does: 'Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光 | 点亮梦想 |  情侣装',
                            price: '269'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/7C/Cgbj0V2vva6AOk-vAAuUyJ3QsAo839.png@480x480.jpg',
                            name: '【Flyme 8周年】-Pandaer 魔术师帽衫',
                            does: 'Magic Pandaer前卫设计 | 100％精梳棉纱 | 潮流款式 挺括有型 | 亲肤内衬 柔顺舒适 | 情侣装',
                            price: '399'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png@480x480.jpg',
                            name: '【APP限时抢购】-魅族极简都市双肩包',
                            does: '650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅',
                            price: '179'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4CyAapL_AAZDZGCy0nE802.jpg@480x480.jpg',
                            name: 'Pandaer 鼠年圆领卫衣',
                            does: '【珍稀现货】金鼠限定/ 优质棉料 / 挺括亲肤 / 保暖舒适 / 情侣装',
                            price: '199'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png@480x480.jpg',
                            name: '【Flyme 8周年】-魅族防飞溅声波电动牙刷',
                            does: '智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全  面呵护 ',
                            price: '299'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/DF/Cgbj0V6z7uiAJMl5AA7x6BjMe3s567.png@480x480.jpg',
                            name: '【Flyme 8周年】-Lifeme 双肩包',
                            does: '创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭配',
                            price: '299'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/DD/Cgbj0V6z7k-AUrRgAAQ7fTJQLLI525.png@480x480.jpg',
                            name: '【Flyme 8周年】-Pandaer 「17」系列 T恤',
                            does: '潮酷印花 | 丝绸手感 | 100％长绒棉',
                            price: '269'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/91/Cgbj0F4X4YaALZSJAAdI8KKxN_E650.png@480x480.jpg',
                            name: '2020福来我发新春大礼盒',
                            does: 'Flyme 原创设计/ 鼠年春节套装 / 复古潮流 / 棒球衫 / 怀旧礼包 / 情侣装',
                            price: '488'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/2A/Cgbj0FzvONaAARlRAAo8uxn8y20301.png@480x480.jpg',
                            name: '魅族星球探索 帆布袋',
                            does: '星球无限 追求不止',
                            price: '69'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/07/41/Cgbj0VzvODSALJ3OAA3y2fvxTuA532.png@480x480.jpg',
                            name: '魅族星球探索 鼠标垫',
                            does: '星球无限 追求不止',
                            price: '69'
                        },
                        {
                            img: 'https://openfile.meizu.com/group1/M00/01/3A/CnQOjVjJ-m2AQ1LxAAE3Ze4d72s837.png@480x480.jpg',
                            name: '魅族 Mini 线控自拍杆',
                            does: '轻巧迷你 自在随心',
                            price: '59'
                        },
                        // {
                        //     img: 'https://storeimg.meizu.com/product/1465698264-58364.jpg@480x480.jpg',
                        //     name: '魅族路由器 极速版',
                        //     does: '天生不凡 快狠稳',
                        //     price: '199'
                        // }
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