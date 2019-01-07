<template>
    <div class="creadte">
        <navbar title="创建收藏" rightText="完成"></navbar>
        <div class="main">
            <div class="input">
                名称<input type="text" placeholder="收藏夹标题">
            </div>
            <div class="input">
                公开
                <span class="fr">
                 <van-switch
                    v-model="checked"
                    active-color="#EEEEF0"
                    inactive-color="#E37A99"
                    size="25px"
                 />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../../navbar/navbar'
export default {
    data(){
        return{
            checked: true,
        }
    },
    components:{
        navbar
    }
}
</script>

<style lang="less" scoped>
.main{
    position: absolute;
    top: 46/50rem;
    background-color: #FAFAFA;
    left: 0;
    right: 0;
    bottom: 0;
    >.input{
        line-height: 1.5rem;
        background-color: #fff;
        margin-bottom: 10/50rem;
        font-size: 18/50rem;
        padding: 0 10/50rem;
        >input{
            width: 80%;
            height: 100%;
            padding-left: 15/50rem;
        }
    }
}
</style>
