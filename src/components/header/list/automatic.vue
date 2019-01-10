<template>
    <div class="info">
         <nav-bar title="自动回复"></nav-bar>
         <ul class="main">
             <router-link tag="li" to="">被关注自动回复 
                 <span class="fr"><van-icon name="arrow" /></span>
            </router-link>
            <router-link tag="li" to="">添加关键词回复 
                 <span class="fr"><van-icon name="plus" /></span>
            </router-link>
         </ul>
    </div>  
</template>

<script>
import navBar from '../../navBar/navBar'
export default {
     components:{
        navBar
    }
}
</script>

<style lang="less" scoped>
.main{
    position: absolute;
    background-color: #FAFAFA;
    top: 46/50rem;
    left: 0;
    right: 0;
    bottom: 0;
    >li{
        line-height: 1.2rem;
        padding: 0 20/50rem;
        border-bottom: .001rem solid #EEEEF0;
        font-size: 16/50rem;
        background-color: #fff;
        margin-bottom: 10/50rem;
    }
}
</style>

