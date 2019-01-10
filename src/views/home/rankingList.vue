<template>
    <div class="ranking">
        <nav-bar title="全站排行"></nav-bar>
        <div class="main">
            <van-tabs>
                <van-tab v-for="(item,index) in listnav" :title="item.name" :key="index">
                    <div class="main">
                        <ran-content></ran-content>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import navBar from '@/components/navBar/navBar'
import ranContent from './ranContent'
export default {
    data(){
        return{
            listnav:[{
                    id:1,
                    name:'综合'
                },{
                    id:2,
                    name:'视频'
                },{
                    id:3,
                    name:'绘画'
            },{
                    id:4,
                    name:'漫画'
            },{
                    id:5,
                    name:'音乐'
            }],
            active: 0,
        }
    },
    components:{
        navBar,
        ranContent
    }
}
</script>

<style lang="less" scoped>
/deep/.van-tabs__wrap{
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;
    z-index: 99;
}
/deep/.van-tabs__line{
    background-color: #000;
}
/deep/.van-tab{
    flex: 1;
    font-size: 18/50rem;
    
}
.main{
    margin-top: 30/50rem;
}
</style>

