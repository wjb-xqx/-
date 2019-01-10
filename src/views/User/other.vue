<template>
    <div class="use">
          <!-- 返回 -->
        <div class="return clearfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
            毕SAPAH
            <span tag="span" class="fr post">
                <i class="iconfont">&#xe637;</i>
            </span>
        </div>
       <com-user-page></com-user-page>
    </div>
</template>

<script>
import comUserPage from '@/components/userPage/userPage';
export default {
     components:{
         comUserPage
     },
     methods:{
        prev(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
// 返回
.return{
    width: 100%;
    height: 48/50rem;
    font-size: 20/50rem;
    line-height: 48/50rem;
    color:#000;
    font-weight: 700;
    text-align: center;
    border-bottom: .001rem solid #EEEEF0;
    font-family: KaiTi;
    background-color: #fff;
    position: fixed;
    z-index: 99;
    >i{
        float: left;
        color:#FE4C86;
        font-size: 20/50rem;
        padding:0  10/50rem;
    }
    >.post{
        padding-right: 14/50rem;
        font-size: 14/50rem;
        color:#FE4C86;;
    }
}
</style>

