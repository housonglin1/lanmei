export default[
    {
        path:"/",
        redirect:'/merchant/orderlist/orderAll'
    },
    {
    path:"/merchant",
    name:"商城",
    component:()=>import("../../views/merchant.vue"),
    children:[
          
          
           {
            path:"orderlist",
            name:"订单列表",
            component:()=>import("../../components/order/orderlist.vue"),
            children:[
                // {
                //     path:"/",
                //     redirect:'/merchant/orderlist/orderAll'
                // },
                {
                    path:"orderAll",
                    name:"所有订单",
                    component:()=>import("../../components/order/orderAll.vue"),
                },
                {
                    path:"orderPay",
                    name:"待付款",
                    component:()=>import("../../components/order/orderPay.vue"),
                },
                // {
                //     path:"orderFire",
                //     name:"待发货",
                //     component:()=>import("../../components/order/orderFire.vue"),
                // },
                {
                    path:"orderGoods",
                    name:"待收货",
                    component:()=>import("../../components/order/orderGoods.vue"),
                },
                {
                    path:"orderEnd",
                    name:"待评价",
                    component:()=>import("../../components/order/orderEnd.vue"),
                }
            ]

        },
        // {
        //     path:"refund",
        //     name:"退款列表",
        //     component:()=>import("../../components/public/refund.vue"),
        // } ,
        {
            path:"address",
            name:"地址列表",
            component:()=>import("../../components/public/address.vue"),
        } ,
        {
            path:"favorite",
            name:"收藏页面",
            component:()=>import("../../components/public/favorite.vue"),
        } ,
        {
            path:"my",
            name:"个人中心",
            component:()=>import("../../components/public/my.vue"),
        } ,
        {
            path:"proposal",
            name:"建议反馈",
            component:()=>import("../../components/public/proposal.vue"),
        } ,
    ],
    
  }
]