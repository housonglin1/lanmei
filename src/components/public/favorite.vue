<template>
    <div>
        <!-- 收藏功能 -->
       <div class="favorite">
           <div class="title">已收藏商品</div>
            <div class="favoritebox" v-for="(item,index) in favoritelist" :key="item+index"  >
                         <i class="del"   @click="del(index)"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR42mKcOXMmAxKQB+ItQKzDgB1cA2JvIH4AE2BCU5AOxM+BWBWIldGwChA/BeI0ZA0sQCwKxLxQvhwQvwLif1hs/w+VA6lRgop9BhlwGup0ZBDNgB/A5B+ADFBgoAAgh0EHELtD2dpAvBBJbiFUDARcgLgBmwE6SH4DucoBSc4ByaWgADbBFQsUeWHUAFQASlx1SPw6qBgGYMFhwCss6YCBkAFfgNgAKS3gAiA1X7EZ0AvEK9FzGxYAysoRMA5AgAEA5yUe2G13qzcAAAAASUVORK5CYII=" alt=""></i>
                        <a href="javscript:;">
                            <img :src="item.img" alt="">
                             <div class="name">{{item.name}}</div>
                         </a>
                 
            </div>
            
            
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                favoritelist:[]
            }
        },
        methods:{
            del(index){
                this.favoritelist.splice(index,1)
            }
        },
        created(){
            this.favoritelist=this.$store.state.favorite.favoritelist
            console.log( this.favoritelist)
           
        },


    }
</script>

<style lang="scss" scoped>
.favorite{
    padding: 0 10px;
    .title{
        padding:0 10px;
        font-size: 18px;
        color: #00c3f5;
        width: 100px;
        padding-bottom: 20px;
        border-bottom: 2px solid #00c3f5;
    }
    .favoritebox{
        position: relative;
        margin-top: 20px;
        width: 220px;
        padding: 35px 0 30px;
        text-align: center;
        border: 1px solid #eee;
        float: left;
        margin-left: 12px;
        &:hover{
            border:  1px solid #00c3f5;
        }
         &:hover i img{
           display: block;
        }
        i{
            position: absolute;
            right: 20px;
            top: 15px;
            img{
                display: none;
            }
        }
        a{
            img{
                width: 166px;
            }
            .name{
                font-size: 16px;
                color: #666;
            }
        }
       
    }
}
</style>