<template>
    <div class="hot">
        <!-- 热门的导航路由 -->
         <van-tabs> 
            <van-tab v-for="(item,index) in navList" :title="item.name" :key="index">
               <hot-more></hot-more>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import hotMore from './hotMore'
export default {
   name:'hot',
   data(){
       return{
           navList:[{
                id:'1',
                 name:'热门'
             },{
                 id:'2',
                 name:'次元'
             },{
                 id:'3',
                 name:'日常'
             },{
                 id:'4',
                 name:'影音'
             },{
                 id:'5',
                 name:'游戏'
           }],
       }
   },
   methods:{

   },
   components:{
       hotMore
   }
}
</script>

<style lang="less" scoped>
.hot{
    margin-top: 1.2rem;
    /deep/.van-tabs__wrap{
        z-index:1;
    }
  
}
</style>

