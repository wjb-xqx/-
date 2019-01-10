<template>
    <div class="Recommend">
        <van-swipe class="imgBox">
            <van-swipe-item>
                <img src="@/assets/images/tup.jpg" alt="" class="fl">
                <img src="@/assets/images/tup.jpg" alt="" class="fl">
                <img src="@/assets/images/tup.jpg" alt="" class="fl">
                <img src="@/assets/images/tup.jpg" alt="" class="fl">
            </van-swipe-item>
            <van-swipe-item>
                <img src="@/assets/images/tup.jpg" alt="" class="fl">
                <img src="@/assets/images/tup.jpg" alt="" class="fl">
                <img src="@/assets/images/tup.jpg" alt="" class="fl">
            </van-swipe-item>
        </van-swipe>
        <two-list></two-list>
    </div>  
</template>

<script>
import twoList from '@/components/comic/twoList'
export default {
    name:'Recommend',
    data(){
        return{
            listImg:[{
                     id:1,
                     url:require('../../assets/images/dongman.jpg')
                 },{
                     id:2,
                     url:require('../../assets/images/dongman.jpg')
                 },{
                     id:3,
                     url:require('../../assets/images/dongman.jpg')
                 },{
                     id:4,
                     url:require('../../assets/images/dongman.jpg')
                 },{
                     id:5,
                     url:require('../../assets/images/dongman.jpg')
            }]
        }
    },
    components:{
        twoList
    }
}
</script>

<style lang="less" scoped>
.Recommend{
    margin:  1.3rem 0;
        >.imgBox{
            height: 2rem;
            display: flex;
             overflow-x: scroll;
            >li{
                flex-direction:column;
                width: 2rem;
                float: left;
                margin-right: 10/50rem;
            }
        }
}
</style>

