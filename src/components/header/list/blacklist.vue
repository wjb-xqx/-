<template>
    <div class="black">
         <nav-bar title="黑名单"></nav-bar>
         <div class="main">
             <img src="@/assets/images/c2.jpg" alt="">
         </div>
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
    >img{
        width: 80%;
        display: block;
        margin: 0 auto;
    }
}
</style>

