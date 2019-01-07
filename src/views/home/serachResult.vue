<template>
    <div class="result">
        <form action="/">
        <!-- style="position:fixed,width:100%" -->
            <van-search
              v-model="value"
              placeholder="魅力游戏"
              show-action
              @cancel="onCancel"
             />
        </form>
        <div class="main">
            <van-tabs>
                 <van-tab v-for="(item,index) in listnav" :key="index" :title="item.name">
                     <div class="main">
                        <se-content></se-content>
                        <!-- <se-vedio></se-vedio> -->
                        <!-- <se-use></se-use> -->
                     </div>
                 </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import seContent from './seContent'
import seVedio from './seVedio'
import seUse from './seUse'

export default {
    data(){
        return{
            listnav:[{
                id:1,
                name:'内容'
            },{
                id:2,
                name:'视频'
            },{
                id:3,
                name:'用户'
            }],
            active: 0,
            value:''
        }
    },
    methods:{
        onCancel(){
            this.$router.go(-1)
        }
    },
    components:{
        seContent,
        seVedio,
        seUse
    }
}
</script>

<style lang="less" scoped>
form{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 99;
}
// 导航
/deep/.van-tabs__wrap{
    left: 1rem;
    right: 1rem;
}
/deep/.van-tabs__wrap{
    position: fixed;
    top: 44/50rem;
    left: 0;
    right: 0;
    z-index: 99;
}
/deep/.van-tabs__line{
    background-color: #000;
}
.main{
    margin-top: 25/50rem;
}
</style>
