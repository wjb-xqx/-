<template>
    <!-- 首页 -->
    <div class="home">
        <com-header homeTitle="true"></com-header>
        <transition name='navInfo'>
            <router-view/>    
        </transition>    
        <com-footer></com-footer>
    </div>
</template>

<script>
import comHeader from '@/components/header/comHeader';
import comFooter from '@/components/footer';
export default {
    data(){
        return{
            flag:false,
        }
    },
    components:{
        comFooter,
        comHeader
    }
}
</script>

<style lang="less" scoped>
.home{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:60/50rem;

}
.navInfo-enter {
     opacity: 0;
     transform: translateX(-100%);
   }

   .navInfo-leave-to {
     opacity: 0;
     transform: translateX(100%);
     position: absolute;
   }

   .navInfo-enter-active,
   .navInfo-leave-active {
     transition: all 0.5s ease;
}
</style>

